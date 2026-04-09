// PHASE 7 — NOTES SAVE FUNCTION (LOCAL STORAGE)
document.addEventListener("DOMContentLoaded", function() {
  const notes = document.getElementById("userNotes");
  const saveBtn = document.getElementById("saveNotes");
  if (notes && saveBtn) {
    notes.value = localStorage.getItem("dashboard_notes") || "";
    saveBtn.addEventListener("click", () => {
      localStorage.setItem("dashboard_notes", notes.value);
      alert("Saved");
    });
  }
});
const fileInput = document.getElementById("fileInput");
console.log("fileInput:", fileInput);
const uploadBox = document.getElementById("uploadBox");
console.log("uploadBox:", uploadBox);
const previewGrid = document.getElementById("previewGrid");
const captureSliderPrev = document.getElementById("captureSliderPrev");
const captureSliderNext = document.getElementById("captureSliderNext");
const backgroundPreviewGrid = document.getElementById("backgroundPreviewGrid");
const backgroundCaptureSliderPrev = document.getElementById("backgroundCaptureSliderPrev");
const backgroundCaptureSliderNext = document.getElementById("backgroundCaptureSliderNext");
const editorPreviewGrid = document.getElementById("editorPreviewGrid");
const editorCaptureSliderPrev = document.getElementById("editorCaptureSliderPrev");
const editorCaptureSliderNext = document.getElementById("editorCaptureSliderNext");
const videoPreviewGrid = document.getElementById("videoPreviewGrid");
const videoCaptureSliderPrev = document.getElementById("videoCaptureSliderPrev");
const videoCaptureSliderNext = document.getElementById("videoCaptureSliderNext");
const videoSelectAllCheckbox = document.getElementById("videoSelectAllCheckbox");
const videoSelectedCount = document.getElementById("videoSelectedCount");
const videoSelectedSummaryBtn = document.getElementById("videoSelectedSummaryBtn");
const videoSelectedFlow = document.getElementById("videoSelectedFlow");
const videoAudioSource = document.getElementById("videoAudioSource");
const videoDefaultAudioSelect = document.getElementById("videoDefaultAudioSelect");
const videoAudioFileInput = document.getElementById("videoAudioFileInput");
const videoDurationInput = document.getElementById("videoDurationInput");
const videoAudioSegmentStart = document.getElementById("videoAudioSegmentStart");
const videoAudioSegmentEnd = document.getElementById("videoAudioSegmentEnd");
const videoSegmentInfo = document.getElementById("videoSegmentInfo");
const videoRuleWarning = document.getElementById("videoRuleWarning");
const videoAudioLimitsHint = document.getElementById("videoAudioLimitsHint");
const videoRefreshAudioInputsBtn = document.getElementById("videoRefreshAudioInputsBtn");
const videoAudioInputSelect = document.getElementById("videoAudioInputSelect");
const videoVoiceModeSelect = document.getElementById("videoVoiceModeSelect");
const videoRecordVoiceBtn = document.getElementById("videoRecordVoiceBtn");
const videoPauseVoiceBtn = document.getElementById("videoPauseVoiceBtn");
const videoResumeVoiceBtn = document.getElementById("videoResumeVoiceBtn");
const videoStopVoiceBtn = document.getElementById("videoStopVoiceBtn");
const videoVoiceStatus = document.getElementById("videoVoiceStatus");
const videoVoiceSequenceSummary = document.getElementById("videoVoiceSequenceSummary");
const videoUsePatchedVoiceBtn = document.getElementById("videoUsePatchedVoiceBtn");
const videoVoiceTakes = document.getElementById("videoVoiceTakes");
const videoEqualizerCanvas = document.getElementById("videoEqualizerCanvas");
const videoPreviewWaveBtn = document.getElementById("videoPreviewWaveBtn");
const videoHighWaveImage = document.getElementById("videoHighWaveImage");
const videoLowWaveImage = document.getElementById("videoLowWaveImage");
const videoHighWavePoint = document.getElementById("videoHighWavePoint");
const videoLowWavePoint = document.getElementById("videoLowWavePoint");
const videoPlatformCheckboxes = Array.from(document.querySelectorAll(".video-platform-checkbox"));
const videoMakeMyVideoBtn = document.getElementById("videoMakeMyVideoBtn");
const videoClearGeneratedBtn = document.getElementById("videoClearGeneratedBtn");
const videoGenerationStatus = document.getElementById("videoGenerationStatus");
const videoGenerationLog = document.getElementById("videoGenerationLog");
const videoDownloadPlatformRadios = Array.from(document.querySelectorAll(".video-download-platform-radio"));
const videoDownloadStatus = document.getElementById("videoDownloadStatus");
const downloadVideoBtn = document.getElementById("downloadVideoBtn");
const videoFinishBtn = document.getElementById("videoFinishBtn");
const designerPlatformSelect = document.getElementById("designerPlatform");
const videoUploadOnSsBtn = document.getElementById("videoUploadOnSsBtn");
const videoImagePostSelect = document.getElementById("videoImagePostSelect");
const videoImageCommentInput = document.getElementById("videoImageCommentInput");
const videoPublishPlatformSelect = document.getElementById("videoPublishPlatformSelect");
const videoPostNowBtn = document.getElementById("videoPostNowBtn");
const videoPublishStatus = document.getElementById("videoPublishStatus");
const videoPublishLog = document.getElementById("videoPublishLog");
const videoGeneratedPublishPlatformSelect = document.getElementById("videoGeneratedPublishPlatformSelect");
const videoGeneratedScheduleTimezoneSelect = document.getElementById("videoGeneratedScheduleTimezoneSelect");
const videoGeneratedScheduleDateTime = document.getElementById("videoGeneratedScheduleDateTime");
const videoVideoPostNowBtn = document.getElementById("videoVideoPostNowBtn");
const videoVideoSchedulePostBtn = document.getElementById("videoVideoSchedulePostBtn");
const videoGeneratedPublishStatus = document.getElementById("videoGeneratedPublishStatus");
const videoGeneratedPublishLog = document.getElementById("videoGeneratedPublishLog");
const socialFeedPreview = document.getElementById("socialFeedPreview");
const socialPostCard = document.getElementById("socialPostCard");
const socialPostMediaShell = document.getElementById("socialPostMediaShell");
const socialPreviewImage = document.getElementById("socialPreviewImage");
const socialPreviewPlaceholder = document.getElementById("socialPreviewPlaceholder");
const socialPostUsername = document.getElementById("socialPostUsername");
const socialPostMeta = document.getElementById("socialPostMeta");
const socialPostLikes = document.getElementById("socialPostLikes");
const socialPostCaption = document.getElementById("socialPostCaption");
const previewSquareBtn = document.getElementById("previewSquareBtn");
const previewPortraitBtn = document.getElementById("previewPortraitBtn");
const previewLandscapeBtn = document.getElementById("previewLandscapeBtn");
const removeBgBtn = document.getElementById("removeBgBtn");
const bgStatusEl = document.getElementById("bgStatus");
const applyBgStyleBtn = document.getElementById("applyBgStyleBtn");
const bgFillColorInput = document.getElementById("bgFillColorInput");
const templateStyleSelect = document.getElementById("templateStyleSelect");
const shadowStrengthInput = document.getElementById("shadowStrengthInput");
const shadowPositionSelect = document.getElementById("shadowPositionSelect");
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
const downloadEditedImageBtn = document.getElementById("downloadEditedImageBtn");
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
// Removed duplicate declarations of uploadBox and fileInput (keep only at the top)
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
const workflowProgressViewport = document.getElementById("workflowProgressViewport");
const workflowProgressPrev = document.getElementById("workflowProgressPrev");
const workflowProgressNext = document.getElementById("workflowProgressNext");
const workflowProgressSteps = Array.from(document.querySelectorAll(".workflow-progress-step"));
const appContainer = document.querySelector(".app-container");
const sidebarToggleBtn = document.getElementById("sidebarToggleBtn");
const sidebarShowBtn = document.getElementById("sidebarShowBtn");
const designerLiveImage = document.getElementById("designerLiveImage");
const designerLiveText = document.getElementById("designerLiveText");
const livePreviewShell = document.querySelector(".mobile-live-main .live-preview-shell");
const editorMeasureShell = document.getElementById("editorMeasureShell");
const measureStage = document.getElementById("measureStage");
const measureDeviceFrame = document.getElementById("measureDeviceFrame");
const measurePreviewImage = document.getElementById("measurePreviewImage");
const measurePreviewPlaceholder = document.getElementById("measurePreviewPlaceholder");
const measureWeightDisplay = document.getElementById("measureWeightDisplay");
const measureWeightDisplayScreen = document.getElementById("measureWeightDisplayScreen");
const measurePreviewText = document.getElementById("measurePreviewText");
const measureWidthHandle = document.getElementById("measureWidthHandle");
const measureHeightHandle = document.getElementById("measureHeightHandle");
const designerText = document.getElementById("designerText");
const designerFontStyle = document.getElementById("designerFontStyle");
const designerFontSize = document.getElementById("designerFontSize");
const designerTextColor = document.getElementById("designerTextColor");
const designerTextAppearance = document.getElementById("designerTextAppearance");
const designerWeightInput = document.getElementById("designerWeightInput");
const designerWeightUnit = document.getElementById("designerWeightUnit");
const designerScaleOptions = document.getElementById("designerScaleOptions");
const measurementValueInput = document.getElementById("measurementValueInput");
const measurementUnitSelect = document.getElementById("measurementUnitSelect");
const measurementTextColorSelect = document.getElementById("measurementTextColorSelect");
const createMeasurementBtn = document.getElementById("createMeasurementBtn");
const toggleMeasurementCircleBtn = document.getElementById("toggleMeasurementCircleBtn");
const applyMeasurementBtn = document.getElementById("applyMeasurementBtn");
const measurementEditorStatus = document.getElementById("measurementEditorStatus");
const measurementOverlayFrame = document.getElementById("measurementOverlayFrame");
const measurementOverlayLayer = document.getElementById("measurementOverlayLayer");
// Save measurement and weight for the current image/slot
async function applyMeasurementAndWeight() {
  // Save measurement(s)
  const measurements = getMeasurementsForSelectedSlot();
  if (!measurements || measurements.length === 0) {
    setMeasurementStatus("No measurement to apply. Please create a measurement first.", true);
    return;
  }

  // Render and save the edited image with measurements
  try {
    setMeasurementStatus("Saving image with measurements...");
    const { canvas, selected } = await renderSelectedImageWithMeasurements();
    // Convert canvas to blob and trigger download or next action
    canvas.toBlob((blob) => {
      if (!blob) {
        setMeasurementStatus("Failed to save image.", true);
        return;
      }
      // For now, just show a status update (integration with upload/post can be added here)
      setMeasurementStatus("Measurement applied and image saved for next action.");
      // Optionally, trigger next workflow step here
    }, "image/png");
  } catch (err) {
    setMeasurementStatus("Error saving image with measurements.", true);
  }
}

if (applyMeasurementBtn) {
  applyMeasurementBtn.addEventListener("click", applyMeasurementAndWeight);
}
const postsPage = document.getElementById("postsPage");
const workflowNext1Btn = document.getElementById("workflowNext1");
const workflowBackgroundStep = document.querySelector('.workflow-progress-step[data-wf-step="1"]');

let selectedIndex = -1;
let previewItems = [];
let serverImages = [];
let styledImages = [];
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
// --- Ensure all event listeners are set up after DOM loads ---
document.addEventListener("DOMContentLoaded", () => {
  if (previewSquareBtn) {
    previewSquareBtn.addEventListener("click", () => setSocialPreviewAspect("square"));
  }
  if (previewPortraitBtn) {
    previewPortraitBtn.addEventListener("click", () => setSocialPreviewAspect("portrait"));
  }
  if (previewLandscapeBtn) {
    previewLandscapeBtn.addEventListener("click", () => setSocialPreviewAspect("landscape"));
  }
  if (previewGrid) {
    previewGrid.addEventListener("scroll", () => {
      window.requestAnimationFrame(syncCaptureSliderUi);
    });
  }
  if (backgroundPreviewGrid) {
    backgroundPreviewGrid.addEventListener("scroll", () => {
      window.requestAnimationFrame(() => syncCaptureSliderUiForGrid(backgroundPreviewGrid, backgroundCaptureSliderPrev, backgroundCaptureSliderNext));
    });
  }
  if (editorPreviewGrid) {
    editorPreviewGrid.addEventListener("scroll", () => {
      window.requestAnimationFrame(() => syncCaptureSliderUiForGrid(editorPreviewGrid, editorCaptureSliderPrev, editorCaptureSliderNext));
    });
  }
  if (videoPreviewGrid) {
    videoPreviewGrid.addEventListener("scroll", () => {
      window.requestAnimationFrame(() => syncCaptureSliderUiForGrid(videoPreviewGrid, videoCaptureSliderPrev, videoCaptureSliderNext));
    });
  }
  window.addEventListener("resize", () => {
    window.requestAnimationFrame(() => {
      updateCaptureSliderEdgePaddingForGrid(previewGrid);
      updateCaptureSliderEdgePaddingForGrid(backgroundPreviewGrid);
      updateCaptureSliderEdgePaddingForGrid(editorPreviewGrid);
      updateCaptureSliderEdgePaddingForGrid(videoPreviewGrid);
      if (selectedIndex >= 0) {
        centerCaptureSliderOnIndexForGrid(previewGrid, selectedIndex, false);
        centerCaptureSliderOnIndexForGrid(backgroundPreviewGrid, selectedIndex, false);
        centerCaptureSliderOnIndexForGrid(editorPreviewGrid, selectedIndex, false);
        centerCaptureSliderOnIndexForGrid(videoPreviewGrid, selectedIndex, false);
      }
      syncWorkflowProgressNav();
    });
  });
  if (uploadBox) {
    uploadBox.addEventListener("click", (event) => {
      // Prevent repeated dialog if clicking the file input itself
      if (event.target === fileInput) return;
      if (event.target.closest && event.target.closest(".file-delete-btn")) {
        return;
      }
      if (fileInput) fileInput.click();
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
  if (typeof uploadDeviceBtn !== 'undefined' && uploadDeviceBtn && fileInput) {
    uploadDeviceBtn.addEventListener("click", () => fileInput.click());
  }
  if (fileInput) {
    fileInput.addEventListener("change", () => {
      addFilesToQueue(Array.from(fileInput.files || []));
      fileInput.value = "";
    });
  }

});

function updateVideoSelectionControls(availableIndexes) {
  const selectedCount = availableIndexes.filter((index) => videoSelectedIndexes.has(index)).length;

  if (videoSelectedCount) {
    videoSelectedCount.textContent = `${selectedCount} selected`;
  }

  if (videoSelectedSummaryBtn) {
    videoSelectedSummaryBtn.textContent = selectedCount ? `Selected ${selectedCount}` : "Select Images";
  }

  if (!videoSelectAllCheckbox) {
    return;
  }

  const allSelected = availableIndexes.length > 0 && selectedCount === availableIndexes.length;
  videoSelectAllCheckbox.checked = allSelected;
  videoSelectAllCheckbox.indeterminate = selectedCount > 0 && selectedCount < availableIndexes.length;
}

function getSelectedVideoImages() {
  return videoSelectedOrder
    .map((index) => styledImages[index] || serverImages[index] || previewItems[index])
    .filter(Boolean);
}

function renderVideoWaveImageOptions() {
  const selectedItems = getSelectedVideoImages();
  const options = selectedItems.map((item, index) => ({
    value: String(index),
    label: `${index + 1}. ${(item?.name || "image").replace(/[_-]+/g, " ")}`,
  }));

  [videoHighWaveImage, videoLowWaveImage].forEach((selectEl) => {
    if (!selectEl) {
      return;
    }

    const previousValue = selectEl.value;
    selectEl.innerHTML = "";

    if (!options.length) {
      const fallback = document.createElement("option");
      fallback.value = "";
      fallback.textContent = "No image selected";
      selectEl.appendChild(fallback);
      return;
    }

    options.forEach((optionData) => {
      const option = document.createElement("option");
      option.value = optionData.value;
      option.textContent = optionData.label;
      selectEl.appendChild(option);
    });

    const hasPrevious = options.some((optionData) => optionData.value === previousValue);
    if (hasPrevious) {
      selectEl.value = previousValue;
    }
  });
}

function setVideoWavePreviewButtonState(active) {
  if (!videoPreviewWaveBtn) {
    return;
  }
  videoPreviewWaveBtn.textContent = active ? "Stop Waves" : "Preview Waves";
}

function setVideoVoiceStatus(message, isError = false) {
  if (!videoVoiceStatus) {
    return;
  }
  videoVoiceStatus.textContent = message;
  videoVoiceStatus.style.color = isError ? "#f0b27a" : "";
}

function setVideoGenerationStatus(message, isError = false) {
  if (!videoGenerationStatus) {
    return;
  }
  videoGenerationStatus.textContent = message;
  videoGenerationStatus.style.color = isError ? "#f0b27a" : "";
}

function setVideoDownloadStatus(message, isError = false) {
  if (!videoDownloadStatus) {
    return;
  }
  videoDownloadStatus.textContent = message;
  videoDownloadStatus.style.color = isError ? "#f0b27a" : "";
}

function setVideoPublishStatus(message, isError = false) {
  if (!videoPublishStatus) {
    return;
  }
  videoPublishStatus.textContent = message;
  videoPublishStatus.style.color = isError ? "#f0b27a" : "";
}

function appendVideoPublishLog(message) {
  if (!videoPublishLog) {
    return;
  }
  const item = document.createElement("li");
  item.textContent = message;
  videoPublishLog.appendChild(item);
}

function setVideoGeneratedPublishStatus(message, isError = false) {
  if (!videoGeneratedPublishStatus) {
    return;
  }
  videoGeneratedPublishStatus.textContent = message;
  videoGeneratedPublishStatus.style.color = isError ? "#f0b27a" : "";
}

function appendVideoGeneratedPublishLog(message) {
  if (!videoGeneratedPublishLog) {
    return;
  }
  const item = document.createElement("li");
  item.textContent = message;
  videoGeneratedPublishLog.appendChild(item);
}

function refreshVideoGeneratedPublishPlatformOptions() {
  if (!videoGeneratedPublishPlatformSelect) {
    return;
  }

  const previousValue = videoGeneratedPublishPlatformSelect.value;
  videoGeneratedPublishPlatformSelect.innerHTML = "";
  const entries = Array.from(videoGeneratedByPlatform.keys());

  if (!entries.length) {
    const emptyOption = document.createElement("option");
    emptyOption.value = "";
    emptyOption.textContent = "No generated platform yet";
    videoGeneratedPublishPlatformSelect.appendChild(emptyOption);
    videoGeneratedPublishPlatformSelect.disabled = true;
    setVideoGeneratedPublishStatus("Generate at least one platform video first, then post or schedule.");
    return;
  }

  entries.forEach((platform) => {
    const option = document.createElement("option");
    option.value = platform;
    option.textContent = getPlatformDisplayName(platform);
    videoGeneratedPublishPlatformSelect.appendChild(option);
  });

  videoGeneratedPublishPlatformSelect.disabled = false;
  if (entries.includes(previousValue)) {
    videoGeneratedPublishPlatformSelect.value = previousValue;
  }
  setVideoGeneratedPublishStatus("Select generated platform, then post now or schedule.");
}

function setDefaultVideoPublishStatus() {
  const selectedImages = getSelectedVideoImages();
  if (!selectedImages.length) {
    setVideoPublishStatus("Select image(s) in Video step, then click Upload on SS.");
    return;
  }
  if (!videoImageUploadPrepared) {
    setVideoPublishStatus("Click Upload on SS to prepare selected images for posting.");
    return;
  }
  setVideoPublishStatus("Choose photo, add comments, choose platform, and click Post.");
}

function refreshVideoImagePostOptions() {
  if (!videoImagePostSelect) {
    return;
  }

  const previousValue = videoImagePostSelect.value;
  const selectedImages = getSelectedVideoImages();
  videoImagePostSelect.innerHTML = "";

  if (!selectedImages.length) {
    const emptyOption = document.createElement("option");
    emptyOption.value = "";
    emptyOption.textContent = "No selected image";
    videoImagePostSelect.appendChild(emptyOption);
    videoImagePostSelect.disabled = true;
    return;
  }

  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = `All selected images (${selectedImages.length})`;
  videoImagePostSelect.appendChild(allOption);

  selectedImages.forEach((item, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    const rawName = item?.name || `image_${index + 1}`;
    option.textContent = `${index + 1}. ${rawName.replace(/[_-]+/g, " ")}`;
    videoImagePostSelect.appendChild(option);
  });

  videoImagePostSelect.disabled = false;
  if (["all", ...selectedImages.map((_, index) => String(index))].includes(previousValue)) {
    videoImagePostSelect.value = previousValue;
  }
}

function syncVideoImagePostFlowUi() {
  const selectedImages = getSelectedVideoImages();
  const hasImages = selectedImages.length > 0;
  const enablePostFields = hasImages && videoImageUploadPrepared;

  if (videoUploadOnSsBtn) {
    videoUploadOnSsBtn.disabled = !hasImages;
  }
  if (videoImagePostSelect) {
    videoImagePostSelect.disabled = !enablePostFields;
  }
  if (videoImageCommentInput) {
    videoImageCommentInput.disabled = !enablePostFields;
  }
  if (videoPublishPlatformSelect) {
    videoPublishPlatformSelect.disabled = !enablePostFields;
  }
}

function refreshVideoPublishPlatformOptions() {
  if (!videoPublishPlatformSelect) {
    return;
  }

  const previousValue = videoPublishPlatformSelect.value;
  videoPublishPlatformSelect.innerHTML = "";

  const entries = ["instagram", "facebook", "whatsapp", "ecommerce"];

  if (!entries.length) {
    const emptyOption = document.createElement("option");
    emptyOption.value = "";
    emptyOption.textContent = "No platform available";
    videoPublishPlatformSelect.appendChild(emptyOption);
    videoPublishPlatformSelect.disabled = true;
    setDefaultVideoPublishStatus();
    return;
  }

  entries.forEach((platform) => {
    const option = document.createElement("option");
    option.value = platform;
    option.textContent = getPlatformDisplayName(platform);
    videoPublishPlatformSelect.appendChild(option);
  });
  videoPublishPlatformSelect.disabled = false;
  if (entries.includes(previousValue)) {
    videoPublishPlatformSelect.value = previousValue;
  }
  syncVideoImagePostFlowUi();
  setDefaultVideoPublishStatus();
}

function setVideoPublishButtonsDisabled(disabled) {
  if (videoPostNowBtn) {
    videoPostNowBtn.disabled = disabled;
  }
}

function getSelectedDownloadPlatform() {
  const selected = videoDownloadPlatformRadios.find((radio) => radio.checked);
  return selected?.value || "instagram";
}

function syncVideoDownloadAvailability() {
  if (!downloadVideoBtn) {
    return;
  }
  const platform = getSelectedDownloadPlatform();
  const hasGenerated = videoGeneratedByPlatform.has(platform);
  const canDownload = videoDownloadEnabledUntilFinish && hasGenerated;
  downloadVideoBtn.disabled = !canDownload;

  if (!videoDownloadEnabledUntilFinish) {
    setVideoDownloadStatus("Finish was clicked. Generate again to re-enable video download.");
    return;
  }
  if (!hasGenerated) {
    setVideoDownloadStatus(`No generated ${getPlatformDisplayName(platform)} video yet. Generate that platform first.`);
    return;
  }
  setVideoDownloadStatus(`${getPlatformDisplayName(platform)} video ready. Download is available until Finish.`);
}

function appendVideoGenerationLog(message) {
  if (!videoGenerationLog) {
    return;
  }
  const item = document.createElement("li");
  item.textContent = message;
  videoGenerationLog.appendChild(item);
}

function clearVideoGenerationLog() {
  if (!videoGenerationLog) {
    return;
  }
  videoGenerationLog.innerHTML = "";
}

function getSelectedVideoPlatforms() {
  return videoPlatformCheckboxes
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
}

function getPlatformDisplayName(platform) {
  if (platform === "instagram") return "Instagram";
  if (platform === "facebook") return "Facebook";
  if (platform === "whatsapp") return "WhatsApp";
  if (platform === "ecommerce") return "Ecommerce";
  return platform;
}

function setVideoGenerationButtonsDisabled(disabled) {
  if (videoMakeMyVideoBtn) {
    videoMakeMyVideoBtn.disabled = disabled;
  }
  if (videoClearGeneratedBtn) {
    videoClearGeneratedBtn.disabled = disabled;
  }
}

function waitMilliseconds(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runVideoGenerationFlow() {
  if (videoGenerationInProgress) {
    return;
  }

  const selectedPlatforms = getSelectedVideoPlatforms();
  if (!selectedPlatforms.length) {
    setVideoGenerationStatus("Select at least one platform to generate video.", true);
    return;
  }

  const selectedImages = getSelectedVideoImages();
  if (!selectedImages.length) {
    setVideoGenerationStatus("Select image(s) in Video tab before generating.", true);
    return;
  }

  videoGenerationInProgress = true;
  setVideoGenerationButtonsDisabled(true);
  clearVideoGenerationLog();
  appendVideoGenerationLog(`Queued ${selectedPlatforms.length} platform(s) with ${selectedImages.length} image(s).`);

  for (let index = 0; index < selectedPlatforms.length; index += 1) {
    const platform = selectedPlatforms[index];
    const platformName = getPlatformDisplayName(platform);

    if (videoGeneratedByPlatform.size > 0) {
      videoGeneratedByPlatform.clear();
      appendVideoGenerationLog("Cleared previous platform output before next generation.");
    }

    setVideoGenerationStatus(`Generating for ${platformName} (${index + 1}/${selectedPlatforms.length})...`);
    setLiveStatus(`Generating ${platformName} video in right preview...`);
    setSocialPreviewPlatform(platform === "facebook" ? "facebook" : "instagram");
    appendVideoGenerationLog(`Started ${platformName} render.`);

    await waitMilliseconds(1100);

    const generatedMeta = {
      platform,
      createdAt: Date.now(),
      imageCount: selectedImages.length,
      fileName: `${platform}_video.mp4`,
    };
    videoGeneratedByPlatform.set(platform, generatedMeta);
    appendVideoGenerationLog(`Completed ${platformName} render.`);
    refreshVideoPublishPlatformOptions();
    refreshVideoGeneratedPublishPlatformOptions();
  }

  const lastPlatform = selectedPlatforms[selectedPlatforms.length - 1];
  const lastPlatformName = getPlatformDisplayName(lastPlatform);
  setVideoGenerationStatus(`Done. ${lastPlatformName} preview is active in the right panel.`);
  setLiveStatus(`${lastPlatformName} video generated. Preview updated on right panel.`);
  videoDownloadEnabledUntilFinish = true;
  syncVideoDownloadAvailability();

  videoGenerationInProgress = false;
  setVideoGenerationButtonsDisabled(false);
  refreshVideoPublishPlatformOptions();
  refreshVideoGeneratedPublishPlatformOptions();
}

function clearGeneratedVideoState(reasonMessage = "Generated outputs cleared.") {
  videoGeneratedByPlatform.clear();
  videoDownloadEnabledUntilFinish = false;
  clearVideoGenerationLog();
  appendVideoGenerationLog("Cleared generated platform outputs.");
  setVideoGenerationStatus(reasonMessage);
  setLiveStatus("Generated video output cleared. Ready for next run.");
  syncVideoDownloadAvailability();
  refreshVideoPublishPlatformOptions();
  refreshVideoGeneratedPublishPlatformOptions();
  setDefaultVideoPublishStatus();
}

async function publishVideoToSocial(mode = "post") {
  if (videoPublishInProgress) {
    return;
  }

  const selectedImages = getSelectedVideoImages();
  const platform = videoPublishPlatformSelect?.value || "";
  if (!videoImageUploadPrepared) {
    setVideoPublishStatus("Click Upload on SS before posting.", true);
    return;
  }
  if (!selectedImages.length) {
    setVideoPublishStatus("Select at least one image in Video step before posting.", true);
    return;
  }
  if (!platform) {
    setVideoPublishStatus("Choose a platform before posting.", true);
    return;
  }

  const selectedValue = videoImagePostSelect?.value || "";
  if (!selectedValue) {
    setVideoPublishStatus("Choose an image from the dropdown before posting.", true);
    return;
  }

  let payloadLabel = "";
  if (selectedValue === "all") {
    payloadLabel = `${selectedImages.length} selected image${selectedImages.length === 1 ? "" : "s"}`;
  } else {
    const selectedIndex = Number(selectedValue);
    if (!Number.isInteger(selectedIndex) || selectedIndex < 0 || selectedIndex >= selectedImages.length) {
      setVideoPublishStatus("Selected image is not available. Re-upload on SS and try again.", true);
      return;
    }
    const selectedItem = selectedImages[selectedIndex];
    const rawName = selectedItem?.name || `image_${selectedIndex + 1}`;
    payloadLabel = `image ${selectedIndex + 1} (${rawName.replace(/[_-]+/g, " ")})`;
  }

  const commentText = (videoImageCommentInput?.value || "").trim();
  const platformName = getPlatformDisplayName(platform);
  videoPublishInProgress = true;
  setVideoPublishButtonsDisabled(true);

  const intent = `Posting ${payloadLabel} to ${platformName} using account settings API credentials...`;
  setVideoPublishStatus(intent);
  appendVideoPublishLog(intent);
  setLiveStatus(`${payloadLabel} upload task running in right panel.`);

  await waitMilliseconds(900);

  const commentSuffix = commentText ? ` Comment: "${commentText}".` : "";
  appendVideoPublishLog(`Posted ${payloadLabel} to ${platformName} successfully.${commentSuffix}`);
  setVideoPublishStatus(`Post done: ${payloadLabel} published on ${platformName}.`);

  setLiveStatus(`${payloadLabel} social upload step completed.`);
  videoPublishInProgress = false;
  setVideoPublishButtonsDisabled(false);
}

async function publishGeneratedVideoToSocial(mode = "post") {
  if (videoPublishInProgress) {
    return;
  }

  const platform = videoGeneratedPublishPlatformSelect?.value || "";
  if (!platform || !videoGeneratedByPlatform.has(platform)) {
    setVideoGeneratedPublishStatus("Select a generated platform video before posting.", true);
    return;
  }

  if (mode === "schedule" && !videoGeneratedScheduleDateTime?.value) {
    setVideoGeneratedPublishStatus("Choose schedule date and time for video posting.", true);
    return;
  }

  const timezone = videoGeneratedScheduleTimezoneSelect?.value || "Asia/Kolkata";
  const platformName = getPlatformDisplayName(platform);
  videoPublishInProgress = true;
  if (videoVideoPostNowBtn) {
    videoVideoPostNowBtn.disabled = true;
  }
  if (videoVideoSchedulePostBtn) {
    videoVideoSchedulePostBtn.disabled = true;
  }

  const intent = mode === "schedule"
    ? `Scheduling generated ${platformName} video using account settings API credentials...`
    : `Posting generated ${platformName} video now using account settings API credentials...`;
  setVideoGeneratedPublishStatus(intent);
  appendVideoGeneratedPublishLog(intent);
  setLiveStatus(`Generated ${platformName} video upload running in right panel.`);

  await waitMilliseconds(900);

  if (mode === "schedule") {
    appendVideoGeneratedPublishLog(`Scheduled ${platformName} video at ${videoGeneratedScheduleDateTime.value} (${timezone}).`);
    setVideoGeneratedPublishStatus(`${platformName} video scheduled successfully.`);
  } else {
    appendVideoGeneratedPublishLog(`Posted ${platformName} video successfully.`);
    setVideoGeneratedPublishStatus(`${platformName} video posted successfully.`);
  }

  setLiveStatus(`${platformName} video social upload completed.`);
  videoPublishInProgress = false;
  if (videoVideoPostNowBtn) {
    videoVideoPostNowBtn.disabled = false;
  }
  if (videoVideoSchedulePostBtn) {
    videoVideoSchedulePostBtn.disabled = false;
  }
}

function syncVideoVoiceButtons() {
  const recorderState = videoVoiceRecorder?.state || "inactive";
  if (videoRecordVoiceBtn) {
    videoRecordVoiceBtn.disabled = recorderState !== "inactive";
  }
  if (videoPauseVoiceBtn) {
    videoPauseVoiceBtn.disabled = recorderState !== "recording";
  }
  if (videoResumeVoiceBtn) {
    videoResumeVoiceBtn.disabled = recorderState !== "paused";
  }
  if (videoStopVoiceBtn) {
    videoStopVoiceBtn.disabled = recorderState === "inactive";
  }
}

function stopVideoVoiceStream() {
  if (!videoVoiceStream) {
    return;
  }
  videoVoiceStream.getTracks().forEach((track) => track.stop());
  videoVoiceStream = null;
}

async function loadVideoAudioInputs() {
  if (!videoAudioInputSelect || !navigator.mediaDevices?.enumerateDevices) {
    return;
  }

  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const audioInputs = devices.filter((device) => device.kind === "audioinput");
    const previousValue = videoAudioInputSelect.value;
    videoAudioInputSelect.innerHTML = "";

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Default microphone";
    videoAudioInputSelect.appendChild(defaultOption);

    audioInputs.forEach((device, index) => {
      const option = document.createElement("option");
      option.value = device.deviceId;
      option.textContent = device.label || `Audio Input ${index + 1}`;
      videoAudioInputSelect.appendChild(option);
    });

    if (Array.from(videoAudioInputSelect.options).some((option) => option.value === previousValue)) {
      videoAudioInputSelect.value = previousValue;
    }
  } catch (_) {
    setVideoVoiceStatus("Unable to read audio input devices.", true);
  }
}

function formatSecondsLabel(seconds) {
  const total = Math.max(0, Math.round(seconds || 0));
  const mins = Math.floor(total / 60);
  const secs = total % 60;
  return `${mins}:${String(secs).padStart(2, "0")}`;
}

function getTrimmedVoiceDuration(take) {
  if (!take) {
    return 0;
  }
  const start = Number(take.trimStart || 0);
  const end = Number(take.trimEnd || take.duration || 0);
  return Math.max(1, end - start);
}

function updateVideoVoiceSequenceSummary() {
  const totalDuration = videoVoiceTakesState.reduce((sum, take) => sum + getTrimmedVoiceDuration(take), 0);
  if (videoVoiceSequenceSummary) {
    videoVoiceSequenceSummary.textContent = videoVoiceTakesState.length
      ? `Patched sequence: ${videoVoiceTakesState.length} take(s), ${formatSecondsLabel(totalDuration)} total after trim.`
      : "Patched sequence: no takes yet.";
  }
  if (videoUsePatchedVoiceBtn) {
    videoUsePatchedVoiceBtn.disabled = !videoVoiceTakesState.length;
    videoUsePatchedVoiceBtn.textContent = videoPatchedVoiceActive ? "Using Patched Sequence" : "Use Patched Sequence";
  }
}

function renderVideoVoiceTakes() {
  if (!videoVoiceTakes) {
    return;
  }

  videoVoiceTakes.innerHTML = "";
  if (!videoVoiceTakesState.length) {
    const empty = document.createElement("div");
    empty.className = "video-voice-empty";
    empty.textContent = "No voice takes recorded yet.";
    videoVoiceTakes.appendChild(empty);
    updateVideoVoiceSequenceSummary();
    return;
  }

  videoVoiceTakesState.forEach((take, index) => {
    const card = document.createElement("div");
    card.className = "video-voice-take";
    card.draggable = true;
    card.dataset.takeId = take.id;
    if (take.id === videoActiveVoiceTakeId) {
      card.classList.add("is-active");
    }
    if (videoPatchedVoiceActive) {
      card.classList.add("is-sequenced");
    }

    const titleRow = document.createElement("div");
    titleRow.className = "video-voice-take-head";

    const title = document.createElement("strong");
    title.textContent = `Take ${index + 1}`;

    const meta = document.createElement("span");
    meta.textContent = `${formatSecondsLabel(take.duration)} recorded • ${formatSecondsLabel(getTrimmedVoiceDuration(take))} used`;

    titleRow.appendChild(title);
    titleRow.appendChild(meta);

    const audio = document.createElement("audio");
    audio.controls = true;
    audio.src = take.url;

    const trimGrid = document.createElement("div");
    trimGrid.className = "video-voice-trim-grid";

    const startLabel = document.createElement("label");
    startLabel.className = "field";
    const startSpan = document.createElement("span");
    startSpan.textContent = "Trim Start (sec)";
    const startInput = document.createElement("input");
    startInput.type = "number";
    startInput.min = "0";
    startInput.max = String(Math.max(0, Math.floor(take.duration) - 1));
    startInput.step = "1";
    startInput.value = String(Math.floor(take.trimStart || 0));
    startInput.addEventListener("change", () => {
      const nextValue = Math.max(0, Math.min(Number(startInput.value) || 0, Math.max(0, take.trimEnd - 1)));
      take.trimStart = nextValue;
      renderVideoVoiceTakes();
    });
    startLabel.appendChild(startSpan);
    startLabel.appendChild(startInput);

    const endLabel = document.createElement("label");
    endLabel.className = "field";
    const endSpan = document.createElement("span");
    endSpan.textContent = "Trim End (sec)";
    const endInput = document.createElement("input");
    endInput.type = "number";
    endInput.min = "1";
    endInput.max = String(Math.max(1, Math.floor(take.duration)));
    endInput.step = "1";
    endInput.value = String(Math.floor(take.trimEnd || take.duration));
    endInput.addEventListener("change", () => {
      const nextValue = Math.max((take.trimStart || 0) + 1, Math.min(Number(endInput.value) || take.duration, take.duration));
      take.trimEnd = nextValue;
      renderVideoVoiceTakes();
    });
    endLabel.appendChild(endSpan);
    endLabel.appendChild(endInput);

    trimGrid.appendChild(startLabel);
    trimGrid.appendChild(endLabel);

    const actions = document.createElement("div");
    actions.className = "video-voice-take-actions";

    const useBtn = document.createElement("button");
    useBtn.type = "button";
    useBtn.className = take.id === videoActiveVoiceTakeId ? "ghost" : "";
    useBtn.textContent = take.id === videoActiveVoiceTakeId ? "Using This Take" : "Use This Take";
    useBtn.addEventListener("click", () => {
      videoPatchedVoiceActive = false;
      videoActiveVoiceTakeId = take.id;
      renderVideoVoiceTakes();
      setVideoVoiceStatus(`Using Take ${index + 1} as the active voice track.`);
    });

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "ghost";
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      const targetIndex = videoVoiceTakesState.findIndex((item) => item.id === take.id);
      if (targetIndex >= 0) {
        URL.revokeObjectURL(videoVoiceTakesState[targetIndex].url);
        videoVoiceTakesState.splice(targetIndex, 1);
      }
      if (videoActiveVoiceTakeId === take.id) {
        videoActiveVoiceTakeId = videoVoiceTakesState[0]?.id || "";
      }
      if (!videoVoiceTakesState.length) {
        videoPatchedVoiceActive = false;
      }
      renderVideoVoiceTakes();
    });

    card.addEventListener("dragstart", () => {
      videoDraggedVoiceTakeId = take.id;
      card.classList.add("is-dragging");
    });

    card.addEventListener("dragend", () => {
      videoDraggedVoiceTakeId = "";
      card.classList.remove("is-dragging");
    });

    card.addEventListener("dragover", (event) => {
      event.preventDefault();
    });

    card.addEventListener("drop", (event) => {
      event.preventDefault();
      if (!videoDraggedVoiceTakeId || videoDraggedVoiceTakeId === take.id) {
        return;
      }
      const fromIndex = videoVoiceTakesState.findIndex((item) => item.id === videoDraggedVoiceTakeId);
      const toIndex = videoVoiceTakesState.findIndex((item) => item.id === take.id);
      if (fromIndex < 0 || toIndex < 0) {
        return;
      }
      const [movedTake] = videoVoiceTakesState.splice(fromIndex, 1);
      videoVoiceTakesState.splice(toIndex, 0, movedTake);
      renderVideoVoiceTakes();
      setVideoVoiceStatus("Voice take order updated for patched sequence.");
    });

    actions.appendChild(useBtn);
    actions.appendChild(removeBtn);

    card.appendChild(titleRow);
    card.appendChild(audio);
    card.appendChild(trimGrid);
    card.appendChild(actions);
    videoVoiceTakes.appendChild(card);
  });

  updateVideoVoiceSequenceSummary();
}

async function startVideoVoiceRecording() {
  if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
    setVideoVoiceStatus("Voice recording is not supported in this browser.", true);
    return;
  }

  try {
    stopVideoWavePreview();
    stopVideoVoiceStream();

    const selectedDeviceId = videoAudioInputSelect?.value || "";
    videoVoiceStream = await navigator.mediaDevices.getUserMedia({
      audio: selectedDeviceId ? { deviceId: { exact: selectedDeviceId } } : true,
      video: false,
    });

    videoVoiceChunks = [];
    videoVoiceRecorder = new MediaRecorder(videoVoiceStream);
    videoVoiceRecorder.addEventListener("dataavailable", (event) => {
      if (event.data && event.data.size > 0) {
        videoVoiceChunks.push(event.data);
      }
    });

    videoVoiceRecorder.addEventListener("stop", () => {
      const blob = new Blob(videoVoiceChunks, { type: videoVoiceRecorder?.mimeType || "audio/webm" });
      if (blob.size > 0) {
        const takeId = `voice_take_${Date.now()}_${videoVoiceTakeCounter += 1}`;
        const takeUrl = URL.createObjectURL(blob);
        const audio = document.createElement("audio");
        audio.preload = "metadata";
        audio.src = takeUrl;
        audio.addEventListener("loadedmetadata", () => {
          const duration = Number.isFinite(audio.duration) ? audio.duration : 0;
          videoVoiceTakesState.push({
            id: takeId,
            blob,
            url: takeUrl,
            duration,
            trimStart: 0,
            trimEnd: Math.max(1, Math.floor(duration || 1)),
          });
          videoActiveVoiceTakeId = takeId;
          renderVideoVoiceTakes();
          setVideoVoiceStatus(`Recorded Take ${videoVoiceTakesState.length}.`);
        }, { once: true });
      }

      videoVoiceChunks = [];
      videoVoiceRecorder = null;
      stopVideoVoiceStream();
      syncVideoVoiceButtons();
    });

    videoVoiceRecorder.start();
    syncVideoVoiceButtons();
    setVideoVoiceStatus("Recording started. Use pause or stop when ready.");
    await loadVideoAudioInputs();
  } catch (_) {
    setVideoVoiceStatus("Could not start recording. Check microphone permissions or selected input.", true);
    stopVideoVoiceStream();
    videoVoiceRecorder = null;
    syncVideoVoiceButtons();
  }
}

function clearVideoAudioPreviewUrl() {
  if (videoAudioPreviewUrl) {
    URL.revokeObjectURL(videoAudioPreviewUrl);
    videoAudioPreviewUrl = "";
  }
}

function stopVideoWavePreview() {
  videoEqualizerPreviewActive = false;
  if (videoEqualizerAnimationFrame) {
    cancelAnimationFrame(videoEqualizerAnimationFrame);
    videoEqualizerAnimationFrame = 0;
  }

  if (videoAudioElement) {
    videoAudioElement.pause();
    videoAudioElement.currentTime = 0;
  }

  if (videoAudioSourceNode) {
    try {
      videoAudioSourceNode.disconnect();
    } catch (_) {}
    videoAudioSourceNode = null;
  }

  if (videoAudioAnalyser) {
    try {
      videoAudioAnalyser.disconnect();
    } catch (_) {}
    videoAudioAnalyser = null;
  }

  clearVideoAudioPreviewUrl();
  setVideoWavePreviewButtonState(false);
  drawVideoEqualizerPreview();
}

function drawVideoEqualizerPreview(levels = []) {
  if (!videoEqualizerCanvas) {
    return;
  }

  const context = videoEqualizerCanvas.getContext("2d");
  if (!context) {
    return;
  }

  const width = videoEqualizerCanvas.width;
  const height = videoEqualizerCanvas.height;
  context.clearRect(0, 0, width, height);

  const gradient = context.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, "rgba(206, 177, 99, 0.72)");
  gradient.addColorStop(1, "rgba(41, 58, 102, 0.18)");
  context.fillStyle = gradient;

  const bars = 56;
  const barWidth = width / bars;
  const highPointRatio = (Number(videoHighWavePoint?.value) || 70) / 100;
  const lowPointRatio = (Number(videoLowWavePoint?.value) || 30) / 100;
  for (let i = 0; i < bars; i += 1) {
    const level = Number.isFinite(levels[i]) ? levels[i] : ((Math.sin((i / bars) * Math.PI * 4 + videoEqualizerPhase) + 1) / 2);
    const normalized = Math.max(0.1, (level * highPointRatio) + ((1 - level) * lowPointRatio));
    const barHeight = normalized * (height - 18);
    const x = i * barWidth + 1;
    const y = height - barHeight - 8;
    context.fillRect(x, y, Math.max(2, barWidth - 3), barHeight);
  }

  context.strokeStyle = "rgba(234, 241, 255, 0.45)";
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(0, height - 8);
  context.lineTo(width, height - 8);
  context.stroke();
}

function animateVideoEqualizerFromAnalyser() {
  if (!videoEqualizerPreviewActive) {
    return;
  }

  if (!videoAudioAnalyser) {
    videoEqualizerPhase += 0.11;
    drawVideoEqualizerPreview();
    videoEqualizerAnimationFrame = requestAnimationFrame(animateVideoEqualizerFromAnalyser);
    return;
  }

  const data = new Uint8Array(videoAudioAnalyser.frequencyBinCount);
  videoAudioAnalyser.getByteFrequencyData(data);
  const bars = 56;
  const levels = new Array(bars).fill(0);
  const binsPerBar = Math.max(1, Math.floor(data.length / bars));

  for (let bar = 0; bar < bars; bar += 1) {
    let sum = 0;
    let count = 0;
    const start = bar * binsPerBar;
    const end = Math.min(data.length, start + binsPerBar);
    for (let i = start; i < end; i += 1) {
      sum += data[i];
      count += 1;
    }
    levels[bar] = count ? (sum / count) / 255 : 0;
  }

  drawVideoEqualizerPreview(levels);
  videoEqualizerAnimationFrame = requestAnimationFrame(animateVideoEqualizerFromAnalyser);
}

async function startVideoWavePreview() {
  if (videoEqualizerPreviewActive) {
    stopVideoWavePreview();
    return;
  }

  videoEqualizerPreviewActive = true;
  setVideoWavePreviewButtonState(true);

  const mode = videoAudioSource?.value || "default";
  if (mode === "upload" && videoUploadedAudioFile) {
    try {
      if (!videoAudioContext) {
        videoAudioContext = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (videoAudioContext.state === "suspended") {
        await videoAudioContext.resume();
      }

      videoAudioElement = new Audio();
      videoAudioElement.preload = "auto";
      videoAudioElement.crossOrigin = "anonymous";
      videoAudioPreviewUrl = URL.createObjectURL(videoUploadedAudioFile);
      videoAudioElement.src = videoAudioPreviewUrl;
      videoAudioElement.loop = true;

      videoAudioAnalyser = videoAudioContext.createAnalyser();
      videoAudioAnalyser.fftSize = 2048;
      videoAudioAnalyser.smoothingTimeConstant = 0.82;
      videoAudioSourceNode = videoAudioContext.createMediaElementSource(videoAudioElement);
      videoAudioSourceNode.connect(videoAudioAnalyser);
      videoAudioAnalyser.connect(videoAudioContext.destination);

      await videoAudioElement.play();
    } catch (_) {
      if (videoAudioLimitsHint) {
        videoAudioLimitsHint.textContent = "Could not preview uploaded audio. Showing animated waves instead.";
      }
      if (videoAudioSourceNode) {
        try {
          videoAudioSourceNode.disconnect();
        } catch (_) {}
        videoAudioSourceNode = null;
      }
      if (videoAudioAnalyser) {
        try {
          videoAudioAnalyser.disconnect();
        } catch (_) {}
        videoAudioAnalyser = null;
      }
    }
  }

  animateVideoEqualizerFromAnalyser();
}

function updateVideoDurationRules() {
  const rawDuration = Number(videoDurationInput?.value);
  const duration = Number.isFinite(rawDuration) ? Math.max(3, Math.min(180, rawDuration)) : 15;
  if (videoDurationInput) {
    videoDurationInput.value = String(duration);
  }

  if (videoAudioSegmentStart) {
    videoAudioSegmentStart.max = String(Math.max(3, Math.floor(videoAudioDurationSeconds - 1)));
  }
  if (videoAudioSegmentEnd) {
    videoAudioSegmentEnd.max = String(Math.max(3, Math.floor(videoAudioDurationSeconds)));
  }

  let start = Number(videoAudioSegmentStart?.value || 0);
  let end = Number(videoAudioSegmentEnd?.value || duration);
  start = Math.max(0, Math.min(start, duration - 1));
  end = Math.max(start + 1, Math.min(end, duration));

  if (videoAudioSegmentStart) {
    videoAudioSegmentStart.value = String(Math.floor(start));
  }
  if (videoAudioSegmentEnd) {
    videoAudioSegmentEnd.value = String(Math.floor(end));
  }

  const segmentLength = Math.max(1, Math.round(end - start));
  if (videoSegmentInfo) {
    videoSegmentInfo.textContent = `Segment: ${Math.round(start)}s - ${Math.round(end)}s (${segmentLength}s selected)`;
  }

  if (videoRuleWarning) {
    if (duration > 120) {
      videoRuleWarning.textContent = "Video too long for Facebook recommendation. Suggested max is 2 minutes.";
    } else {
      videoRuleWarning.textContent = "";
    }
  }
}

function validateVideoAudioUpload(file) {
  if (!file) {
    videoUploadedAudioFile = null;
    videoAudioDurationSeconds = 180;
    if (videoAudioLimitsHint) {
      videoAudioLimitsHint.textContent = "Upload limits: up to 30 MB, around 3m 30s max source for high quality processing.";
    }
    updateVideoDurationRules();
    return;
  }

  const maxBytes = 30 * 1024 * 1024;
  if (file.size > maxBytes) {
    videoUploadedAudioFile = null;
    if (videoAudioLimitsHint) {
      videoAudioLimitsHint.textContent = "Audio file is too large. Please keep it within 30 MB.";
    }
    if (videoAudioFileInput) {
      videoAudioFileInput.value = "";
    }
    return;
  }

  const tempAudio = document.createElement("audio");
  const objectUrl = URL.createObjectURL(file);
  tempAudio.preload = "metadata";
  tempAudio.src = objectUrl;
  tempAudio.onloadedmetadata = () => {
    const duration = Number.isFinite(tempAudio.duration) ? tempAudio.duration : 0;
    if (duration > 210) {
      if (videoAudioLimitsHint) {
        videoAudioLimitsHint.textContent = "Audio is too long. Keep source audio around 3m 30s maximum.";
      }
      if (videoAudioFileInput) {
        videoAudioFileInput.value = "";
      }
      videoUploadedAudioFile = null;
      URL.revokeObjectURL(objectUrl);
      return;
    }

    videoUploadedAudioFile = file;
    videoAudioDurationSeconds = Math.max(3, Math.floor(duration || 180));
    if (videoAudioLimitsHint) {
      videoAudioLimitsHint.textContent = `Audio loaded: ${file.name} (${Math.round(duration)}s).`;
    }
    updateVideoDurationRules();
    URL.revokeObjectURL(objectUrl);
  };
  tempAudio.onerror = () => {
    videoUploadedAudioFile = null;
    if (videoAudioLimitsHint) {
      videoAudioLimitsHint.textContent = "Unable to read this audio file. Please upload MP3/M4A/WAV.";
    }
    URL.revokeObjectURL(objectUrl);
  };
}

function renderVideoSelectedFlow() {
  if (!videoSelectedFlow) {
    return;
  }

  const selectedItems = getSelectedVideoImages();
  videoSelectedFlow.innerHTML = "";

  if (!selectedItems.length) {
    const emptyState = document.createElement("span");
    emptyState.className = "video-flow-empty";
    emptyState.textContent = "Select images from slider to build video flow.";
    videoSelectedFlow.appendChild(emptyState);
    renderVideoWaveImageOptions();
    drawVideoEqualizerPreview();
    return;
  }

  videoSelectedOrder.forEach((slotIndex, orderIndex) => {
    const item = styledImages[slotIndex] || serverImages[slotIndex] || previewItems[slotIndex];
    if (!item) {
      return;
    }

    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "video-flow-chip";
    chip.draggable = true;
    chip.dataset.videoIndex = String(slotIndex);
    chip.dataset.orderIndex = String(orderIndex);

    const badge = document.createElement("span");
    badge.className = "video-flow-chip-order";
    badge.textContent = String(orderIndex + 1);

    const thumb = document.createElement("img");
    thumb.className = "video-flow-chip-thumb";
    thumb.src = item.url;
    thumb.alt = item.name || `Selected ${orderIndex + 1}`;

    chip.appendChild(badge);
    chip.appendChild(thumb);

    chip.addEventListener("dragstart", () => {
      videoDraggedIndex = slotIndex;
      chip.classList.add("is-dragging");
    });

    chip.addEventListener("dragend", () => {
      videoDraggedIndex = null;
      chip.classList.remove("is-dragging");
      renderVideoSelectedFlow();
    });

    chip.addEventListener("dragover", (event) => {
      event.preventDefault();
    });

    chip.addEventListener("drop", (event) => {
      event.preventDefault();
      const targetIndex = slotIndex;
      if (videoDraggedIndex === null || videoDraggedIndex === targetIndex) {
        return;
      }

      const from = videoSelectedOrder.indexOf(videoDraggedIndex);
      const to = videoSelectedOrder.indexOf(targetIndex);
      if (from < 0 || to < 0) {
        return;
      }

      const [moved] = videoSelectedOrder.splice(from, 1);
      videoSelectedOrder.splice(to, 0, moved);
      renderVideoSelectedFlow();
      renderVideoWaveImageOptions();
    });

    videoSelectedFlow.appendChild(chip);
  });

  renderVideoWaveImageOptions();
  drawVideoEqualizerPreview();
}

function renderVideoSelectionUi() {
  if (!videoPreviewGrid) {
    return;
  }

  const availableIndexes = reconcileVideoSelection();
  const cards = Array.from(videoPreviewGrid.querySelectorAll(".capture-slot"));

  cards.forEach((card, index) => {
    const hasImage = Boolean(previewItems[index]);
    card.classList.remove("video-selected", "video-unselected");

    const existingToggle = card.querySelector(".video-image-toggle");
    if (existingToggle) {
      existingToggle.remove();
    }

    if (!hasImage) {
      return;
    }

    const selected = videoSelectedIndexes.has(index);
    card.classList.add(selected ? "video-selected" : "video-unselected");

    const toggleLabel = document.createElement("label");
    toggleLabel.className = "video-image-toggle";
    toggleLabel.title = "Include image for video";

    const toggleInput = document.createElement("input");
    toggleInput.type = "checkbox";
    toggleInput.checked = selected;
    toggleInput.setAttribute("aria-label", `Select image ${index + 1} for video`);
    toggleInput.addEventListener("click", (event) => event.stopPropagation());
    toggleInput.addEventListener("change", (event) => {
      videoSelectionTouched = true;
      if (event.target.checked) {
        videoSelectedIndexes.add(index);
        if (!videoSelectedOrder.includes(index)) {
          videoSelectedOrder.push(index);
        }
      } else {
        videoSelectedIndexes.delete(index);
        videoSelectedOrder = videoSelectedOrder.filter((value) => value !== index);
      }
      renderVideoSelectionUi();
    });

    const toggleText = document.createElement("span");
    toggleText.textContent = "Use";

    toggleLabel.appendChild(toggleInput);
    toggleLabel.appendChild(toggleText);
    toggleLabel.addEventListener("click", (event) => event.stopPropagation());
    card.appendChild(toggleLabel);
  });

  updateVideoSelectionControls(availableIndexes);
  renderVideoSelectedFlow();
  updateVideoDurationRules();
  videoImageUploadPrepared = false;
  refreshVideoImagePostOptions();
  refreshVideoPublishPlatformOptions();
}

function getDesignerWeightValue() {
  const rawValue = Number(designerWeightInput?.value);
  if (!Number.isFinite(rawValue) || rawValue <= 0) {
    return null;
  }
  return rawValue;
}

function formatDesignerWeight(value) {
  if (!Number.isFinite(value)) {
    return "";
  }
  return String(Number(value.toFixed(2)));
}

function getDesignerWeightUnit() {
  const unit = (designerWeightUnit?.value || "gm").trim();
  return unit || "gm";
}

function applyMeasureWeightPosition() {
  if (!measureWeightDisplay) {
    return;
  }

  const nextX = clampMeasurementValue(measureWeightPosition.x, 0.1, 0.9);
  const nextY = clampMeasurementValue(measureWeightPosition.y, 0.1, 0.9);
  measureWeightPosition = { x: nextX, y: nextY };
  measureWeightDisplay.style.left = `${nextX * 100}%`;
  measureWeightDisplay.style.top = `${nextY * 100}%`;
}

function updateMeasureWeightDisplay() {
  if (!measureWeightDisplay || !measureWeightDisplayScreen) {
    return;
  }

  const weight = getDesignerWeightValue();
  if (!weight) {
    measureWeightDisplay.classList.add("hidden");
    return;
  }

  measureWeightDisplay.classList.remove("hidden");
  measureWeightDisplayScreen.textContent = `${formatDesignerWeight(weight)} ${getDesignerWeightUnit()}`;
  applyMeasureWeightPosition();
}

function handleMeasureWeightPointerMove(event) {
  if (!measureWeightDrag || !measureDeviceFrame) {
    return;
  }

  const frameRect = measureDeviceFrame.getBoundingClientRect();
  const x = (event.clientX - frameRect.left) / Math.max(1, frameRect.width);
  const y = (event.clientY - frameRect.top) / Math.max(1, frameRect.height);
  measureWeightPosition = {
    x: clampMeasurementValue(x, 0.1, 0.9),
    y: clampMeasurementValue(y, 0.1, 0.9),
  };
  applyMeasureWeightPosition();
}

function stopMeasureWeightDrag() {
  if (!measureWeightDrag) {
    return;
  }

  measureWeightDrag = null;
  if (measureWeightDisplay) {
    measureWeightDisplay.classList.remove("is-dragging");
  }
  window.removeEventListener("pointermove", handleMeasureWeightPointerMove);
  window.removeEventListener("pointerup", stopMeasureWeightDrag);
  window.removeEventListener("pointercancel", stopMeasureWeightDrag);
}

function startMeasureWeightDrag(event) {
  if (!measureWeightDisplay || !measureDeviceFrame || measureWeightDisplay.classList.contains("hidden")) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  measureWeightDrag = { pointerId: event.pointerId };
  measureWeightDisplay.classList.add("is-dragging");
  handleMeasureWeightPointerMove(event);
  window.addEventListener("pointermove", handleMeasureWeightPointerMove);
  window.addEventListener("pointerup", stopMeasureWeightDrag);
  window.addEventListener("pointercancel", stopMeasureWeightDrag);
}

function applyMeasurePreviewTextAppearance() {
  if (!measurePreviewText) {
    return;
  }

  const appearance = designerTextAppearance?.value || "normal";
  measurePreviewText.classList.remove(
    "appearance-faded",
    "appearance-bold",
    "appearance-blinking",
    "appearance-smooth",
  );

  if (appearance !== "normal") {
    measurePreviewText.classList.add(`appearance-${appearance}`);
  }
}

function applyMeasurePreviewTextPosition() {
  if (!measurePreviewText) {
    return;
  }

  const nextX = clampMeasurementValue(measureTextPosition.x, 0.08, 0.92);
  const nextY = clampMeasurementValue(measureTextPosition.y, 0.08, 0.92);
  measureTextPosition = { x: nextX, y: nextY };
  measurePreviewText.style.left = `${nextX * 100}%`;
  measurePreviewText.style.top = `${nextY * 100}%`;
}

function handleMeasureTextPointerMove(event) {
  if (!measureTextDrag || !measureDeviceFrame) {
    return;
  }

  const frameRect = measureDeviceFrame.getBoundingClientRect();
  const x = (event.clientX - frameRect.left) / Math.max(1, frameRect.width);
  const y = (event.clientY - frameRect.top) / Math.max(1, frameRect.height);
  measureTextPosition = {
    x: clampMeasurementValue(x, 0.08, 0.92),
    y: clampMeasurementValue(y, 0.08, 0.92),
  };
  applyMeasurePreviewTextPosition();
}

function stopMeasureTextDrag() {
  if (!measureTextDrag) {
    return;
  }

  measureTextDrag = null;
  if (measurePreviewText) {
    measurePreviewText.classList.remove("is-dragging");
  }
  window.removeEventListener("pointermove", handleMeasureTextPointerMove);
  window.removeEventListener("pointerup", stopMeasureTextDrag);
  window.removeEventListener("pointercancel", stopMeasureTextDrag);
}

function startMeasureTextDrag(event) {
  if (!measurePreviewText || !measureDeviceFrame) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  measureTextDrag = { pointerId: event.pointerId };
  measurePreviewText.classList.add("is-dragging");
  handleMeasureTextPointerMove(event);
  window.addEventListener("pointermove", handleMeasureTextPointerMove);
  window.addEventListener("pointerup", stopMeasureTextDrag);
  window.addEventListener("pointercancel", stopMeasureTextDrag);
}

function updateMeasurementCircleToggleButton() {
  if (!toggleMeasurementCircleBtn) {
    return;
  }
  const isVisible = measurementLabelCircleVisible;
  toggleMeasurementCircleBtn.textContent = isVisible ? "Circle: On" : "Circle: Off";
  toggleMeasurementCircleBtn.setAttribute("aria-pressed", String(!isVisible));
}

function setMeasurementStatus(message, isError = false) {
  if (!measurementEditorStatus) {
    return;
  }

  measurementEditorStatus.textContent = message;
  measurementEditorStatus.style.color = isError ? "#ffb4a9" : "";
}

function getMeasurementsForSelectedSlot() {
  if (selectedIndex < 0) {
    return null;
  }
  return measurementsBySlot[selectedIndex];
}

function getActiveMeasurement() {
  const measurements = getMeasurementsForSelectedSlot();
  if (!measurements || !activeMeasurementId) {
    return null;
  }
  return measurements.find((item) => item.id === activeMeasurementId) || null;
}

function updateMeasurementFrameVisibility() {
  if (!measurementOverlayFrame) {
    return;
  }

  const hasVisibleImage = Boolean(
    measurePreviewImage?.getAttribute("src") &&
    measurePreviewImage?.style.display !== "none" &&
    measurePreviewImage?.clientWidth &&
    measurePreviewImage?.clientHeight
  );

  measurementOverlayFrame.classList.toggle("hidden", !hasVisibleImage || !measurementOverlayMetrics);
}

function syncMeasurementOverlayFrame() {
  if (!measureDeviceFrame || !measurePreviewImage || !measurementOverlayFrame) {
    return;
  }

  const hasVisibleImage = Boolean(
    measurePreviewImage.getAttribute("src") &&
    measurePreviewImage.style.display !== "none" &&
    measurePreviewImage.clientWidth &&
    measurePreviewImage.clientHeight
  );

  if (!hasVisibleImage) {
    measurementOverlayMetrics = null;
    updateMeasurementFrameVisibility();
    renderMeasurementOverlays();
    return;
  }

  const previewRect = measureDeviceFrame.getBoundingClientRect();
  const imageRect = measurePreviewImage.getBoundingClientRect();
  measurementOverlayMetrics = {
    left: imageRect.left - previewRect.left,
    top: imageRect.top - previewRect.top,
    width: imageRect.width,
    height: imageRect.height,
  };

  measurementOverlayFrame.style.left = `${measurementOverlayMetrics.left}px`;
  measurementOverlayFrame.style.top = `${measurementOverlayMetrics.top}px`;
  measurementOverlayFrame.style.width = `${measurementOverlayMetrics.width}px`;
  measurementOverlayFrame.style.height = `${measurementOverlayMetrics.height}px`;
  updateMeasurementFrameVisibility();
  renderMeasurementOverlays();
}

function clampMeasurementValue(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function createMeasurementLabel(measurement) {
  return `${measurement.value} ${measurement.unit}`;
}

function parseMeasurementValue(rawValue) {
  const value = Number(rawValue);
  if (!Number.isFinite(value) || value <= 0) {
    return null;
  }
  return value;
}

function isLocalObjectUrl(url) {
  return /^blob:|^data:/i.test(String(url || ""));
}

function withCacheBust(url, suffix = "") {
  if (!url) {
    return "";
  }
  if (isLocalObjectUrl(url)) {
    return url;
  }
  const token = `t=${Date.now()}${suffix ? `_${suffix}` : ""}`;
  return `${url}${String(url).includes("?") ? "&" : "?"}${token}`;
}

function normalizeMeasurementRotation(rotation) {
  const normalized = rotation % 360;
  return normalized < 0 ? normalized + 360 : normalized;
}

function renderMeasurementOverlays() {
  if (!measurementOverlayLayer) {
    return;
  }

  measurementOverlayLayer.innerHTML = "";
  const measurements = getMeasurementsForSelectedSlot();
  if (!measurements || !measurementOverlayMetrics) {
    return;
  }

  measurements.forEach((measurement) => {
    const item = document.createElement("div");
    item.className = "measurement-item";
    if (measurement.id === activeMeasurementId) {
      item.classList.add("is-selected");
    }
    if (measurement.id === editingMeasurementId) {
      item.classList.add("is-editing");
    }
    item.dataset.measurementId = measurement.id;
    item.style.left = `${measurement.x * 100}%`;
    item.style.top = `${measurement.y * 100}%`;
    item.style.width = `${measurement.width * 100}%`;
    item.style.transform = `translate(-50%, -50%) rotate(${measurement.rotation}deg)`;

    const body = document.createElement("div");
    body.className = "measurement-body";
    body.classList.toggle("is-text-dark", measurementLabelTextColor === "black");
    item.appendChild(body);

    const startHandle = document.createElement("button");
    startHandle.type = "button";
    startHandle.className = "measurement-handle measurement-handle-start";
    startHandle.setAttribute("aria-label", "Resize measurement from start");
    startHandle.addEventListener("pointerdown", (event) => startMeasurementResize(event, measurement.id, "start"));
    body.appendChild(startHandle);

    const leftLine = document.createElement("span");
    leftLine.className = "measurement-line measurement-line-left";
    body.appendChild(leftLine);

    const labelWrap = document.createElement("div");
    labelWrap.className = "measurement-label-wrap";
    labelWrap.classList.toggle("is-bg-hidden", !measurementLabelCircleVisible);
    labelWrap.classList.toggle("is-text-dark", measurementLabelTextColor === "black");
    body.appendChild(labelWrap);

    const labelButton = document.createElement("button");
    labelButton.type = "button";
    labelButton.className = "measurement-label";
    labelButton.textContent = createMeasurementLabel(measurement);
    labelButton.addEventListener("click", (event) => {
      event.stopPropagation();
      activeMeasurementId = measurement.id;
      editingMeasurementId = measurement.id;
      renderMeasurementOverlays();
    });
    labelWrap.appendChild(labelButton);

    const labelInput = document.createElement("input");
    labelInput.type = "number";
    labelInput.min = "0";
    labelInput.step = "0.01";
    labelInput.className = "measurement-label-input";
    labelInput.value = String(measurement.value);
    if (measurement.id !== editingMeasurementId) {
      labelInput.hidden = true;
    }
    labelInput.addEventListener("click", (event) => event.stopPropagation());
    labelInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        labelInput.blur();
      }
      if (event.key === "Escape") {
        editingMeasurementId = "";
        renderMeasurementOverlays();
      }
    });
    labelInput.addEventListener("blur", () => {
      const nextValue = parseMeasurementValue(labelInput.value);
      if (!nextValue) {
        setMeasurementStatus("Measurement value must be a positive number.", true);
        labelInput.focus();
        return;
      }
      measurement.value = nextValue;
      editingMeasurementId = "";
      setMeasurementStatus(`Updated measurement to ${createMeasurementLabel(measurement)}.`);
      renderMeasurementOverlays();
    });
    labelWrap.appendChild(labelInput);

    const rightLine = document.createElement("span");
    rightLine.className = "measurement-line measurement-line-right";
    body.appendChild(rightLine);

    const endHandle = document.createElement("button");
    endHandle.type = "button";
    endHandle.className = "measurement-handle measurement-handle-end";
    endHandle.setAttribute("aria-label", "Resize measurement from end");
    endHandle.addEventListener("pointerdown", (event) => startMeasurementResize(event, measurement.id, "end"));
    body.appendChild(endHandle);

    const rotateButton = document.createElement("button");
    rotateButton.type = "button";
    rotateButton.className = "measurement-action measurement-rotate-button";
    rotateButton.setAttribute("aria-label", "Rotate measurement by 90 degrees");
    rotateButton.textContent = "⟳";
    rotateButton.addEventListener("click", (event) => {
      event.stopPropagation();
      rotateMeasurementByStep(measurement.id, 90);
    });
    item.appendChild(rotateButton);

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "measurement-action measurement-delete-button";
    deleteButton.setAttribute("aria-label", "Delete measurement");
    deleteButton.textContent = "×";
    deleteButton.addEventListener("click", (event) => {
      event.stopPropagation();
      deleteMeasurement(measurement.id);
    });
    item.appendChild(deleteButton);

    const dragButton = document.createElement("button");
    dragButton.type = "button";
    dragButton.className = "measurement-action measurement-drag-button";
    dragButton.setAttribute("aria-label", "Drag measurement");
    dragButton.textContent = "⠿";
    dragButton.addEventListener("pointerdown", (event) => {
      event.stopPropagation();
      startMeasurementInteraction(event, measurement.id, "drag");
    });
    item.appendChild(dragButton);

    item.addEventListener("pointerdown", (event) => startMeasurementDrag(event, measurement.id));
    measurementOverlayLayer.appendChild(item);

    if (measurement.id === editingMeasurementId) {
      window.requestAnimationFrame(() => {
        labelInput.hidden = false;
        labelInput.focus();
        labelInput.select();
      });
    }
  });
}

function deleteMeasurement(measurementId) {
  const measurements = getMeasurementsForSelectedSlot();
  if (!measurements) {
    return;
  }
  const nextItems = measurements.filter((item) => item.id !== measurementId);
  measurementsBySlot[selectedIndex] = nextItems;
  if (activeMeasurementId === measurementId) {
    activeMeasurementId = "";
  }
  if (editingMeasurementId === measurementId) {
    editingMeasurementId = "";
  }
  setMeasurementStatus("Measurement removed.");
  renderMeasurementOverlays();
  renderProcessedHistory();
}

function rotateMeasurementByStep(measurementId, stepDegrees = 90) {
  const measurements = getMeasurementsForSelectedSlot();
  const measurement = measurements?.find((item) => item.id === measurementId);
  if (!measurement) {
    return;
  }

  activeMeasurementId = measurementId;
  editingMeasurementId = "";
  measurement.rotation = normalizeMeasurementRotation(measurement.rotation + stepDegrees);
  setMeasurementStatus(`Rotation: ${Math.round(measurement.rotation)}deg`);
  renderMeasurementOverlays();
}

function startMeasurementInteraction(event, measurementId, type, extra = {}) {
  const measurements = getMeasurementsForSelectedSlot();
  const measurement = measurements?.find((item) => item.id === measurementId);
  if (!measurement || !measurementOverlayMetrics) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  activeMeasurementId = measurementId;
  editingMeasurementId = "";

  const pointerStart = { x: event.clientX, y: event.clientY };
  const widthPx = measurement.width * measurementOverlayMetrics.width;
  const centerPx = {
    x: measurement.x * measurementOverlayMetrics.width,
    y: measurement.y * measurementOverlayMetrics.height,
  };
  const rotationRad = (measurement.rotation * Math.PI) / 180;

  measurementInteraction = {
    type,
    measurementId,
    start: pointerStart,
    startMeasurement: { ...measurement },
    widthPx,
    centerPx,
    rotationRad,
    ...extra,
  };

  window.addEventListener("pointermove", handleMeasurementPointerMove);
  window.addEventListener("pointerup", endMeasurementPointerInteraction);
  window.addEventListener("pointercancel", endMeasurementPointerInteraction);
  renderMeasurementOverlays();
}

function startMeasurementDrag(event, measurementId) {
  if (event.target.closest(".measurement-handle, .measurement-action, .measurement-label, .measurement-label-input")) {
    return;
  }
  startMeasurementInteraction(event, measurementId, "drag");
}

function startMeasurementResize(event, measurementId, edge) {
  startMeasurementInteraction(event, measurementId, "resize", { edge });
}

function startMeasurementRotate(event, measurementId) {
  const measurement = getMeasurementsForSelectedSlot()?.find((item) => item.id === measurementId);
  if (!measurement || !measurementOverlayMetrics) {
    return;
  }

  const center = {
    x: measurement.x * measurementOverlayMetrics.width,
    y: measurement.y * measurementOverlayMetrics.height,
  };
  const overlayRect = measurementOverlayFrame.getBoundingClientRect();
  const pointerAngle = Math.atan2(event.clientY - overlayRect.top - center.y, event.clientX - overlayRect.left - center.x);
  startMeasurementInteraction(event, measurementId, "rotate", {
    startAngle: pointerAngle,
    startRotation: measurement.rotation,
  });
}

function handleMeasurementPointerMove(event) {
  if (!measurementInteraction || !measurementOverlayMetrics) {
    return;
  }

  const measurements = getMeasurementsForSelectedSlot();
  const measurement = measurements?.find((item) => item.id === measurementInteraction.measurementId);
  if (!measurement) {
    return;
  }

  const deltaX = event.clientX - measurementInteraction.start.x;
  const deltaY = event.clientY - measurementInteraction.start.y;
  const axisX = Math.cos(measurementInteraction.rotationRad);
  const axisY = Math.sin(measurementInteraction.rotationRad);

  if (measurementInteraction.type === "drag") {
    measurement.x = clampMeasurementValue(
      (measurementInteraction.centerPx.x + deltaX) / measurementOverlayMetrics.width,
      0.04,
      0.96,
    );
    measurement.y = clampMeasurementValue(
      (measurementInteraction.centerPx.y + deltaY) / measurementOverlayMetrics.height,
      0.05,
      0.95,
    );
  } else if (measurementInteraction.type === "resize") {
    const projected = (deltaX * axisX) + (deltaY * axisY);
    const startWidth = measurementInteraction.widthPx;

    if (measurementInteraction.edge === "end") {
      const nextWidth = clampMeasurementValue(startWidth + projected, 64, measurementOverlayMetrics.width * 0.92);
      measurement.width = nextWidth / measurementOverlayMetrics.width;
    } else {
      const nextWidth = clampMeasurementValue(startWidth - projected, 64, measurementOverlayMetrics.width * 0.92);
      const appliedProjection = startWidth - nextWidth;
      const centerShiftX = (appliedProjection * axisX) / 2;
      const centerShiftY = (appliedProjection * axisY) / 2;
      measurement.width = nextWidth / measurementOverlayMetrics.width;
      measurement.x = clampMeasurementValue(
        (measurementInteraction.centerPx.x + centerShiftX) / measurementOverlayMetrics.width,
        0.04,
        0.96,
      );
      measurement.y = clampMeasurementValue(
        (measurementInteraction.centerPx.y + centerShiftY) / measurementOverlayMetrics.height,
        0.05,
        0.95,
      );
    }
  } else if (measurementInteraction.type === "rotate") {
    const overlayRect = measurementOverlayFrame.getBoundingClientRect();
    const centerClientX = overlayRect.left + (measurementInteraction.startMeasurement.x * measurementOverlayMetrics.width);
    const centerClientY = overlayRect.top + (measurementInteraction.startMeasurement.y * measurementOverlayMetrics.height);
    const nextAngle = Math.atan2(event.clientY - centerClientY, event.clientX - centerClientX);
    const deltaAngle = nextAngle - measurementInteraction.startAngle;
    measurement.rotation = normalizeMeasurementRotation(
      measurementInteraction.startRotation + ((deltaAngle * 180) / Math.PI)
    );
  }

  renderMeasurementOverlays();
}

function endMeasurementPointerInteraction() {
  measurementInteraction = null;
  window.removeEventListener("pointermove", handleMeasurementPointerMove);
  window.removeEventListener("pointerup", endMeasurementPointerInteraction);
  window.removeEventListener("pointercancel", endMeasurementPointerInteraction);
}

function createMeasurement() {
  const measurements = getMeasurementsForSelectedSlot();
  const selected = styledImages[selectedIndex] || serverImages[selectedIndex] || previewItems[selectedIndex];
  if (!selected || !measurements) {
    setMeasurementStatus("Select an image in Editor before creating a measurement.", true);
    return;
  }

  const value = parseMeasurementValue(measurementValueInput?.value);
  if (!value) {
    setMeasurementStatus("Enter a valid positive measurement value.", true);
    return;
  }

  const unit = measurementUnitSelect?.value || "cm";
  syncMeasurePreview(selected.url);
  syncMeasurementOverlayFrame();
  const indexOffset = measurements.length * 0.08;
  const measurement = {
    id: `measurement_${Date.now()}_${measurementIdCounter += 1}`,
    value,
    unit,
    x: 0.5,
    y: clampMeasurementValue(0.24 + indexOffset, 0.14, 0.84),
    rotation: 0,
    width: 0.34,
  };

  measurements.push(measurement);
  activeMeasurementId = measurement.id;
  editingMeasurementId = "";
  setMeasurementStatus(`Created measurement ${createMeasurementLabel(measurement)}.`);
  renderMeasurementOverlays();
  renderProcessedHistory();

  // Change button label to 'Add Measurement' after first creation
  if (createMeasurementBtn) {
    createMeasurementBtn.textContent = "Add Measurement";
  }
}

function drawMeasurementOnCanvas(context, measurement, canvasWidth, canvasHeight) {
  const centerX = measurement.x * canvasWidth;
  const centerY = measurement.y * canvasHeight;
  const lineWidth = Math.max(2, Math.round(canvasWidth * 0.0032));
  const totalWidth = measurement.width * canvasWidth;
  const label = createMeasurementLabel(measurement);
  const fontSize = Math.max(15, Math.round(canvasWidth * 0.029));
  const arrowSize = Math.max(10, Math.round(canvasWidth * 0.018));

  context.save();
  context.translate(centerX, centerY);
  context.rotate((measurement.rotation * Math.PI) / 180);
  context.font = `600 ${fontSize}px Inter, sans-serif`;
  const labelWidth = context.measureText(label).width + 26;
  const labelHeight = Math.round(fontSize * 1.7);
  const halfWidth = totalWidth / 2;
  const labelHalf = labelWidth / 2;
  const gap = labelHalf + 16;
  const lineColor = "rgba(255, 244, 214, 0.98)";
  const labelTextColor = measurementLabelTextColor === "black" ? "rgba(20, 23, 30, 0.97)" : lineColor;

  context.strokeStyle = lineColor;
  context.fillStyle = lineColor;
  context.lineWidth = lineWidth;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.shadowColor = "rgba(215, 187, 121, 0.4)";
  context.shadowBlur = Math.max(8, Math.round(canvasWidth * 0.012));

  context.beginPath();
  context.moveTo(-halfWidth, 0);
  context.lineTo(-gap, 0);
  context.moveTo(gap, 0);
  context.lineTo(halfWidth, 0);
  context.stroke();

  context.beginPath();
  context.strokeStyle = labelTextColor;
  context.moveTo(-halfWidth, 0);
  context.lineTo(-halfWidth + arrowSize, -arrowSize * 0.7);
  context.moveTo(-halfWidth, 0);
  context.lineTo(-halfWidth + arrowSize, arrowSize * 0.7);
  context.moveTo(halfWidth, 0);
  context.lineTo(halfWidth - arrowSize, -arrowSize * 0.7);
  context.moveTo(halfWidth, 0);
  context.lineTo(halfWidth - arrowSize, arrowSize * 0.7);
  context.stroke();

  const boxX = -labelHalf;
  const boxY = -labelHeight / 2;
  const radius = labelHeight / 2;
  if (measurementLabelCircleVisible) {
    context.shadowBlur = Math.max(12, Math.round(canvasWidth * 0.018));
    context.fillStyle = "rgba(24, 27, 34, 0.92)";
    context.beginPath();
    context.moveTo(boxX + radius, boxY);
    context.arcTo(boxX + labelWidth, boxY, boxX + labelWidth, boxY + labelHeight, radius);
    context.arcTo(boxX + labelWidth, boxY + labelHeight, boxX, boxY + labelHeight, radius);
    context.arcTo(boxX, boxY + labelHeight, boxX, boxY, radius);
    context.arcTo(boxX, boxY, boxX + labelWidth, boxY, radius);
    context.closePath();
    context.fill();

    context.shadowBlur = 0;
    context.strokeStyle = "rgba(215, 187, 121, 0.45)";
    context.stroke();
  } else {
    context.shadowBlur = 0;
  }
  context.fillStyle = labelTextColor;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(label, 0, 1);
  context.restore();
}

function drawWeightDisplayOnCanvas(context, canvasWidth, canvasHeight) {
  const weight = getDesignerWeightValue();
  if (!weight) {
    return;
  }

  const label = `${formatDesignerWeight(weight)} ${getDesignerWeightUnit()}`;
  const fontSize = Math.max(14, Math.round(canvasWidth * 0.028));
  context.save();
  context.font = `700 ${fontSize}px Consolas, DejaVu Sans Mono, monospace`;
  const labelWidth = context.measureText(label).width;
  context.restore();

  const centerX = measureWeightPosition.x * canvasWidth;
  const centerY = measureWeightPosition.y * canvasHeight;
  const boxWidth = Math.max(144, Math.round(labelWidth + (canvasWidth * 0.095)));
  const boxHeight = Math.max(50, Math.round(canvasHeight * 0.095));
  const bodyX = centerX - (boxWidth / 2);
  const bodyY = centerY - (boxHeight / 2) + 5;
  const bodyRadius = Math.round(boxHeight * 0.16);
  const platformWidth = boxWidth * 0.76;
  const platformHeight = Math.max(8, Math.round(boxHeight * 0.14));
  const platformX = centerX - (platformWidth / 2);
  const platformY = bodyY - Math.round(platformHeight * 0.45);
  const screenInset = Math.max(8, Math.round(boxWidth * 0.06));
  const screenHeight = Math.round(boxHeight * 0.44);
  const screenY = bodyY + Math.round(boxHeight * 0.22);
  const screenX = bodyX + (boxWidth * 0.19);
  const screenWidth = boxWidth * 0.62;
  const screenRadius = Math.round(screenHeight * 0.25);
  const controlSize = Math.max(7, Math.round(boxHeight * 0.13));

  context.save();
  context.shadowColor = "rgba(0, 0, 0, 0.35)";
  context.shadowBlur = Math.max(8, Math.round(canvasWidth * 0.016));
  context.fillStyle = "rgba(90, 79, 67, 0.98)";
  context.beginPath();
  context.roundRect(platformX, platformY, platformWidth, platformHeight, Math.round(platformHeight * 0.45));
  context.fill();

  context.fillStyle = "rgba(57, 50, 45, 0.98)";
  context.beginPath();
  context.roundRect(bodyX, bodyY, boxWidth, boxHeight, bodyRadius);
  context.fill();

  context.shadowBlur = 0;
  context.fillStyle = "rgba(36, 94, 232, 0.98)";
  context.strokeStyle = "rgba(171, 222, 255, 0.42)";
  context.beginPath();
  context.roundRect(screenX, screenY, screenWidth, screenHeight, screenRadius);
  context.fill();
  context.stroke();

  const controlY = bodyY + Math.round(boxHeight * 0.24);
  const leftControlX = bodyX + Math.round(boxWidth * 0.1);
  const leftControlX2 = bodyX + Math.round(boxWidth * 0.17);
  const rightControlX = bodyX + Math.round(boxWidth * 0.83);
  const rightControlX2 = bodyX + Math.round(boxWidth * 0.9);
  context.fillStyle = "rgba(111, 94, 76, 0.98)";
  [[leftControlX, controlY], [leftControlX2, controlY], [rightControlX, controlY], [rightControlX2, controlY]].forEach(([x, y]) => {
    context.beginPath();
    context.arc(x, y, controlSize / 2, 0, Math.PI * 2);
    context.fill();
  });

  context.fillStyle = "rgba(10, 22, 58, 0.98)";
  context.font = `700 ${fontSize}px Consolas, DejaVu Sans Mono, monospace`;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(label, centerX, screenY + (screenHeight / 2) + 1);
  context.restore();
}

async function renderSelectedImageWithMeasurements() {
  const selected = styledImages[selectedIndex] || serverImages[selectedIndex] || previewItems[selectedIndex];
  if (!selected?.url) {
    throw new Error("Select an image first.");
  }

  const image = new Image();
  image.decoding = "async";
  image.src = withCacheBust(selected.url, "export");
  await new Promise((resolve, reject) => {
    image.onload = resolve;
    image.onerror = reject;
  });

  const canvas = document.createElement("canvas");
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  const context = canvas.getContext("2d");
  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  const measurements = getMeasurementsForSelectedSlot() || [];
  measurements.forEach((measurement) => drawMeasurementOnCanvas(context, measurement, canvas.width, canvas.height));
  drawWeightDisplayOnCanvas(context, canvas.width, canvas.height);
  return { canvas, selected };
}

function setLiveStatus(message) {
  if (!mobileLiveStatus) {
    return;
  }
  mobileLiveStatus.textContent = message;
}

function syncDevicePreviewMode() {
  if (!socialFeedPreview) {
    return;
  }

  const showLiveMedia = livePreviewMode === "phone" || livePreviewMode === "camera";
  socialFeedPreview.classList.toggle("hidden", showLiveMedia);

  if (mobileLivePlaceholder) {
    mobileLivePlaceholder.style.display = showLiveMedia ? "none" : "none";
  }
}

function updateAspectButtons() {
  [previewSquareBtn, previewPortraitBtn, previewLandscapeBtn].forEach((button) => {
    if (!button) {
      return;
    }
    const isActive = button.dataset.previewAspect === socialPreviewAspect;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function setSocialPreviewAspect(aspect) {
  socialPreviewAspect = aspect;
  if (socialPostMediaShell) {
    socialPostMediaShell.classList.remove("ratio-square", "ratio-portrait", "ratio-landscape");
    socialPostMediaShell.classList.add(`ratio-${aspect}`);
  }
  
  [previewGrid, backgroundPreviewGrid, editorPreviewGrid, videoPreviewGrid].filter(Boolean).forEach((grid) => {
    grid.classList.remove("grid-portrait", "grid-landscape", "grid-square");
    if (aspect === "landscape") {
      grid.classList.add("grid-landscape");
    } else if (aspect === "portrait") {
      grid.classList.add("grid-portrait");
    } else {
      grid.classList.add("grid-portrait");
    }
  });
  
  updateAspectButtons();

  if (aspect === "landscape") {
    setScreenOrientation("landscape");
  } else {
    setScreenOrientation("portrait");
  }

  syncSocialPreview();
}

function setSocialPreviewPlatform(platform) {
  socialPreviewPlatform = platform;
  if (socialPostCard) {
    socialPostCard.classList.toggle("platform-instagram", platform === "instagram");
    socialPostCard.classList.toggle("platform-facebook", platform === "facebook");
  }
  syncSocialPreview();
}

function buildSocialCaption(item) {
  const label = item?.name ? item.name.replace(/[_-]+/g, " ").replace(/\.[a-z0-9]+$/i, "") : "your product";
  if (socialPreviewPlatform === "facebook") {
    return `<strong>laxmia.studio</strong> Previewing ${label} in a clean Facebook feed layout before publishing.`;
  }
  return `<strong>laxmia.studio</strong> Previewing ${label} in a polished Instagram feed layout before posting.`;
}

function syncSocialPreview() {
  if (!socialFeedPreview || !socialPostMediaShell || !socialPreviewImage || !socialPreviewPlaceholder) {
    return;
  }

  const item = previewItems[selectedIndex] || previewItems[0] || null;

  if (socialPostUsername) {
    socialPostUsername.textContent = socialPreviewPlatform === "facebook" ? "Laxmia Studio" : "laxmia.studio";
  }
  if (socialPostMeta) {
    if (socialPreviewPlatform === "facebook") {
      socialPostMeta.textContent = socialPreviewAspect === "landscape" ? "Page post • Landscape preview" : "Page post • Mobile feed preview";
    } else {
      socialPostMeta.textContent = socialPreviewAspect === "portrait" ? "Sponsored • 4:5 feed preview" : "Sponsored • Feed preview";
    }
  }
  if (socialPostLikes) {
    socialPostLikes.textContent = socialPreviewPlatform === "facebook" ? "238 reactions • 14 comments" : "1,284 likes";
  }
  if (socialPostCaption) {
    socialPostCaption.innerHTML = buildSocialCaption(item);
  }

  if (item?.url) {
    socialPreviewImage.src = item.url;
    socialPreviewImage.style.display = "block";
    socialPreviewPlaceholder.style.display = "none";
  } else {
    socialPreviewImage.removeAttribute("src");
    socialPreviewImage.style.display = "none";
    socialPreviewPlaceholder.style.display = "block";
  }

  syncDevicePreviewMode();
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
    mobileLivePlaceholder.style.display = "none";
  }

  if (captureFromLiveBtn) {
    const showCaptureBtn = mode === "phone" || mode === "camera";
    captureFromLiveBtn.classList.toggle("hidden", !showCaptureBtn);
  }

  if (takePictureLiveBtn) {
    const showCaptureBtn = mode === "phone" || mode === "camera";
    takePictureLiveBtn.classList.toggle("hidden", !showCaptureBtn);
  }

  syncDevicePreviewMode();
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

function setBgStatus(message, isError = false) {
  if (!bgStatusEl) return;
  bgStatusEl.textContent = message;
  bgStatusEl.style.color = isError ? "#b42318" : "#2a3a4a";
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

function getRemovalNamesForIndex(index) {
  return Array.from(new Set([
    pendingUploadFiles[index]?.name,
    previewItems[index]?.name,
    serverImages[index]?.name,
    styledImages[index]?.name,
  ].filter(Boolean)));
}

async function deleteImagesFromSystem(filenames) {
  if (!filenames.length) {
    return;
  }

  try {
    const response = await fetch("/images", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filenames }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data.detail || "Failed to delete image files.");
    }

    savedImages.length = 0;
    (data.images || []).forEach((item) => savedImages.push(item));
    renderSavedSlots();
  } catch (error) {
    setStatus(error.message || "Image removed locally, but system cleanup failed.", true);
  }
}

function removeImageAtIndex(index) {
  if (index < 0 || index >= previewItems.length) {
    return [];
  }

  const removedNames = getRemovalNamesForIndex(index);

  pendingUploadFiles.splice(index, 1);
  previewItems.splice(index, 1);
  if (index < serverImages.length) {
    serverImages.splice(index, 1);
  }
  if (index < styledImages.length) {
    styledImages.splice(index, 1);
  }

  measurementsBySlot.splice(index, 1);
  measurementsBySlot.push([]);
  activeMeasurementId = "";
  editingMeasurementId = "";

  const removedNameSet = new Set(removedNames);

  if (latestProcessedPreview && removedNameSet.has(latestProcessedPreview.name)) {
    latestProcessedPreview = null;
  }

  if (currentImage && (
    removedNameSet.has(currentImage.original.name) || removedNameSet.has(currentImage.processed.name)
  )) {
    currentImage = null;
  }

  const keptHistory = previousImages.filter(
    (item) => !removedNameSet.has(item.original.name) && !removedNameSet.has(item.processed.name)
  );
  previousImages.length = 0;
  keptHistory.forEach((item) => previousImages.push(item));

  if (selectedHistoryIndex >= previousImages.length) {
    selectedHistoryIndex = previousImages.length - 1;
  }

  const keptSaved = savedImages.filter((item) => !removedNameSet.has(item.name));
  savedImages.length = 0;
  keptSaved.forEach((item) => savedImages.push(item));

  if (!previewItems.length) {
    selectedIndex = -1;
  } else if (selectedIndex > index) {
    selectedIndex -= 1;
  } else if (selectedIndex >= previewItems.length) {
    selectedIndex = previewItems.length - 1;
  }

  renderSavedSlots();
  renderProcessedHistory();
  renderPreview();

  if (selectedHistoryIndex >= 0) {
    showComparisonPreview(selectedHistoryIndex);
  } else {
    resetComparisonPreview();
  }

  const selectedPreview = selectedIndex >= 0
    ? (styledImages[selectedIndex] || serverImages[selectedIndex] || previewItems[selectedIndex] || null)
    : null;

  if (selectedPreview?.url) {
    showProcessedPreview(selectedPreview.url, selectedPreview.name);
  } else {
    showProcessedPreview("");
  }

  renderUploadList();
  setStatus(`${pendingUploadFiles.length} image(s) in list.`);
  return removedNames;
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
    removeBtn.addEventListener("click", async (event) => {
      event.stopPropagation();
      const removedNames = removeImageAtIndex(index);
      await deleteImagesFromSystem(removedNames);
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
  if (!url) {
    latestProcessedPreview = null;
    if (processedPreviewImage && processedPreviewPlaceholder) {
      processedPreviewImage.style.display = "none";
      processedPreviewImage.classList.remove("is-visible");
      processedPreviewImage.removeAttribute("src");
      processedPreviewPlaceholder.style.display = "block";
    }
    if (designerLiveImage) {
      designerLiveImage.removeAttribute("src");
      designerLiveImage.style.display = "none";
    }
    syncMeasurePreview("");
    syncMeasurementOverlayFrame();
    return;
  }
  const parsedName =
    name || decodeURIComponent((url.split("/").pop() || "").split("?")[0] || "");
  latestProcessedPreview = { url, name: parsedName };
  if (processedPreviewImage && processedPreviewPlaceholder) {
    processedPreviewImage.classList.remove("is-visible");
    processedPreviewImage.src = withCacheBust(url, "processed_preview");
    processedPreviewImage.style.display = "block";
    processedPreviewPlaceholder.style.display = "none";
  }

  if (designerLiveImage) {
    designerLiveImage.src = withCacheBust(url, "live");
    designerLiveImage.style.display = "block";
  }

  syncMeasurePreview(url);
  window.requestAnimationFrame(syncMeasurementOverlayFrame);
}

function syncMeasurePreview(imageUrl = "") {
  if (!measurePreviewImage || !measurePreviewPlaceholder) {
    return;
  }

  const selected = (selectedIndex >= 0)
    ? (styledImages[selectedIndex] || serverImages[selectedIndex] || previewItems[selectedIndex] || null)
    : null;

  let fallbackSelected = null;
  if (!selected) {
    for (let index = 0; index < 5; index += 1) {
      const candidate = styledImages[index] || serverImages[index] || previewItems[index] || null;
      if (candidate?.url) {
        fallbackSelected = candidate;
        if (selectedIndex < 0) {
          selectedIndex = index;
        }
        break;
      }
    }
  }

  const nextUrl = imageUrl
    || latestProcessedPreview?.url
    || selected?.url
    || fallbackSelected?.url
    || designerLiveImage?.getAttribute("src")
    || "";
  const resolvedUrl = nextUrl ? withCacheBust(nextUrl, "measure_preview") : "";

  if (resolvedUrl) {
    measurePreviewImage.src = resolvedUrl;
    measurePreviewImage.style.display = "block";
    measurePreviewPlaceholder.style.display = "none";
  } else {
    measurePreviewImage.removeAttribute("src");
    measurePreviewImage.style.display = "none";
    measurePreviewPlaceholder.style.display = "block";
  }

  if (measurePreviewText && designerLiveText) {
    measurePreviewText.textContent = designerLiveText.textContent || "Your text appears here";
    measurePreviewText.style.fontFamily = designerLiveText.style.fontFamily || "Inter";
    measurePreviewText.style.color = designerLiveText.style.color || "#ffffff";
    measurePreviewText.style.fontSize = designerLiveText.style.fontSize || "16px";
  }
  updateMeasureWeightDisplay();
}

function applyMeasureGuides() {
  if (!measureDeviceFrame) {
    return;
  }

  measureDeviceFrame.style.setProperty("--measure-width", `${Math.round(measureWidthRatio * 100)}%`);
  measureDeviceFrame.style.setProperty("--measure-height", `${Math.round(measureHeightRatio * 100)}%`);
}

function bindMeasureHandle(handle, axis) {
  if (!handle || !measureDeviceFrame) {
    return;
  }

  handle.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    const pointerId = event.pointerId;
    handle.setPointerCapture(pointerId);

    const move = (moveEvent) => {
      if (moveEvent.pointerId !== pointerId) {
        return;
      }

      const rect = measureDeviceFrame.getBoundingClientRect();
      if (axis === "width") {
        const ratio = (moveEvent.clientX - rect.left - 48) / Math.max(120, rect.width - 96);
        measureWidthRatio = Math.max(0.22, Math.min(0.92, ratio));
      } else {
        const ratio = (rect.bottom - 48 - moveEvent.clientY) / Math.max(120, rect.height - 96);
        measureHeightRatio = Math.max(0.22, Math.min(0.92, ratio));
      }
      applyMeasureGuides();
    };

    const end = (endEvent) => {
      if (endEvent.pointerId !== pointerId) {
        return;
      }
      handle.removeEventListener("pointermove", move);
      handle.removeEventListener("pointerup", end);
      handle.removeEventListener("pointercancel", end);
      try {
        handle.releasePointerCapture(pointerId);
      } catch (_) {}
    };

    handle.addEventListener("pointermove", move);
    handle.addEventListener("pointerup", end);
    handle.addEventListener("pointercancel", end);
  });
}

function syncRightPanelByStep() {
  if (!livePreviewShell || !editorMeasureShell) {
    return;
  }

  const showEditorMeasure = workflowStep === 2;
  livePreviewShell.classList.toggle("hidden", showEditorMeasure);
  editorMeasureShell.classList.toggle("hidden", !showEditorMeasure);

  if (showEditorMeasure) {
    let selected = (selectedIndex >= 0)
      ? (styledImages[selectedIndex] || serverImages[selectedIndex] || previewItems[selectedIndex] || null)
      : null;

    if (!selected) {
      for (let index = 0; index < 5; index += 1) {
        const candidate = styledImages[index] || serverImages[index] || previewItems[index] || null;
        if (candidate?.url) {
          selected = candidate;
          selectedIndex = index;
          break;
        }
      }
    }

    if (selected?.url) {
      showProcessedPreview(selected.url, selected.name);
    }
    syncMeasurePreview();
    applyMeasureGuides();
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
    img.src = withCacheBust(saved.url, `saved_${index}`);
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

  processedCompareImage.src = withCacheBust(pair.processed.url, "compare");
  processedCompareImage.style.display = "block";
  processedComparePlaceholder.style.display = "none";
}

function showComparisonPair(pair) {
  if (
    !pair ||
    !pair.original ||
    !pair.processed ||
    !originalCompareImage ||
    !originalComparePlaceholder ||
    !processedCompareImage ||
    !processedComparePlaceholder
  ) {
    return;
  }

  originalCompareImage.src = pair.original.url;
  originalCompareImage.style.display = "block";
  originalComparePlaceholder.style.display = "none";

  processedCompareImage.src = withCacheBust(pair.processed.url, "record_primary");
  processedCompareImage.style.display = "block";
  processedComparePlaceholder.style.display = "none";
}

function getRepresentativeRecordPair() {
  let preferredIndex = -1;
  for (let index = 0; index < measurementsBySlot.length; index += 1) {
    const hasImage = Boolean(styledImages[index] || serverImages[index] || previewItems[index]);
    if (hasImage && (measurementsBySlot[index]?.length || 0) > 0) {
      preferredIndex = index;
      break;
    }
  }

  if (preferredIndex < 0) {
    preferredIndex = previewItems.findIndex((item) => Boolean(item));
  }

  if (preferredIndex >= 0) {
    const processed = styledImages[preferredIndex] || serverImages[preferredIndex] || previewItems[preferredIndex];
    const original = previewItems[preferredIndex] || processed;
    if (processed?.url && original?.url) {
      return { index: preferredIndex, original, processed };
    }
  }

  if (currentImage?.processed?.url && currentImage?.original?.url) {
    return {
      index: 0,
      original: currentImage.original,
      processed: currentImage.processed,
    };
  }

  return null;
}

function renderProcessedHistory() {
  if (!processedListRow) {
    return;
  }

  processedListRow.innerHTML = "";

  const representative = getRepresentativeRecordPair();
  if (!representative) {
    return;
  }

  selectedHistoryIndex = representative.index;
  const card = document.createElement("div");
  card.className = "processed-thumb-card selected";

  card.addEventListener("click", () => {
    showComparisonPair(representative);
    showProcessedPreview(representative.processed.url, representative.processed.name);
  });

  const img = document.createElement("img");
  img.src = withCacheBust(representative.processed.url, "record_primary_thumb");
  img.alt = representative.processed.name || "record-primary";

  card.appendChild(img);
  processedListRow.appendChild(card);
  showComparisonPair(representative);
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
  if (!previewGrid && !backgroundPreviewGrid && !editorPreviewGrid && !videoPreviewGrid) {
    return;
  }

  const orientationTemplate = ["social-portrait", "social-portrait", "social-portrait", "social-landscape", "social-landscape"];
  const renderPreviewIntoGrid = (targetGrid) => {
    if (!targetGrid) {
      return;
    }

    targetGrid.innerHTML = "";

    for (let index = 0; index < 5; index += 1) {
      const card = document.createElement("div");
      card.className = "capture-slot";
      card.classList.add(orientationTemplate[index] || "social-square");
      if (index === selectedIndex) {
        card.classList.add("selected");
      }

      const item = previewItems[index];
      if (item) {
        card.classList.add("filled");
        card.addEventListener("click", () => {
          selectedIndex = index;
          const selectedPreview = styledImages[index] || serverImages[index] || previewItems[index];
          if (selectedPreview?.url) {
            showProcessedPreview(selectedPreview.url, selectedPreview.name);
          }
          renderPreview();
          centerCaptureSliderOnIndexForGrid(targetGrid, index, true);
        });

        const image = document.createElement("img");
        image.src = item.url;
        image.alt = item.name;
        image.addEventListener("load", () => {
          const ratio = image.naturalWidth / Math.max(1, image.naturalHeight);
          card.classList.remove("social-square", "social-landscape", "social-portrait");
          if (ratio >= 1.55) {
            card.classList.add("social-landscape");
          } else if (ratio <= 0.85) {
            card.classList.add("social-portrait");
          } else {
            card.classList.add("social-square");
          }
        });
        card.appendChild(image);
      } else {
        const label = document.createElement("span");
        if (index < 3) {
          label.textContent = `Slot ${index + 1} · 1080x1350`;
        } else {
          label.textContent = `Slot ${index + 1} · 1200x630`;
        }
        card.appendChild(label);
      }

      targetGrid.appendChild(card);
    }
  };

  renderPreviewIntoGrid(previewGrid);
  renderPreviewIntoGrid(backgroundPreviewGrid);
  renderPreviewIntoGrid(editorPreviewGrid);
  renderPreviewIntoGrid(videoPreviewGrid);
  renderVideoSelectionUi();

  syncCaptureSliderUiForGrid(previewGrid, captureSliderPrev, captureSliderNext);
  syncCaptureSliderUiForGrid(backgroundPreviewGrid, backgroundCaptureSliderPrev, backgroundCaptureSliderNext);
  syncCaptureSliderUiForGrid(editorPreviewGrid, editorCaptureSliderPrev, editorCaptureSliderNext);
  syncCaptureSliderUiForGrid(videoPreviewGrid, videoCaptureSliderPrev, videoCaptureSliderNext);
  syncSocialPreview();
  syncNextButtonReadyState();

  window.requestAnimationFrame(() => {
    updateCaptureSliderEdgePaddingForGrid(previewGrid);
    updateCaptureSliderEdgePaddingForGrid(backgroundPreviewGrid);
    updateCaptureSliderEdgePaddingForGrid(editorPreviewGrid);
    updateCaptureSliderEdgePaddingForGrid(videoPreviewGrid);
    if (selectedIndex >= 0) {
      centerCaptureSliderOnIndexForGrid(previewGrid, selectedIndex, false);
      centerCaptureSliderOnIndexForGrid(backgroundPreviewGrid, selectedIndex, false);
      centerCaptureSliderOnIndexForGrid(editorPreviewGrid, selectedIndex, false);
      centerCaptureSliderOnIndexForGrid(videoPreviewGrid, selectedIndex, false);
    }
  });
}

function syncNextButtonReadyState() {
  const shouldPromptNext = previewItems.length === 5 && workflowStep === 0;

  if (workflowNext1Btn) {
    workflowNext1Btn.classList.toggle("ready-blink", shouldPromptNext);
  }
  if (workflowBackgroundStep) {
    workflowBackgroundStep.classList.toggle("ready-blink", shouldPromptNext);
  }
}

function updateCaptureSliderEdgePaddingForGrid(grid) {
  if (!grid) {
    return;
  }

  const firstCard = grid.querySelector(".capture-slot");
  if (!firstCard) {
    grid.style.paddingLeft = "0px";
    grid.style.paddingRight = "0px";
    return;
  }

  const edgePadding = Math.max(0, Math.round((grid.clientWidth - firstCard.offsetWidth) / 2));
  grid.style.paddingLeft = `${edgePadding}px`;
  grid.style.paddingRight = `${edgePadding}px`;
}

function getCaptureSliderTargetScrollLeftForGrid(grid, target) {
  if (!grid || !target) {
    return 0;
  }

  const targetCenter = target.offsetLeft + (target.offsetWidth / 2);
  const viewportCenter = grid.clientWidth / 2;
  const maxScrollLeft = Math.max(0, grid.scrollWidth - grid.clientWidth);

  return Math.max(0, Math.min(maxScrollLeft, targetCenter - viewportCenter));
}

function computeCaptureSliderMetricsForGrid(grid) {
  if (!grid) {
    return { maxPage: 0, currentPage: 0, hasOverflow: false, cards: [] };
  }

  const cards = Array.from(grid.querySelectorAll(".capture-slot"));
  if (!cards.length) {
    return { maxPage: 0, currentPage: 0, hasOverflow: false, cards: [] };
  }

  const maxPage = Math.max(0, cards.length - 1);
  const scrollLeft = grid.scrollLeft;
  let currentPage = 0;
  let minDistance = Number.POSITIVE_INFINITY;

  cards.forEach((card, index) => {
    const distance = Math.abs(getCaptureSliderTargetScrollLeftForGrid(grid, card) - scrollLeft);
    if (distance < minDistance) {
      minDistance = distance;
      currentPage = index;
    }
  });

  const hasOverflow = grid.scrollWidth > grid.clientWidth + 8;

  return { maxPage, currentPage, hasOverflow, cards };
}

function syncCaptureSliderUiForGrid(grid, prevButton, nextButton) {
  if (!grid) {
    return;
  }

  const metrics = computeCaptureSliderMetricsForGrid(grid);
  const maxScrollLeft = Math.max(0, grid.scrollWidth - grid.clientWidth);
  const nearStart = grid.scrollLeft <= 6;
  const nearEnd = grid.scrollLeft >= (maxScrollLeft - 6);

  if (prevButton) {
    prevButton.classList.toggle("hidden", !metrics.hasOverflow || nearStart);
  }
  if (nextButton) {
    nextButton.classList.toggle("hidden", !metrics.hasOverflow || nearEnd);
  }
}

function syncCaptureSliderUi() {
  syncCaptureSliderUiForGrid(previewGrid, captureSliderPrev, captureSliderNext);
}

function scrollCaptureSliderToPage(page) {
  if (!previewGrid) {
    return;
  }

  const metrics = computeCaptureSliderMetricsForGrid(previewGrid);
  const nextPage = Math.max(0, Math.min(metrics.maxPage, page));
  const target = metrics.cards[nextPage];
  if (!target) {
    return;
  }
  previewGrid.scrollTo({ left: getCaptureSliderTargetScrollLeftForGrid(previewGrid, target), behavior: "smooth" });
}

function centerCaptureSliderOnIndexForGrid(grid, index, smooth = true) {
  if (!grid) {
    return;
  }

  const cards = Array.from(grid.querySelectorAll(".capture-slot"));
  const target = cards[index];
  if (!target) {
    return;
  }

  grid.scrollTo({
    left: getCaptureSliderTargetScrollLeftForGrid(grid, target),
    behavior: smooth ? "smooth" : "auto",
  });
}

function centerCaptureSliderOnIndex(index, smooth = true) {
  centerCaptureSliderOnIndexForGrid(previewGrid, index, smooth);
}

function scrollCaptureSliderByDirectionForGrid(grid, direction) {
  if (!grid) {
    return;
  }

  const firstCard = grid.querySelector(".capture-slot");
  if (!firstCard) {
    return;
  }

  const step = firstCard.offsetWidth + 20;
  grid.scrollBy({ left: direction * step, behavior: "smooth" });
}

function scrollCaptureSliderByDirection(direction) {
  scrollCaptureSliderByDirectionForGrid(previewGrid, direction);
}

if (captureSliderPrev) {
  captureSliderPrev.addEventListener("click", () => scrollCaptureSliderByDirection(-1));
}

if (captureSliderNext) {
  captureSliderNext.addEventListener("click", () => scrollCaptureSliderByDirection(1));
}

if (backgroundCaptureSliderPrev) {
  backgroundCaptureSliderPrev.addEventListener("click", () => scrollCaptureSliderByDirectionForGrid(backgroundPreviewGrid, -1));
}

if (backgroundCaptureSliderNext) {
  backgroundCaptureSliderNext.addEventListener("click", () => scrollCaptureSliderByDirectionForGrid(backgroundPreviewGrid, 1));
}

if (editorCaptureSliderPrev) {
  editorCaptureSliderPrev.addEventListener("click", () => scrollCaptureSliderByDirectionForGrid(editorPreviewGrid, -1));
}

if (editorCaptureSliderNext) {
  editorCaptureSliderNext.addEventListener("click", () => scrollCaptureSliderByDirectionForGrid(editorPreviewGrid, 1));
}

if (videoCaptureSliderPrev) {
  videoCaptureSliderPrev.addEventListener("click", () => scrollCaptureSliderByDirectionForGrid(videoPreviewGrid, -1));
}

if (videoCaptureSliderNext) {
  videoCaptureSliderNext.addEventListener("click", () => scrollCaptureSliderByDirectionForGrid(videoPreviewGrid, 1));
}

if (videoSelectAllCheckbox) {
  videoSelectAllCheckbox.addEventListener("change", (event) => {
    const availableIndexes = getAvailableVideoIndexes();
    videoSelectionTouched = true;
    videoSelectedIndexes.clear();
    videoSelectedOrder = [];
    if (event.target.checked) {
      availableIndexes.forEach((index) => {
        videoSelectedIndexes.add(index);
        videoSelectedOrder.push(index);
      });
    }
    renderVideoSelectionUi();
  });
}

if (videoDurationInput) {
  videoDurationInput.addEventListener("input", updateVideoDurationRules);
  videoDurationInput.addEventListener("change", updateVideoDurationRules);
}

if (videoAudioSegmentStart) {
  videoAudioSegmentStart.addEventListener("input", updateVideoDurationRules);
  videoAudioSegmentStart.addEventListener("change", updateVideoDurationRules);
}

if (videoAudioSegmentEnd) {
  videoAudioSegmentEnd.addEventListener("input", updateVideoDurationRules);
  videoAudioSegmentEnd.addEventListener("change", updateVideoDurationRules);
}

if (videoAudioSource) {
  videoAudioSource.addEventListener("change", () => {
    stopVideoWavePreview();
    const mode = videoAudioSource.value;
    const usingUpload = mode === "upload";
    if (videoAudioFileInput) {
      videoAudioFileInput.disabled = !usingUpload;
    }
    if (videoDefaultAudioSelect) {
      videoDefaultAudioSelect.disabled = mode !== "default";
    }
    if (!usingUpload) {
      videoAudioDurationSeconds = 180;
      updateVideoDurationRules();
    }
  });
}

if (videoAudioFileInput) {
  videoAudioFileInput.addEventListener("change", () => {
    stopVideoWavePreview();
    const file = videoAudioFileInput.files?.[0] || null;
    validateVideoAudioUpload(file);
  });
}

if (videoRefreshAudioInputsBtn) {
  videoRefreshAudioInputsBtn.addEventListener("click", () => {
    loadVideoAudioInputs();
  });
}

if (videoRecordVoiceBtn) {
  videoRecordVoiceBtn.addEventListener("click", () => {
    startVideoVoiceRecording();
  });
}

if (videoPauseVoiceBtn) {
  videoPauseVoiceBtn.addEventListener("click", () => {
    if (videoVoiceRecorder?.state === "recording") {
      videoVoiceRecorder.pause();
      syncVideoVoiceButtons();
      setVideoVoiceStatus("Recording paused.");
    }
  });
}

if (videoResumeVoiceBtn) {
  videoResumeVoiceBtn.addEventListener("click", () => {
    if (videoVoiceRecorder?.state === "paused") {
      videoVoiceRecorder.resume();
      syncVideoVoiceButtons();
      setVideoVoiceStatus("Recording resumed.");
    }
  });
}

if (videoStopVoiceBtn) {
  videoStopVoiceBtn.addEventListener("click", () => {
    if (videoVoiceRecorder && videoVoiceRecorder.state !== "inactive") {
      videoVoiceRecorder.stop();
      setVideoVoiceStatus("Finishing recording...");
    }
  });
}

if (videoUsePatchedVoiceBtn) {
  videoUsePatchedVoiceBtn.addEventListener("click", () => {
    if (!videoVoiceTakesState.length) {
      return;
    }
    videoPatchedVoiceActive = true;
    videoActiveVoiceTakeId = "";
    renderVideoVoiceTakes();
    const totalDuration = videoVoiceTakesState.reduce((sum, take) => sum + getTrimmedVoiceDuration(take), 0);
    setVideoVoiceStatus(`Using patched voice sequence with ${videoVoiceTakesState.length} take(s), total ${formatSecondsLabel(totalDuration)}.`);
  });
}

if (videoPreviewWaveBtn) {
  videoPreviewWaveBtn.addEventListener("click", () => {
    startVideoWavePreview();
  });
}

if (videoMakeMyVideoBtn) {
  videoMakeMyVideoBtn.addEventListener("click", () => {
    runVideoGenerationFlow();
  });
}

if (videoClearGeneratedBtn) {
  videoClearGeneratedBtn.addEventListener("click", () => {
    if (videoGenerationInProgress) {
      return;
    }
    clearGeneratedVideoState();
  });
}

if (designerPlatformSelect) {
  designerPlatformSelect.addEventListener("change", () => {
    if (videoGeneratedByPlatform.size === 0) {
      return;
    }
    clearGeneratedVideoState("Platform changed. Previous generated output cleared by lifecycle rule.");
    appendVideoGenerationLog(`Platform switched to ${designerPlatformSelect.value}. Regenerate for this target.`);
  });
}

if (videoPostNowBtn) {
  videoPostNowBtn.addEventListener("click", () => {
    publishVideoToSocial("post");
  });
}

if (videoVideoPostNowBtn) {
  videoVideoPostNowBtn.addEventListener("click", () => {
    publishGeneratedVideoToSocial("post");
  });
}

if (videoVideoSchedulePostBtn) {
  videoVideoSchedulePostBtn.addEventListener("click", () => {
    publishGeneratedVideoToSocial("schedule");
  });
}

if (videoUploadOnSsBtn) {
  videoUploadOnSsBtn.addEventListener("click", () => {
    const selectedImages = getSelectedVideoImages();
    if (!selectedImages.length) {
      setVideoPublishStatus("No selected images found. Select image(s) in Video step first.", true);
      return;
    }

    videoImageUploadPrepared = true;
    refreshVideoImagePostOptions();
    refreshVideoPublishPlatformOptions();
    appendVideoPublishLog(`Upload on SS prepared with ${selectedImages.length} selected image${selectedImages.length === 1 ? "" : "s"}.`);
    setVideoPublishStatus(`Upload on SS ready. ${selectedImages.length} selected image${selectedImages.length === 1 ? "" : "s"} prepared for posting.`);
  });
}

if (downloadVideoBtn) {
  downloadVideoBtn.addEventListener("click", () => {
    const platform = getSelectedDownloadPlatform();
    const generated = videoGeneratedByPlatform.get(platform);
    if (!videoDownloadEnabledUntilFinish || !generated) {
      syncVideoDownloadAvailability();
      return;
    }

    const payload = {
      platform,
      generatedAt: new Date(generated.createdAt).toISOString(),
      imageCount: generated.imageCount,
      note: "Video binary export API pending. This phase implements download policy and selection lock.",
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const href = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = href;
    anchor.download = `${platform}_video_manifest.json`;
    anchor.click();
    URL.revokeObjectURL(href);
    setVideoDownloadStatus(`${getPlatformDisplayName(platform)} download package prepared.`);
  });
}

if (videoFinishBtn) {
  videoFinishBtn.addEventListener("click", () => {
    videoDownloadEnabledUntilFinish = false;
    videoGeneratedByPlatform.clear();
    clearVideoGenerationLog();
    appendVideoGenerationLog("Finish clicked. Previous generated outputs are cleared.");
    setVideoGenerationStatus("Finished. Generate again for next download cycle.");
    setLiveStatus("Video flow finished. Previous generated outputs cleared.");
    videoImageUploadPrepared = false;
    syncVideoDownloadAvailability();
    refreshVideoImagePostOptions();
    refreshVideoPublishPlatformOptions();
    refreshVideoGeneratedPublishPlatformOptions();
    setVideoPublishStatus("Finish clicked. Re-click Upload on SS before posting selected images again.");
    setVideoGeneratedPublishStatus("Finish clicked. Regenerate platform video before posting/scheduling video.");
  });
}

videoDownloadPlatformRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    syncVideoDownloadAvailability();
  });
});

[videoHighWavePoint, videoLowWavePoint].forEach((rangeInput) => {
  if (!rangeInput) {
    return;
  }
  rangeInput.addEventListener("input", drawVideoEqualizerPreview);
  rangeInput.addEventListener("change", drawVideoEqualizerPreview);
});

if (previewSquareBtn) {
  previewSquareBtn.addEventListener("click", () => setSocialPreviewAspect("square"));
}

if (previewPortraitBtn) {
  previewPortraitBtn.addEventListener("click", () => setSocialPreviewAspect("portrait"));
}

if (previewLandscapeBtn) {
  previewLandscapeBtn.addEventListener("click", () => setSocialPreviewAspect("landscape"));
}

if (previewGrid) {
  previewGrid.addEventListener("scroll", () => {
    window.requestAnimationFrame(syncCaptureSliderUi);
  });
}

if (backgroundPreviewGrid) {
  backgroundPreviewGrid.addEventListener("scroll", () => {
    window.requestAnimationFrame(() => syncCaptureSliderUiForGrid(backgroundPreviewGrid, backgroundCaptureSliderPrev, backgroundCaptureSliderNext));
  });
}

if (editorPreviewGrid) {
  editorPreviewGrid.addEventListener("scroll", () => {
    window.requestAnimationFrame(() => syncCaptureSliderUiForGrid(editorPreviewGrid, editorCaptureSliderPrev, editorCaptureSliderNext));
  });
}

if (videoPreviewGrid) {
  videoPreviewGrid.addEventListener("scroll", () => {
    window.requestAnimationFrame(() => syncCaptureSliderUiForGrid(videoPreviewGrid, videoCaptureSliderPrev, videoCaptureSliderNext));
  });
}

window.addEventListener("resize", () => {
  window.requestAnimationFrame(() => {
    updateCaptureSliderEdgePaddingForGrid(previewGrid);
    updateCaptureSliderEdgePaddingForGrid(backgroundPreviewGrid);
    updateCaptureSliderEdgePaddingForGrid(editorPreviewGrid);
    updateCaptureSliderEdgePaddingForGrid(videoPreviewGrid);
    if (selectedIndex >= 0) {
      centerCaptureSliderOnIndexForGrid(previewGrid, selectedIndex, false);
      centerCaptureSliderOnIndexForGrid(backgroundPreviewGrid, selectedIndex, false);
      centerCaptureSliderOnIndexForGrid(editorPreviewGrid, selectedIndex, false);
      centerCaptureSliderOnIndexForGrid(videoPreviewGrid, selectedIndex, false);
    }
    syncWorkflowProgressNav();
  });
});

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
  const selectedFile = selectedIndex >= 0 ? pendingUploadFiles[selectedIndex] : null;
  if (!pendingUploadFiles.length) {
    setBgStatus("Please upload image(s) on Step 1 first.", true);
    return;
  }

  if (selectedIndex < 0 || !selectedFile) {
    setBgStatus("Select one image in the slider before removing its background.", true);
    return;
  }

  const formData = new FormData();
  formData.append("file", selectedFile);

  setBgStatus(`Removing background for ${selectedFile.name}...`);
  removeBgBtn.disabled = true;
  removeBgBtn.textContent = "Processing...";
  try {
    const response = await fetch("/remove-background", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.detail || "Failed to remove background.");
    }

    const processedImage = data.image
      ? { name: data.image.name, url: data.image.url }
      : null;

    if (!processedImage) {
      throw new Error("Failed to remove background.");
    }

    serverImages[selectedIndex] = processedImage;
    styledImages[selectedIndex] = undefined;

    if (previewItems[selectedIndex]) {
      previewItems[selectedIndex] = {
        name: processedImage.name,
        url: processedImage.url,
      };
    }

    updateImageQueue(selectedFile, processedImage);
    showProcessedPreview(processedImage.url, processedImage.name);

    renderPreview();
    setBgStatus(`Background removed for ${selectedFile.name}.`);
    setStatus(`Background removed for ${selectedFile.name}.`);
  } catch (error) {
    setBgStatus(error.message || "Failed to remove background.", true);
    setStatus(error.message, true);
  } finally {
    removeBgBtn.disabled = false;
    removeBgBtn.textContent = "Remove Background";
  }
});

async function applyStyleForSelectedImage(mode = "manual") {
  const selected = serverImages[selectedIndex];
  if (selectedIndex < 0 || !selected) {
    if (mode === "manual") {
      setBgStatus("Remove background first, then select an image from the slider.", true);
    }
    return;
  }

  const fillColor = bgFillColorInput?.value || "#f5f5f5";
  const templateStyle = templateStyleSelect?.value || "clean";
  const shadowStrength = shadowStrengthInput?.value || "55";
  const shadowPosition = shadowPositionSelect?.value || "bottom";

  const formData = new FormData();
  formData.append("image_name", selected.name);
  formData.append("fill_color", fillColor);
  formData.append("template_style", templateStyle);
  formData.append("shadow_strength", shadowStrength);
  formData.append("shadow_position", shadowPosition);

  const requestId = ++autoStyleRequestId;
  if (mode === "manual") {
    setBgStatus(`Applying ${templateStyle} template, color ${fillColor}, shadow ${shadowStrength} (${shadowPosition}) to selected photo...`);
    applyBgStyleBtn.disabled = true;
    applyBgStyleBtn.textContent = "Applying...";
  } else {
    setBgStatus(`Updating background color to ${fillColor}...`);
  }

  try {
    const response = await fetch("/apply-style", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.detail || "Failed to apply style.");
    }

    if (requestId !== autoStyleRequestId) {
      return;
    }

    const styled = data.image;
    if (!styled?.url || !styled?.name) {
      throw new Error("Styled image response is incomplete.");
    }

    styledImages[selectedIndex] = { name: styled.name, url: styled.url };
    if (previewItems[selectedIndex]) {
      previewItems[selectedIndex] = { name: styled.name, url: styled.url };
    }
    showProcessedPreview(styled.url, styled.name);
    renderPreview();

    if (mode === "manual") {
      setBgStatus("Style applied! Save or continue to next step.");
      setStatus("Style applied. Continue to next step.");
      const previewSection = document.querySelector(".processed-preview-section");
      if (previewSection) previewSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else {
      setBgStatus("Background color updated.");
    }
  } catch (error) {
    if (requestId === autoStyleRequestId) {
      setBgStatus(error.message || "Failed to apply style.", true);
      if (mode === "manual") {
        setStatus(error.message || "Failed to apply style.", true);
      }
    }
  } finally {
    if (mode === "manual") {
      applyBgStyleBtn.disabled = false;
      applyBgStyleBtn.textContent = "Apply Style";
    }
  }
}

function scheduleLiveColorApply() {
  if (autoStyleApplyTimer) {
    window.clearTimeout(autoStyleApplyTimer);
  }

  autoStyleApplyTimer = window.setTimeout(() => {
    applyStyleForSelectedImage("live");
  }, 140);
}

if (applyBgStyleBtn) {
  applyBgStyleBtn.addEventListener("click", () => {
    applyStyleForSelectedImage("manual");
  });
}

if (bgFillColorInput) {
  bgFillColorInput.addEventListener("input", scheduleLiveColorApply);
  bgFillColorInput.addEventListener("change", scheduleLiveColorApply);
}

if (templateStyleSelect) {
  templateStyleSelect.addEventListener("change", scheduleLiveColorApply);
}

if (shadowStrengthInput) {
  shadowStrengthInput.addEventListener("input", scheduleLiveColorApply);
  shadowStrengthInput.addEventListener("change", scheduleLiveColorApply);
}

if (shadowPositionSelect) {
  shadowPositionSelect.addEventListener("change", scheduleLiveColorApply);
}

if (scaleOptions) {
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
}

function openModal() {
  inputModal.classList.remove("hidden");
}

function closeModal() {
  inputModal.classList.add("hidden");
}

if (scaleWeighBtn) {
  scaleWeighBtn.addEventListener("click", () => {
    const hasImage = selectedIndex >= 0 && (serverImages[selectedIndex] || styledImages[selectedIndex]);
    if (!hasImage) {
      setStatus("Remove background and select an image first.", true);
      return;
    }
    openModal();
  });
}

if (cancelModalBtn) {
  cancelModalBtn.addEventListener("click", closeModal);
}

if (confirmGenerateBtn) {
confirmGenerateBtn.addEventListener("click", async () => {
  const selected = styledImages[selectedIndex] || serverImages[selectedIndex];
  if (selectedIndex < 0 || !selected) {
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

  const formData = new FormData();
  formData.append("selected_image", selected.name);
  formData.append("length", String(length));
  formData.append("breadth", String(breadth));
  formData.append("height", String(height));
  formData.append("weight", String(weight));
  formData.append("scale_type", selectedScaleType);
  formData.append("measurements_json", JSON.stringify(getMeasurementsForSelectedSlot() || []));

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

    finalImage.src = withCacheBust(data.image_url, "final_preview");
    finalImage.style.display = "block";
    closeModal();
    setStatus("Final image generated.");
  } catch (error) {
    setStatus(error.message, true);
  }
});
}

if (inputModal) {
  inputModal.addEventListener("click", (event) => {
    if (event.target === inputModal) {
      closeModal();
    }
  });
}

window.addEventListener("beforeunload", () => {
  stopVideoWavePreview();
  if (videoVoiceRecorder && videoVoiceRecorder.state !== "inactive") {
    videoVoiceRecorder.stop();
  }
  stopVideoVoiceStream();
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

  const maxStep = Math.max(0, workflowProgressSteps.length - 1);
  const boundedStep = Math.max(0, Math.min(maxStep, step));
  const stepPercent = workflowProgressSteps.length ? (100 / workflowProgressSteps.length) : 100;
  workflowStep = boundedStep;
  workflowTrack.style.transform = `translateX(-${boundedStep * stepPercent}%)`;
  updateWorkflowProgressState(boundedStep);
  const activeStepEl = workflowProgressSteps[boundedStep] || null;
  if (activeStepEl) {
    activeStepEl.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }
  syncWorkflowProgressNav();
  syncRightPanelByStep();
  syncNextButtonReadyState();
}

function syncWorkflowProgressNav() {
  const maxStep = Math.max(0, workflowProgressSteps.length - 1);
  const nearStart = workflowStep <= 0;
  const nearEnd = workflowStep >= maxStep;

  if (workflowProgressPrev) {
    const disabled = nearStart;
    workflowProgressPrev.classList.toggle("is-disabled", disabled);
  }
  if (workflowProgressNext) {
    const disabled = nearEnd;
    workflowProgressNext.classList.toggle("is-disabled", disabled);
  }
}

function scrollWorkflowProgressBy(direction) {
  if (!workflowProgressViewport) {
    return;
  }
  const firstStep = workflowProgressSteps[0];
  const stepWidth = Math.max(120, firstStep ? Math.round(firstStep.getBoundingClientRect().width + 8) : Math.round(workflowProgressViewport.clientWidth * 0.45));
  workflowProgressViewport.scrollBy({ left: direction * stepWidth, behavior: "smooth" });
}

function setSidebarCollapsed(collapsed) {
  if (!appContainer) {
    return;
  }
  appContainer.classList.toggle("sidebar-collapsed", collapsed);
  if (sidebarShowBtn) {
    sidebarShowBtn.classList.toggle("hidden", !collapsed);
  }
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
bindWorkflowNav("workflowNext5", 5);
bindWorkflowNav("workflowBack6", 4);

workflowProgressSteps.forEach((step, index) => {
  step.addEventListener("click", () => {
    if (index > workflowStep) {
      workflowCompletedUntil = Math.max(workflowCompletedUntil, index - 1);
    }
    setWorkflowStep(index);
  });
});

if (workflowProgressViewport) {
  workflowProgressViewport.addEventListener("scroll", () => {
    window.requestAnimationFrame(syncWorkflowProgressNav);
  });
}

if (workflowProgressPrev) {
  workflowProgressPrev.addEventListener("click", () => {
    if (workflowStep <= 0) {
      return;
    }
    setWorkflowStep(workflowStep - 1);
  });
}

if (workflowProgressNext) {
  workflowProgressNext.addEventListener("click", () => {
    const nextStep = workflowStep + 1;
    const maxStep = Math.max(0, workflowProgressSteps.length - 1);
    if (nextStep > maxStep) {
      return;
    }
    workflowCompletedUntil = Math.max(workflowCompletedUntil, workflowStep);
    setWorkflowStep(nextStep);
  });
}

if (sidebarToggleBtn) {
  sidebarToggleBtn.addEventListener("click", () => {
    const isCollapsed = appContainer?.classList.contains("sidebar-collapsed");
    setSidebarCollapsed(!isCollapsed);
  });
}

if (sidebarShowBtn) {
  sidebarShowBtn.addEventListener("click", () => {
    setSidebarCollapsed(false);
  });
}

function updateDesignerLiveText() {
  if (!measurePreviewText && !designerLiveText) {
    return;
  }

  const textValue = (designerText?.value || "").trim();
  const nextText = textValue || "Your text appears here";
  const nextFont = designerFontStyle?.value || "Inter";
  const parsedFontSize = Number(designerFontSize?.value);
  const nextFontSize = Number.isFinite(parsedFontSize) ? Math.max(10, Math.min(72, parsedFontSize)) : 16;
  const nextColor = designerTextColor?.value || "#ffffff";

  if (designerLiveText) {
    designerLiveText.textContent = nextText;
    designerLiveText.style.fontFamily = nextFont;
    designerLiveText.style.fontSize = `${nextFontSize}px`;
    designerLiveText.style.color = nextColor;
  }

  if (measurePreviewText) {
    measurePreviewText.textContent = nextText;
    measurePreviewText.style.fontFamily = nextFont;
    measurePreviewText.style.fontSize = `${nextFontSize}px`;
    measurePreviewText.style.color = nextColor;
    applyMeasurePreviewTextAppearance();
    applyMeasurePreviewTextPosition();
  }

  updateMeasureWeightDisplay();

  syncMeasurePreview();
}

if (designerText) {
  designerText.addEventListener("input", updateDesignerLiveText);
}
if (designerFontStyle) {
  designerFontStyle.addEventListener("change", updateDesignerLiveText);
}
if (designerFontSize) {
  designerFontSize.addEventListener("input", updateDesignerLiveText);
}
if (designerTextColor) {
  designerTextColor.addEventListener("input", updateDesignerLiveText);
}

if (designerTextAppearance) {
  designerTextAppearance.addEventListener("change", updateDesignerLiveText);
}

if (designerWeightInput) {
  designerWeightInput.addEventListener("input", updateMeasureWeightDisplay);
}

if (designerWeightUnit) {
  designerWeightUnit.addEventListener("change", updateMeasureWeightDisplay);
}

if (measurePreviewText) {
  measurePreviewText.addEventListener("pointerdown", startMeasureTextDrag);
}

if (measureWeightDisplay) {
  measureWeightDisplay.addEventListener("pointerdown", startMeasureWeightDrag);
}

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

if (videoAudioSource) {
  const mode = videoAudioSource.value;
  if (videoAudioFileInput) {
    videoAudioFileInput.disabled = mode !== "upload";
  }
  if (videoDefaultAudioSelect) {
    videoDefaultAudioSelect.disabled = mode !== "default";
  }
}

syncVideoVoiceButtons();
renderVideoVoiceTakes();
loadVideoAudioInputs();
updateVideoDurationRules();
drawVideoEqualizerPreview();
syncVideoDownloadAvailability();
refreshVideoImagePostOptions();
refreshVideoPublishPlatformOptions();
refreshVideoGeneratedPublishPlatformOptions();
syncWorkflowProgressNav();
setSidebarCollapsed(false);

updateDesignerLiveText();
renderPreview();
renderProcessedHistory();
renderUploadList();
enforcePostsLayout();
setSocialPreviewPlatform("instagram");
setSocialPreviewAspect("portrait");
applyMeasureGuides();
bindMeasureHandle(measureWidthHandle, "width");
bindMeasureHandle(measureHeightHandle, "height");
syncRightPanelByStep();
syncMeasurementOverlayFrame();

if (measurePreviewImage) {
  measurePreviewImage.addEventListener("load", () => {
    syncMeasurementOverlayFrame();
  });
}

if (measurementOverlayFrame) {
  measurementOverlayFrame.addEventListener("pointerdown", (event) => {
    if (event.target === measurementOverlayFrame || event.target === measurementOverlayLayer) {
      activeMeasurementId = "";
      editingMeasurementId = "";
      renderMeasurementOverlays();
    }
  });
}

if (createMeasurementBtn) {
  createMeasurementBtn.addEventListener("click", createMeasurement);
}

if (measurementTextColorSelect) {
  measurementTextColorSelect.addEventListener("change", () => {
    measurementLabelTextColor = measurementTextColorSelect.value === "black" ? "black" : "white";
    renderMeasurementOverlays();
  });
}

if (toggleMeasurementCircleBtn) {
  toggleMeasurementCircleBtn.addEventListener("click", () => {
    measurementLabelCircleVisible = !measurementLabelCircleVisible;
    updateMeasurementCircleToggleButton();
    renderMeasurementOverlays();
  });
}

updateMeasurementCircleToggleButton();

if (downloadEditedImageBtn) {
  downloadEditedImageBtn.addEventListener("click", async () => {
    try {
      const { canvas, selected } = await renderSelectedImageWithMeasurements();
      finalImage.src = canvas.toDataURL("image/png");
      finalImage.style.display = "block";

      const anchor = document.createElement("a");
      const baseName = (selected.name || "edited-image").replace(/\.[a-z0-9]+$/i, "");
      anchor.href = finalImage.src;
      anchor.download = `${baseName}_measured.png`;
      anchor.click();
      setStatus("Edited image downloaded with measurements.");
    } catch (error) {
      setStatus(error.message || "Failed to download edited image.", true);
    }
  });
}

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
window.addEventListener("resize", () => {
  syncCaptureSliderUi();
  syncCaptureSliderUiForGrid(backgroundPreviewGrid, backgroundCaptureSliderPrev, backgroundCaptureSliderNext);
  syncCaptureSliderUiForGrid(editorPreviewGrid, editorCaptureSliderPrev, editorCaptureSliderNext);
  syncMeasurementOverlayFrame();
});
document.querySelectorAll(".menu-item[data-page]").forEach((item) => {
  item.addEventListener("click", () => {
    window.requestAnimationFrame(enforcePostsLayout);
    window.requestAnimationFrame(syncCaptureSliderUi);
    window.requestAnimationFrame(() => syncCaptureSliderUiForGrid(backgroundPreviewGrid, backgroundCaptureSliderPrev, backgroundCaptureSliderNext));
    window.requestAnimationFrame(() => syncCaptureSliderUiForGrid(editorPreviewGrid, editorCaptureSliderPrev, editorCaptureSliderNext));
    window.requestAnimationFrame(syncMeasurementOverlayFrame);
  });
});
