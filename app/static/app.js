const fileInput = document.getElementById("fileInput");
const previewGrid = document.getElementById("previewGrid");
const removeBgBtn = document.getElementById("removeBgBtn");
const scaleWeighBtn = document.getElementById("scaleWeighBtn");
const scaleOptions = document.getElementById("scaleOptions");
const lengthInput = document.getElementById("lengthInput");
const breadthInput = document.getElementById("breadthInput");
const heightInput = document.getElementById("heightInput");
const weightInput = document.getElementById("weightInput");
const inputModal = document.getElementById("inputModal");
const cancelModalBtn = document.getElementById("cancelModalBtn");
const confirmGenerateBtn = document.getElementById("confirmGenerateBtn");
const finalImage = document.getElementById("finalImage");
const statusText = document.getElementById("status");
const processedPreviewImage = document.getElementById("processedPreviewImage");
const processedPreviewPlaceholder = document.getElementById("processedPreviewPlaceholder");
const saveProcessedBtn = document.getElementById("saveProcessedBtn");
const saveStatusText = document.getElementById("saveStatusText");
const savedSlotsRow = document.getElementById("savedSlotsRow");
const processedListRow = document.getElementById("processedListRow");
const originalCompareImage = document.getElementById("originalCompareImage");
const originalComparePlaceholder = document.getElementById("originalComparePlaceholder");
const processedCompareImage = document.getElementById("processedCompareImage");
const processedComparePlaceholder = document.getElementById("processedComparePlaceholder");
const designerSliderTrack = document.getElementById("designerSliderTrack");
const designerProgressSteps = Array.from(document.querySelectorAll(".designer-progress-step"));
const designerLiveImage = document.getElementById("designerLiveImage");
const designerLiveText = document.getElementById("designerLiveText");
const designerText = document.getElementById("designerText");
const designerFontStyle = document.getElementById("designerFontStyle");
const designerTextColor = document.getElementById("designerTextColor");
const designerAlignButtons = Array.from(document.querySelectorAll(".designer-align-btn"));
const designerScaleOptions = document.getElementById("designerScaleOptions");

let selectedIndex = -1;
let previewItems = [];
let serverImages = [];
let selectedScaleType = "rectangular";
let currentImage = null;
const previousImages = [];
let selectedHistoryIndex = -1;
let pendingUploadFiles = [];
let latestProcessedPreview = null;
const savedImages = [];

function appendWithLimit(previous, incoming, maxItems = 5) {
  if (!Array.isArray(previous) || !Array.isArray(incoming) || incoming.length === 0) {
    return previous;
  }

  console.log("[Image Debug] Current image list before add:", previous);
  console.log("[Image Debug] New image(s) to add:", incoming);

  const next = [...previous, ...incoming].slice(-maxItems);
  console.log("[Image Debug] Final image list after update:", next);
  return next;
}

function setStatus(message, isError = false) {
  statusText.textContent = message;
  statusText.style.color = isError ? "#b42318" : "#2a3a4a";
}

function showProcessedPreview(url, name = null) {
  if (!processedPreviewImage || !processedPreviewPlaceholder) {
    return;
  }
  if (!url) {
    latestProcessedPreview = null;
    processedPreviewImage.style.display = "none";
    processedPreviewImage.removeAttribute("src");
    processedPreviewPlaceholder.style.display = "block";
    return;
  }
  const parsedName =
    name || decodeURIComponent((url.split("/").pop() || "").split("?")[0] || "");
  latestProcessedPreview = { url, name: parsedName };
  processedPreviewImage.src = `${url}?t=${Date.now()}`;
  processedPreviewImage.style.display = "block";
  processedPreviewPlaceholder.style.display = "none";

  if (designerLiveImage) {
    designerLiveImage.src = `${url}?t=${Date.now()}_live`;
    designerLiveImage.style.display = "block";
  }
}

function setSaveStatus(message, isError = false) {
  if (!saveStatusText) {
    return;
  }
  saveStatusText.textContent = message;
  saveStatusText.style.color = isError ? "#b42318" : "#2a3a4a";
}

function renderSavedSlots() {
  if (!savedSlotsRow) {
    return;
  }

  const slots = Array.from(savedSlotsRow.querySelectorAll(".saved-slot"));
  slots.forEach((slot, index) => {
    slot.innerHTML = "";
    const saved = savedImages[index];
    if (!saved) {
      const label = document.createElement("span");
      label.textContent = `Slot ${index + 1}`;
      slot.appendChild(label);
      return;
    }

    const img = document.createElement("img");
    img.src = `${saved.url}?t=${Date.now()}_${index}`;
    img.alt = `Saved ${index + 1}`;
    slot.appendChild(img);
  });
}

if (saveProcessedBtn) {
  saveProcessedBtn.addEventListener("click", async () => {
    if (!latestProcessedPreview || !latestProcessedPreview.name) {
      setSaveStatus("No processed image to save.", true);
      return;
    }

    try {
      const safeName = encodeURIComponent(latestProcessedPreview.name);
      const response = await fetch(`/saved-images/${safeName}`, { method: "POST" });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.detail || "Failed to save.");
      }

      savedImages.length = 0;
      (data.images || []).forEach((img) => savedImages.push(img));
      renderSavedSlots();
      setSaveStatus(`Saved ${savedImages.length}/5 image(s).`);
    } catch (error) {
      setSaveStatus(error.message, true);
    }
  });
}

(async () => {
  try {
    const response = await fetch("/saved-images");
    const data = await response.json();
    if (data.images) {
      data.images.forEach((img) => savedImages.push(img));
    }
  } catch (_) {}
  renderSavedSlots();
})();

function showComparisonPreview(index) {
  if (
    !originalCompareImage ||
    !originalComparePlaceholder ||
    !processedCompareImage ||
    !processedComparePlaceholder
  ) {
    return;
  }

  const pair = previousImages[index];
  if (!pair || !pair.original || !pair.processed) {
    return;
  }

  originalCompareImage.src = pair.original.url;
  originalCompareImage.style.display = "block";
  originalComparePlaceholder.style.display = "none";

  processedCompareImage.src = `${pair.processed.url}?t=${Date.now()}`;
  processedCompareImage.style.display = "block";
  processedComparePlaceholder.style.display = "none";
}

function renderProcessedHistory() {
  if (!processedListRow) {
    return;
  }

  processedListRow.innerHTML = "";

  previousImages.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "processed-thumb-card";
    if (index === selectedHistoryIndex) {
      card.classList.add("selected");
    }

    card.addEventListener("click", () => {
      selectedHistoryIndex = index;
      renderProcessedHistory();
      showComparisonPreview(index);
      showProcessedPreview(item.processed.url, item.processed.name);
    });

    const img = document.createElement("img");
    img.src = `${item.processed.url}?t=${Date.now()}_${index}`;
    img.alt = item.processed.name || `processed-${index + 1}`;

    card.appendChild(img);
    processedListRow.appendChild(card);
  });
}

function updateImageQueue(originalFile, processedImage) {
  if (!originalFile || !processedImage || !processedImage.url) {
    return;
  }

  if (currentImage) {
    previousImages.unshift(currentImage);
    if (previousImages.length > 5) {
      previousImages.pop();
    }
  }

  currentImage = {
    original: { name: originalFile.name, url: URL.createObjectURL(originalFile) },
    processed: { name: processedImage.name, url: processedImage.url },
  };

  if (!previousImages.length) {
    selectedHistoryIndex = -1;
  } else if (selectedHistoryIndex >= previousImages.length) {
    selectedHistoryIndex = previousImages.length - 1;
  }

  console.log("[Image Queue] currentImage:", currentImage);
  console.log("[Image Queue] previousImages:", previousImages);

  renderProcessedHistory();
}

function renderPreview() {
  previewGrid.innerHTML = "";

  previewItems.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "preview-item";
    if (index === selectedIndex) {
      card.classList.add("selected");
    }

    card.addEventListener("click", () => {
      selectedIndex = index;
      renderPreview();
    });

    const image = document.createElement("img");
    image.src = item.url;
    image.alt = item.name;

    const label = document.createElement("p");
    label.textContent = item.name;

    card.appendChild(image);
    card.appendChild(label);
    previewGrid.appendChild(card);
  });
}

fileInput.addEventListener("change", () => {
  const files = Array.from(fileInput.files || []);
  if (!files.length) {
    return;
  }

  if (pendingUploadFiles.length >= 5) {
    setStatus("Maximum 5 images already added.", true);
    fileInput.value = "";
    return;
  }

  pendingUploadFiles = appendWithLimit(pendingUploadFiles, files, 5);

  const incomingPreview = files.map((file) => ({
    name: file.name,
    url: URL.createObjectURL(file),
  }));

  previewItems = appendWithLimit(previewItems, incomingPreview, 5);
  selectedIndex = previewItems.length ? previewItems.length - 1 : -1;

  finalImage.style.display = "none";
  renderPreview();
  setStatus(`${previewItems.length} image(s) in list.`);

  fileInput.value = "";
});

removeBgBtn.addEventListener("click", async () => {
  const files = pendingUploadFiles.slice();
  if (!files.length) {
    setStatus("Please upload image(s) first.", true);
    return;
  }

  const formData = new FormData();
  files.forEach((file) => formData.append("files", file));

  setStatus("Removing backgrounds...");
  try {
    const response = await fetch("/remove-backgrounds", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.detail || "Failed to remove background.");
    }

    const incomingProcessed = (data.images || []).map((image) => ({
      name: image.name,
      url: image.url,
    }));

    const pairCount = Math.min(files.length, incomingProcessed.length);
    for (let index = 0; index < pairCount; index += 1) {
      updateImageQueue(files[index], incomingProcessed[index]);
    }

    if (currentImage) {
      serverImages = [currentImage.processed];
      previewItems = [{ name: currentImage.processed.name, url: currentImage.processed.url }];
      showProcessedPreview(currentImage.processed.url, currentImage.processed.name);
    } else {
      serverImages = [];
      previewItems = [];
      showProcessedPreview("");
    }

    pendingUploadFiles = [];
    fileInput.value = "";

    selectedIndex = previewItems.length ? previewItems.length - 1 : -1;
    renderPreview();
    setStatus("Background removed for uploaded images.");
  } catch (error) {
    setStatus(error.message, true);
  }
});

scaleOptions.addEventListener("click", (event) => {
  const button = event.target.closest(".scale-option");
  if (!button) {
    return;
  }

  selectedScaleType = button.dataset.scale;
  Array.from(scaleOptions.querySelectorAll(".scale-option")).forEach((option) => {
    option.classList.remove("selected");
  });
  button.classList.add("selected");
});

function openModal() {
  inputModal.classList.remove("hidden");
}

function closeModal() {
  inputModal.classList.add("hidden");
}

scaleWeighBtn.addEventListener("click", () => {
  if (selectedIndex < 0 || !serverImages.length) {
    setStatus("Select one background-removed image first.", true);
    return;
  }
  openModal();
});

cancelModalBtn.addEventListener("click", closeModal);

confirmGenerateBtn.addEventListener("click", async () => {
  if (selectedIndex < 0 || !serverImages.length) {
    setStatus("Select one processed image.", true);
    return;
  }

  const length = Number(lengthInput.value);
  const breadth = Number(breadthInput.value);
  const height = Number(heightInput.value);
  const weight = Number(weightInput.value);

  if (!Number.isFinite(length) || length <= 0 || !Number.isFinite(breadth) || breadth <= 0 || !Number.isFinite(height) || height <= 0 || !Number.isFinite(weight) || weight <= 0) {
    setStatus("Weight and LxBxH must be valid positive values.", true);
    return;
  }

  const selected = serverImages[selectedIndex];
  const formData = new FormData();
  formData.append("selected_image", selected.name);
  formData.append("length", String(length));
  formData.append("breadth", String(breadth));
  formData.append("height", String(height));
  formData.append("weight", String(weight));
  formData.append("scale_type", selectedScaleType);

  setStatus("Generating final image...");
  try {
    const response = await fetch("/generate-final-image", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.detail || "Failed to generate final image.");
    }

    finalImage.src = `${data.image_url}?t=${Date.now()}`;
    finalImage.style.display = "block";
    closeModal();
    setStatus("Final image generated.");
  } catch (error) {
    setStatus(error.message, true);
  }
});

inputModal.addEventListener("click", (event) => {
  if (event.target === inputModal) {
    closeModal();
  }
});

let designerStep = 0;

function setDesignerStep(step) {
  if (!designerSliderTrack) {
    return;
  }

  const boundedStep = Math.max(0, Math.min(3, step));
  designerStep = boundedStep;
  designerSliderTrack.style.transform = `translateX(-${boundedStep * 25}%)`;

  designerProgressSteps.forEach((item, index) => {
    item.classList.toggle("active", index === boundedStep);
  });
}

function bindDesignerNav(buttonId, targetStep) {
  const button = document.getElementById(buttonId);
  if (!button) {
    return;
  }
  button.addEventListener("click", () => setDesignerStep(targetStep));
}

bindDesignerNav("designerNext1", 1);
bindDesignerNav("designerBack2", 0);
bindDesignerNav("designerNext2", 2);
bindDesignerNav("designerBack3", 1);
bindDesignerNav("designerNext3", 3);
bindDesignerNav("designerBack4", 2);

designerProgressSteps.forEach((step, index) => {
  step.addEventListener("click", () => setDesignerStep(index));
});

function updateDesignerLiveText() {
  if (!designerLiveText) {
    return;
  }

  const textValue = (designerText?.value || "").trim();
  designerLiveText.textContent = textValue || "Your text appears here";
  designerLiveText.style.fontFamily = designerFontStyle?.value || "Inter";
  designerLiveText.style.color = designerTextColor?.value || "#ffffff";
}

if (designerText) {
  designerText.addEventListener("input", updateDesignerLiveText);
}
if (designerFontStyle) {
  designerFontStyle.addEventListener("change", updateDesignerLiveText);
}
if (designerTextColor) {
  designerTextColor.addEventListener("input", updateDesignerLiveText);
}

designerAlignButtons.forEach((button) => {
  button.addEventListener("click", () => {
    designerAlignButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    if (designerLiveText) {
      const align = button.dataset.align || "center";
      designerLiveText.style.textAlign = align;
      if (align === "left") {
        designerLiveText.style.left = "16px";
        designerLiveText.style.right = "16px";
      } else if (align === "right") {
        designerLiveText.style.left = "16px";
        designerLiveText.style.right = "16px";
      } else {
        designerLiveText.style.left = "16px";
        designerLiveText.style.right = "16px";
      }
    }
  });
});

if (designerScaleOptions) {
  designerScaleOptions.addEventListener("click", (event) => {
    const button = event.target.closest(".designer-scale-option");
    if (!button) {
      return;
    }

    selectedScaleType = button.dataset.scale;
    Array.from(designerScaleOptions.querySelectorAll(".designer-scale-option")).forEach((item) => {
      item.classList.remove("selected");
    });
    button.classList.add("selected");
  });
}

updateDesignerLiveText();
