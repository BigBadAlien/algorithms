/** @module Image */

var OnlyIntegerAvailableError = new Error('Only integer available');
module.exports.OnlyIntegerAvailableError = OnlyIntegerAvailableError;

var ThumbnailSizeMoreThanSourceImage = new Error('Thumbnail size more than source image');
module.exports.ThumbnailSizeMoreThanSourceImage = ThumbnailSizeMoreThanSourceImage;

/**
 * Get required crop for further resize.
 * Example of results usage with GD:
 * imageSrc.gravity('Center')
 * .crop(cropWidth, cropHeight)
 * .resize(thumbWidth, thumbHeight)
 * @param {!number} thumbWidth Desired width of thumbnail.
 * @param {!number} thumbHeight Desired height of thumbnail.
 * @param {!number} imgWidth Width of source image.
 * @param {!number} imgHeight Height of source image.
 * @returns {{cropWidth: number, cropHeight: number}}
 */
function getThumbnailCropSize(imgWidth, imgHeight, thumbWidth, thumbHeight) {
  if (!Number.isInteger(thumbWidth) || !Number.isInteger(thumbHeight) || !Number.isInteger(imgWidth) || !Number.isInteger(imgHeight)) {
    throw OnlyIntegerAvailableError;
  }

  if (thumbWidth > imgWidth ||
    thumbHeight > imgHeight) {
    throw ThumbnailSizeMoreThanSourceImage;
  }

  if (imgWidth > imgHeight) {
    if (imgWidth / imgHeight < thumbWidth / thumbHeight) {
      var cropWidth = imgWidth;
      var cropHeight = (imgWidth * thumbHeight) / thumbWidth;
    } else {
      cropWidth = (thumbWidth * imgHeight) / thumbHeight;
      cropHeight = imgHeight;
    }
  } else {
    if (imgWidth / imgHeight > thumbWidth / thumbHeight) {
      cropWidth = (thumbWidth * imgHeight) / thumbHeight;
      cropHeight = imgHeight;
    } else {
      cropWidth = imgWidth;
      cropHeight = (imgWidth * thumbHeight) / thumbWidth;
    }
  }

  return {
    cropWidth: Math.floor(cropWidth),
    cropHeight: Math.floor(cropHeight)
  };
}

exports.getThumbnailCropSize = getThumbnailCropSize;
