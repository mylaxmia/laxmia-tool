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

let selectedIndex = -1;
let previewItems = [];
let serverImages = [];
let selectedScaleType = "rectangular";

function setStatus(message, isError = false) {
  statusText.textContent = message;
  statusText.style.color = isError ? "#b42318" : "#2a3a4a";
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
  if (files.length > 5) {
    setStatus("You can upload maximum 5 images.", true);
    fileInput.value = "";
    previewItems = [];
    renderPreview();
    return;
  }

  selectedIndex = files.length ? 0 : -1;
  serverImages = [];
  finalImage.style.display = "none";
  previewItems = files.map((file) => ({
    name: file.name,
    url: URL.createObjectURL(file),
  }));
  renderPreview();
  setStatus(`${files.length} image(s) selected.`);
});

removeBgBtn.addEventListener("click", async () => {
  const files = Array.from(fileInput.files || []);
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

    serverImages = data.images || [];
    previewItems = serverImages.map((image) => ({
      name: image.name,
      url: image.url,
    }));
    selectedIndex = previewItems.length ? 0 : -1;
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
