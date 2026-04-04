const fileInput = document.getElementById("fileInput");
const previewGrid = document.getElementById("previewGrid");
const removeBgBtn = document.getElementById("removeBgBtn");
const applyBgStyleBtn = document.getElementById("applyBgStyleBtn");
const bgFillColorInput = document.getElementById("bgFillColorInput");
const templateStyleSelect = document.getElementById("templateStyleSelect");
const shadowStrengthInput = document.getElementById("shadowStrengthInput");
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
const uploadBox = document.getElementById("uploadBox");
const filePreview = document.getElementById("filePreview");
const uploadDeviceBtn = document.getElementById("uploadDeviceBtn");
const useCameraBtn = document.getElementById("useCameraBtn");
const connectPhoneBtn = document.getElementById("connectPhoneBtn");
const capturePhotoBtn = document.getElementById("capturePhotoBtn");
const stopCameraBtn = document.getElementById("stopCameraBtn");
const cameraContainer = document.getElementById("cameraContainer");
const cameraVideo = document.getElementById("cameraVideo");
const cameraCanvas = document.getElementById("cameraCanvas");
const cameraStatusText = document.getElementById("cameraStatusText");
const phoneConnectPanel = document.getElementById("phoneConnectPanel");
const phoneQrImage = document.getElementById("phoneQrImage");
const phoneConnectStatus = document.getElementById("phoneConnectStatus");
const phoneConnectLink = document.getElementById("phoneConnectLink");
const refreshPhoneQrBtn = document.getElementById("refreshPhoneQrBtn");
const mobileLiveStatus = document.getElementById("mobileLiveStatus");
const mobileLivePlaceholder = document.getElementById("mobileLivePlaceholder");
const phoneLiveFrame = document.getElementById("phoneLiveFrame");
const desktopCameraMirror = document.getElementById("desktopCameraMirror");
const mobileLiveStage = document.getElementById("mobileLiveStage");
const screenPortraitBtn = document.getElementById("screenPortraitBtn");
const screenLandscapeBtn = document.getElementById("screenLandscapeBtn");
const captureFromLiveBtn = document.getElementById("captureFromLiveBtn");
const takePictureLiveBtn = document.getElementById("takePictureLiveBtn");
const workflowTrack = document.getElementById("workflowTrack");
const workflowProgressSteps = Array.from(document.querySelectorAll(".workflow-progress-step"));
const designerLiveImage = document.getElementById("designerLiveImage");
const designerLiveText = document.getElementById("designerLiveText");
const designerText = document.getElementById("designerText");
const designerFontStyle = document.getElementById("designerFontStyle");
const designerTextColor = document.getElementById("designerTextColor");
const designerAlignButtons = Array.from(document.querySelectorAll(".designer-align-btn"));
const designerScaleOptions = document.getElementById("designerScaleOptions");
const postsPage = document.getElementById("postsPage");

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
let cameraStream = null;
let phoneSessionId = "";
let phoneLastUploadId = 0;
let phonePollIntervalId = null;
let livePreviewMode = "idle";

function setLiveStatus(message) {
  if (!mobileLiveStatus) {
    return;
  }
  mobileLiveStatus.textContent = message;
}

function setLivePreviewMode(mode, url = "") {
  livePreviewMode = mode;

  if (phoneLiveFrame) {
    if (mode === "phone" && url) {
      phoneLiveFrame.src = url;
      phoneLiveFrame.classList.add("is-visible");
    } else {
      phoneLiveFrame.classList.remove("is-visible");
      phoneLiveFrame.removeAttribute("src");
    }
  }

  if (desktopCameraMirror) {
    if (mode === "camera" && cameraStream) {
      desktopCameraMirror.srcObject = cameraStream;
      desktopCameraMirror.classList.add("is-visible");
    } else {
      desktopCameraMirror.classList.remove("is-visible");
      desktopCameraMirror.srcObject = null;
    }
  }

  if (mobileLivePlaceholder) {
    mobileLivePlaceholder.style.display = mode === "idle" ? "block" : "none";
  }

  if (captureFromLiveBtn) {
    const showCaptureBtn = mode === "phone" || mode === "camera";
    captureFromLiveBtn.classList.toggle("hidden", !showCaptureBtn);
  }

  if (takePictureLiveBtn) {
    const showCaptureBtn = mode === "phone" || mode === "camera";
    takePictureLiveBtn.classList.toggle("hidden", !showCaptureBtn);
  }
}

function enforcePostsLayout() {
  if (!postsPage || !postsPage.classList.contains("page-active")) {
    return;
  }

  postsPage.classList.toggle("is-stacked", window.innerWidth <= 1100);
  postsPage.style.removeProperty("display");
  postsPage.style.removeProperty("grid-template-columns");
  postsPage.style.removeProperty("grid-template-areas");
  postsPage.style.removeProperty("align-items");
  postsPage.style.removeProperty("gap");
}

function setScreenOrientation(mode) {
  if (!mobileLiveStage) {
    return;
  }

  const isLandscape = mode === "landscape";
  mobileLiveStage.classList.toggle("force-landscape", isLandscape);
  mobileLiveStage.classList.toggle("force-portrait", !isLandscape);
  
  if (postsPage) {
    postsPage.classList.toggle("force-landscape", isLandscape);
  }

  if (screenPortraitBtn) {
    screenPortraitBtn.classList.toggle("active", !isLandscape);
    screenPortraitBtn.setAttribute("aria-pressed", String(!isLandscape));
  }
  if (screenLandscapeBtn) {
    screenLandscapeBtn.classList.toggle("active", isLandscape);
    screenLandscapeBtn.setAttribute("aria-pressed", String(isLandscape));
  }

  if (isLandscape) {
    setLiveStatus("Landscape view enabled.");
  } else {
    setLiveStatus("Straight hold view enabled.");
  }
}

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

function setCameraStatus(message, isError = false) {
  if (!cameraStatusText) {
    return;
  }
  cameraStatusText.textContent = message;
  cameraStatusText.style.color = isError ? "#b42318" : "#2a3a4a";
}

function setPhoneStatus(message, isError = false) {
  if (!phoneConnectStatus) {
    return;
  }
  phoneConnectStatus.textContent = message;
  phoneConnectStatus.style.color = isError ? "#b42318" : "#9fb6c9";
}

function stopPhonePolling() {
  if (phonePollIntervalId) {
    window.clearInterval(phonePollIntervalId);
    phonePollIntervalId = null;
  }
}

async function importPhoneCapture(upload) {
  if (!upload?.url || !upload?.name) {
    return;
  }

  const response = await fetch(upload.url);
  if (!response.ok) {
    throw new Error("Failed to download phone image.");
  }
  const blob = await response.blob();
  const imageFile = new File([blob], upload.name, {
    type: blob.type || "image/jpeg",
    lastModified: Date.now(),
  });

  addFilesToQueue([imageFile]);
}

async function pollPhoneCaptures() {
  if (!phoneSessionId) {
    return;
  }

  try {
    const response = await fetch(`/phone-connect/${encodeURIComponent(phoneSessionId)}/uploads?after=${phoneLastUploadId}`);
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data.detail || "Failed to sync phone uploads.");
    }

    const uploads = Array.isArray(data.uploads) ? data.uploads : [];
    if (!uploads.length) {
      return;
    }

    for (const upload of uploads) {
      await importPhoneCapture(upload);
      phoneLastUploadId = Math.max(phoneLastUploadId, Number(upload.id) || phoneLastUploadId);
    }

    setPhoneStatus(`Imported ${uploads.length} image(s) from phone.`);
    setStatus(`${pendingUploadFiles.length} image(s) in list.`);
  } catch (error) {
    setPhoneStatus(error.message || "Phone sync stopped.", true);
    stopPhonePolling();
  }
}

async function startPhoneConnect() {
  if (!phoneConnectPanel || !phoneQrImage || !phoneConnectLink) {
    return;
  }

  try {
    const response = await fetch("/phone-connect/session", { method: "POST" });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data.detail || "Unable to generate barcode.");
    }

    phoneSessionId = data.session_id || "";
    phoneLastUploadId = 0;
    stopPhonePolling();

    const connectPath = data.connect_url || "";
    const connectUrl = connectPath.startsWith("http")
      ? connectPath
      : `${window.location.origin}${connectPath}`;
    const qrApi = "https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=";

    phoneQrImage.src = `${qrApi}${encodeURIComponent(connectUrl)}`;
    phoneConnectLink.href = connectUrl;
    phoneConnectLink.textContent = connectUrl;
    phoneConnectPanel.classList.remove("hidden");
    setLivePreviewMode("phone", connectUrl);

    setPhoneStatus("Scan this barcode using your phone camera, then upload photos there.");
    setLiveStatus("Live phone screen loaded. Grant camera permission on your phone when asked.");
    phonePollIntervalId = window.setInterval(pollPhoneCaptures, 2500);
    pollPhoneCaptures();
  } catch (error) {
    setPhoneStatus(error.message || "Unable to generate barcode.", true);
    setLiveStatus("Unable to load phone preview. Try refreshing the barcode.");
  }
}

function resetComparisonPreview() {
  if (
    !originalCompareImage ||
    !originalComparePlaceholder ||
    !processedCompareImage ||
    !processedComparePlaceholder
  ) {
    return;
  }

  originalCompareImage.style.display = "none";
  originalCompareImage.removeAttribute("src");
  originalComparePlaceholder.style.display = "block";

  processedCompareImage.style.display = "none";
  processedCompareImage.removeAttribute("src");
  processedComparePlaceholder.style.display = "block";
}

function removeImageEverywhereByName(imageName) {
  if (!imageName) {
    return;
  }

  previewItems = previewItems.filter((item) => item.name !== imageName);
  serverImages = serverImages.filter((item) => item.name !== imageName);

  if (latestProcessedPreview && latestProcessedPreview.name === imageName) {
    showProcessedPreview("");
  }

  if (currentImage && (currentImage.original.name === imageName || currentImage.processed.name === imageName)) {
    currentImage = null;
  }

  const keptHistory = previousImages.filter(
    (item) => item.original.name !== imageName && item.processed.name !== imageName
  );
  previousImages.length = 0;
  keptHistory.forEach((item) => previousImages.push(item));

  if (selectedHistoryIndex >= previousImages.length) {
    selectedHistoryIndex = previousImages.length - 1;
  }
  if (selectedHistoryIndex < 0) {
    resetComparisonPreview();
  }

  const keptSaved = savedImages.filter((item) => item.name !== imageName);
  savedImages.length = 0;
  keptSaved.forEach((item) => savedImages.push(item));

  if (selectedIndex >= previewItems.length) {
    selectedIndex = previewItems.length - 1;
  }

  renderSavedSlots();
  renderProcessedHistory();
  renderPreview();
}

function renderUploadList() {
  if (!filePreview) {
    return;
  }

  filePreview.innerHTML = "";
  if (!pendingUploadFiles.length) {
    const empty = document.createElement("p");
    empty.className = "file-preview-empty";
    empty.textContent = "No files selected yet.";
    filePreview.appendChild(empty);
    return;
  }

  pendingUploadFiles.forEach((file, index) => {
    const row = document.createElement("div");
    row.className = "file-preview-item";

    const thumb = document.createElement("img");
    thumb.className = "file-preview-thumb";
    thumb.src = URL.createObjectURL(file);
    thumb.alt = file.name;

    const label = document.createElement("span");
    label.className = "file-preview-name";
    label.textContent = file.name;

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "file-delete-btn";
    removeBtn.textContent = "✕";
    removeBtn.setAttribute("aria-label", `Remove ${file.name}`);
    removeBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      const [removed] = pendingUploadFiles.splice(index, 1);
      if (removed) {
        removeImageEverywhereByName(removed.name);
      }
      renderUploadList();
      setStatus(`${pendingUploadFiles.length} image(s) in list.`);
    });

    row.appendChild(thumb);
    row.appendChild(label);
    row.appendChild(removeBtn);
    filePreview.appendChild(row);
  });
}

function addFilesToQueue(files) {
  const incoming = Array.isArray(files) ? files.filter(Boolean) : [];
  if (!incoming.length) {
    return;
  }

  const available = Math.max(0, 5 - pendingUploadFiles.length);
  if (!available) {
    setStatus("Maximum 5 images already added.", true);
    return;
  }

  const accepted = incoming.slice(0, available);
  if (incoming.length > accepted.length) {
    setStatus("Only 5 images are allowed. Extra images were ignored.", true);
  }

  pendingUploadFiles = appendWithLimit(pendingUploadFiles, accepted, 5);

  const incomingPreview = accepted.map((file) => ({
    name: file.name,
    url: URL.createObjectURL(file),
  }));

  previewItems = appendWithLimit(previewItems, incomingPreview, 5);
  selectedIndex = previewItems.length ? previewItems.length - 1 : -1;

  finalImage.style.display = "none";
  renderPreview();
  renderUploadList();
  setStatus(`${pendingUploadFiles.length} image(s) in list.`);
}

async function startCamera() {
  if (!cameraContainer || !cameraVideo) {
    return;
  }

  if (pendingUploadFiles.length >= 5) {
    setStatus("Maximum 5 images already added.", true);
    return;
  }

  try {
    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment" },
      audio: false,
    });
    cameraVideo.srcObject = cameraStream;
    cameraContainer.classList.remove("hidden");
    setLivePreviewMode("camera");
    setCameraStatus("Camera connected. Capture your product image.");
    setLiveStatus("Desktop camera preview is active.");
  } catch (_) {
    setCameraStatus("Camera access not available. Please upload from device.", true);
    setStatus("Camera access not available. Please upload from device.", true);
    setLiveStatus("Camera access blocked. Use phone connect or upload from device.");
  }
}

function stopCamera() {
  if (cameraStream) {
    cameraStream.getTracks().forEach((track) => track.stop());
    cameraStream = null;
  }

  if (cameraVideo) {
    cameraVideo.srcObject = null;
  }

  if (cameraContainer) {
    cameraContainer.classList.add("hidden");
  }

  if (livePreviewMode === "camera") {
    if (phoneSessionId && phoneConnectLink?.href) {
      setLivePreviewMode("phone", phoneConnectLink.href);
      setLiveStatus("Phone live screen is active.");
    } else {
      setLivePreviewMode("idle");
      setLiveStatus("Connect phone or start desktop camera to preview here.");
    }
  }
}

function captureFromCamera() {
  if (!cameraVideo || !cameraCanvas || !cameraStream) {
    setCameraStatus("Open camera first.", true);
    return;
  }

  if (pendingUploadFiles.length >= 5) {
    setStatus("Maximum 5 images already added.", true);
    return;
  }

  const width = cameraVideo.videoWidth;
  const height = cameraVideo.videoHeight;
  if (!width || !height) {
    setCameraStatus("Camera is not ready yet.", true);
    return;
  }

  cameraCanvas.width = width;
  cameraCanvas.height = height;
  const context = cameraCanvas.getContext("2d");
  context.drawImage(cameraVideo, 0, 0, width, height);

  cameraCanvas.toBlob(
    (blob) => {
      if (!blob) {
        setCameraStatus("Failed to capture photo.", true);
        return;
      }
      const photoFile = new File([blob], `camera_${Date.now()}.png`, { type: "image/png" });
      addFilesToQueue([photoFile]);
      setCameraStatus("Photo captured and added.");
    },
    "image/png",
    0.95
  );
}

function captureFromLiveView() {
  if (livePreviewMode === "camera") {
    captureFromCamera();
  } else if (livePreviewMode === "phone") {
    if (phoneLiveFrame) {
      try {
        phoneLiveFrame.contentWindow.postMessage({ action: "capturePhoto" }, "*");
        setLiveStatus("Capture photo triggered on phone.");
      } catch (error) {
        console.error("Error sending capture message:", error);
        setLiveStatus("Could not trigger phone capture.");
      }
    }
  } else {
    setLiveStatus("No active live view to capture from.");
  }
}

function showProcessedPreview(url, name = null) {
  if (!processedPreviewImage || !processedPreviewPlaceholder) {
    return;
  }
  if (!url) {
    latestProcessedPreview = null;
    processedPreviewImage.style.display = "none";
    processedPreviewImage.classList.remove("is-visible");
    processedPreviewImage.removeAttribute("src");
    processedPreviewPlaceholder.style.display = "block";
    return;
  }
  const parsedName =
    name || decodeURIComponent((url.split("/").pop() || "").split("?")[0] || "");
  latestProcessedPreview = { url, name: parsedName };
  processedPreviewImage.classList.remove("is-visible");
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
      slot.classList.remove("has-image");
      slot.removeAttribute("tabindex");
      return;
    }

    slot.classList.add("has-image");
    slot.tabIndex = 0;
    slot.onclick = () => showProcessedPreview(saved.url, saved.name);
    slot.onkeydown = (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showProcessedPreview(saved.url, saved.name);
      }
    };

    const img = document.createElement("img");
    img.src = `${saved.url}?t=${Date.now()}_${index}`;
    img.alt = `Saved ${index + 1}`;
    slot.appendChild(img);
  });
}

if (processedPreviewImage) {
  processedPreviewImage.addEventListener("load", () => {
    processedPreviewImage.classList.add("is-visible");
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

  for (let index = 0; index < 5; index += 1) {
    const card = document.createElement("div");
    card.className = "capture-slot";
    if (index === selectedIndex) {
      card.classList.add("selected");
    }

    const item = previewItems[index];
    if (item) {
      card.classList.add("filled");
      card.addEventListener("click", () => {
        selectedIndex = index;
        renderPreview();
      });

      const image = document.createElement("img");
      image.src = item.url;
      image.alt = item.name;
      card.appendChild(image);
    } else {
      const label = document.createElement("span");
      label.textContent = `Slot ${index + 1}`;
      card.appendChild(label);
    }

    previewGrid.appendChild(card);
  }
}

if (uploadBox) {
  uploadBox.addEventListener("click", (event) => {
    if (event.target.closest(".file-delete-btn")) {
      return;
    }
    fileInput.click();
  });

  uploadBox.addEventListener("dragover", (event) => {
    event.preventDefault();
    uploadBox.classList.add("drag-over");
  });

  uploadBox.addEventListener("dragleave", () => {
    uploadBox.classList.remove("drag-over");
  });

  uploadBox.addEventListener("drop", (event) => {
    event.preventDefault();
    uploadBox.classList.remove("drag-over");
    addFilesToQueue(Array.from(event.dataTransfer?.files || []));
  });
}

if (uploadDeviceBtn) {
  uploadDeviceBtn.addEventListener("click", () => fileInput.click());
}

if (useCameraBtn) {
  useCameraBtn.addEventListener("click", startCamera);
}

if (connectPhoneBtn) {
  connectPhoneBtn.addEventListener("click", startPhoneConnect);
}

if (refreshPhoneQrBtn) {
  refreshPhoneQrBtn.addEventListener("click", startPhoneConnect);
}

if (capturePhotoBtn) {
  capturePhotoBtn.addEventListener("click", captureFromCamera);
}

if (stopCameraBtn) {
  stopCameraBtn.addEventListener("click", stopCamera);
}

fileInput.addEventListener("change", () => {
  addFilesToQueue(Array.from(fileInput.files || []));
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
      selectedIndex = 0;
      showProcessedPreview(currentImage.processed.url, currentImage.processed.name);
    } else {
      serverImages = [];
      showProcessedPreview("");
    }

    pendingUploadFiles = [];
    fileInput.value = "";

    if (!previewItems.length) {
      selectedIndex = -1;
    }
    renderPreview();
    setStatus("Background removed for uploaded images.");
  } catch (error) {
    setStatus(error.message, true);
  }
});

if (applyBgStyleBtn) {
  applyBgStyleBtn.addEventListener("click", async () => {
    if (selectedIndex < 0 || !serverImages.length) {
      setStatus("Remove background first, then select an image.", true);
      return;
    }

    const selected = serverImages[selectedIndex];
    const formData = new FormData();
    formData.append("image_name", selected.name);
    formData.append("fill_color", bgFillColorInput?.value || "#f5f5f5");
    formData.append("template_style", templateStyleSelect?.value || "clean");
    formData.append("shadow_strength", shadowStrengthInput?.value || "55");

    setStatus("Applying color, template and shadow...");
    try {
      const response = await fetch("/apply-style", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.detail || "Failed to apply style.");
      }

      const styled = data.image;
      if (!styled?.url || !styled?.name) {
        throw new Error("Styled image response is incomplete.");
      }

      serverImages = [{ name: styled.name, url: styled.url }];
      selectedIndex = 0;
      showProcessedPreview(styled.url, styled.name);
      renderPreview();
      setStatus("Style applied. Continue to next step.");
    } catch (error) {
      setStatus(error.message || "Failed to apply style.", true);
    }
  });
}

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

window.addEventListener("beforeunload", () => {
  stopCamera();
  stopPhonePolling();
});

let workflowStep = 0;
let workflowCompletedUntil = -1;

function hydrateWorkflowFromCaptured() {
  if (!previewItems.length) {
    return;
  }

  savedImages.length = 0;
  previewItems.slice(0, 5).forEach((item) => {
    savedImages.push({
      name: item.name,
      url: item.url,
    });
  });
  renderSavedSlots();

  const firstImage = previewItems[0];
  if (firstImage && designerLiveImage) {
    designerLiveImage.src = firstImage.url;
    designerLiveImage.style.display = "block";
  }

  if (firstImage) {
    showProcessedPreview(firstImage.url, firstImage.name);
  }
}

function updateWorkflowProgressState(activeStep) {
  workflowProgressSteps.forEach((item, index) => {
    item.classList.toggle("active", index === activeStep);
    item.classList.toggle("completed", index <= workflowCompletedUntil);
  });
}

function setWorkflowStep(step) {
  if (!workflowTrack) {
    return;
  }

  const boundedStep = Math.max(0, Math.min(4, step));
  workflowStep = boundedStep;
  workflowTrack.style.transform = `translateX(-${boundedStep * 20}%)`;
  updateWorkflowProgressState(boundedStep);
}

function bindWorkflowNav(buttonId, targetStep) {
  const button = document.getElementById(buttonId);
  if (!button) {
    return;
  }
  button.addEventListener("click", () => {
    if (targetStep > workflowStep) {
      workflowCompletedUntil = Math.max(workflowCompletedUntil, targetStep - 1);
    }

    if (buttonId === "workflowNext1") {
      hydrateWorkflowFromCaptured();
    }

    setWorkflowStep(targetStep);
  });
}

bindWorkflowNav("workflowNext1", 1);
bindWorkflowNav("workflowBack2", 0);
bindWorkflowNav("workflowNext2", 2);
bindWorkflowNav("workflowBack3", 1);
bindWorkflowNav("workflowNext3", 3);
bindWorkflowNav("workflowBack4", 2);
bindWorkflowNav("workflowNext4", 4);
bindWorkflowNav("workflowBack5", 3);

workflowProgressSteps.forEach((step, index) => {
  step.addEventListener("click", () => {
    if (index > workflowStep) {
      workflowCompletedUntil = Math.max(workflowCompletedUntil, index - 1);
    }
    setWorkflowStep(index);
  });
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
renderUploadList();
enforcePostsLayout();
setScreenOrientation("portrait");

if (screenPortraitBtn) {
  screenPortraitBtn.addEventListener("click", () => setScreenOrientation("portrait"));
}
if (screenLandscapeBtn) {
  screenLandscapeBtn.addEventListener("click", () => setScreenOrientation("landscape"));
}

if (captureFromLiveBtn) {
  captureFromLiveBtn.addEventListener("click", captureFromLiveView);
}

if (takePictureLiveBtn) {
  takePictureLiveBtn.addEventListener("click", captureFromLiveView);
}

window.addEventListener("resize", enforcePostsLayout);
document.querySelectorAll(".menu-item[data-page]").forEach((item) => {
  item.addEventListener("click", () => {
    window.requestAnimationFrame(enforcePostsLayout);
  });
});
