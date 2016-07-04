var expect = require('chai').expect;
var getThumbnailCropSize = require('../src/image').getThumbnailCropSize;
var OnlyIntegerAvailableError = require('../src/image').OnlyIntegerAvailableError;
var ThumbnailSizeMoreThanSourceImage = require('../src/image').ThumbnailSizeMoreThanSourceImage;


describe("Image", function () {
  describe("Thumbnails", function () {
    it("If one of the arguments isn't integer expected throwing", function () {
      expect(getThumbnailCropSize.bind(this, 1024, 768, '787', 7)).to.throw(OnlyIntegerAvailableError);
      expect(getThumbnailCropSize.bind(this, 920, 1080, 345, Infinity)).to.throw(OnlyIntegerAvailableError);
      expect(getThumbnailCropSize.bind(this, '1200', 800, 899, 700)).to.throw(OnlyIntegerAvailableError);
      expect(getThumbnailCropSize.bind(this, 89, null, 899, 676)).to.throw(OnlyIntegerAvailableError);
    });

    it("If thumbnail size more than source image size expected throwing", function () {
      expect(getThumbnailCropSize.bind(this, 640, 480, 1024, 768)).to.throw(ThumbnailSizeMoreThanSourceImage);
      expect(getThumbnailCropSize.bind(this, 640, 1080, 1024, 768)).to.throw(ThumbnailSizeMoreThanSourceImage);
      expect(getThumbnailCropSize.bind(this, 2400, 480, 1024, 768)).to.throw(ThumbnailSizeMoreThanSourceImage);
    });

    it("Image resizing", function () {
      expect(getThumbnailCropSize(2000, 1000, 1500, 400)).to.deep.equal({
        cropWidth: 2000,
        cropHeight: 533
      });

      expect(getThumbnailCropSize(2000, 1000, 1500, 990)).to.deep.equal({
        cropWidth: 1515,
        cropHeight: 1000
      });

      expect(getThumbnailCropSize(2000, 1000, 500, 250)).to.deep.equal({
        cropWidth: 2000,
        cropHeight: 1000
      });

      expect(getThumbnailCropSize(1000, 2000, 900, 1900)).to.deep.equal({
        cropWidth: 947,
        cropHeight: 2000
      });

      expect(getThumbnailCropSize(1000, 2000, 900, 950)).to.deep.equal({
        cropWidth: 1000,
        cropHeight: 1055
      });

      expect(getThumbnailCropSize(1000, 2000, 250, 500)).to.deep.equal({
        cropWidth: 1000,
        cropHeight: 2000
      });
    });
  });
});
