"use strict";
const Upload = {
  // upload组件
  upload: {
    accept: "image",
    extension: [],
    capture: ["album", "camera"],
    compressed: true,
    camera: "back",
    maxDuration: 60,
    uploadIcon: "camera-fill",
    uploadIconColor: "#D3D4D6",
    useBeforeRead: false,
    previewFullImage: true,
    maxCount: 52,
    disabled: false,
    imageMode: "aspectFill",
    name: "",
    sizeType: ["original", "compressed"],
    multiple: false,
    deletable: true,
    maxSize: Number.MAX_VALUE,
    fileList: [],
    uploadText: "",
    width: 80,
    height: 80,
    previewImage: true
  }
};
exports.Upload = Upload;
