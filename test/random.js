var expect = require('chai').expect;
var isEventHappenedFactory = require('../src/random').isEventHappenedFactory;
var getRandomInt = require('../src/random').getRandomInt;
var OnlyIntegerAvailableError = require('../src/random').OnlyIntegerAvailableError;

describe("Random", function () {
  describe("Repeated random event in ranges", function () {
    it("If passed not integer expected throwing", function () {
      expect(isEventHappenedFactory.bind(this, '1000', 1500, 79878)).to.throw(OnlyIntegerAvailableError);
      expect(isEventHappenedFactory.bind(this, 0, '5', 767)).to.throw(OnlyIntegerAvailableError);
      expect(isEventHappenedFactory.bind(this, Infinity, 565, 786)).to.throw(OnlyIntegerAvailableError);
      expect(isEventHappenedFactory.bind(this, 78678.89, 987)).to.throw(OnlyIntegerAvailableError);
    });

    it("In range (0, lowThreshold] - always 0 events happened", function () {
      for (var i = 1; i <= 1000; i++) {
        var lowThreshold = getRandomInt(0, 100);
        var isEventHappened = isEventHappenedFactory(lowThreshold, 3, 12);
        for (var j = 1; j <= lowThreshold; j++) {
          expect(isEventHappened()).to.be.false;
        }
      }
    });

    it("Checking 5, 1, 13 arguments", function () {
      for (var i = 1; i <= 1000; i++) {
        var isEventHappened = isEventHappenedFactory(5, 2, 13);
        var eventHappenedCounter = 0;
        var attemptsCounter = 0;

        for (var loops = 1; loops <= 5; loops++) {
          attemptsCounter += 1;
          expect(isEventHappened()).to.be.false;
        }

        while (attemptsCounter < 14) {
          attemptsCounter += 1;
          if (isEventHappened()) {
            eventHappenedCounter += 1;
          }
        }

        expect(eventHappenedCounter).to.equal(1);

        attemptsCounter += 1;
        expect(isEventHappened()).to.be.false;

        while (attemptsCounter < 29) {
          attemptsCounter += 1;
          if (isEventHappened()) {
            eventHappenedCounter += 1;
          }
        }

        expect(eventHappenedCounter).to.equal(2);

        attemptsCounter += 1;
        expect(isEventHappened()).to.be.false;

        while (attemptsCounter < 44) {
          attemptsCounter += 1;
          if (isEventHappened()) {
            eventHappenedCounter += 1;
          }
        }

        expect(eventHappenedCounter).to.equal(3);

        attemptsCounter += 1;
        expect(isEventHappened()).to.be.false;

        while (attemptsCounter < 59) {
          attemptsCounter += 1;
          if (isEventHappened()) {
            eventHappenedCounter += 1;
          }
        }

        expect(eventHappenedCounter).to.equal(4);

        attemptsCounter += 1;
        expect(isEventHappened()).to.be.false;

        while (attemptsCounter < 74) {
          attemptsCounter += 1;
          if (isEventHappened()) {
            eventHappenedCounter += 1;
          }
        }

        expect(eventHappenedCounter).to.equal(5);

        attemptsCounter += 1;
        expect(isEventHappened()).to.be.false;


        while (attemptsCounter < 89) {
          attemptsCounter += 1;
          if (isEventHappened()) {
            eventHappenedCounter += 1;
          }
        }

        expect(eventHappenedCounter).to.equal(6);

        attemptsCounter += 1;
        expect(isEventHappened()).to.be.false;
      }
    });

    it("In order with 15 skipped attempts 2 steps of left range and 13 steps of right steps, during 100 expected 5 or 6 events", function () {
      var isEventHappend = isEventHappenedFactory(15, 2, 13);
      var eventHappenedCounter = 0;

      for (var i = 1; i <= 100; i++) {
        if (isEventHappend()) {
          eventHappenedCounter += 1;
        }
      }

      expect(eventHappenedCounter).to.be.oneOf([5, 6]);
    });

    it("In order with 9 skipped attempts 5 steps of left range and 10 steps of right steps, during 728 loops expected 47 or 48 events", function () {
      var isEventHappend = isEventHappenedFactory(9, 5, 10);
      var eventHappenedCounter = 0;

      for (var i = 1; i <= 728; i++) {
        if (isEventHappend()) {
          eventHappenedCounter += 1;
        }
      }

      expect(eventHappenedCounter).to.be.oneOf([48, 49]);
    });

    it("Event must be happened exactly one time in range", function () {
      this.timeout(10000);

      for (var i = 1; i <= 1000; i++) {
        var attemptsCount = getRandomInt(100, 1000);
        var attemptsSkip = getRandomInt(0, 50);
        var leftRangeStep = getRandomInt(1, 10);
        var rightRangeStep = getRandomInt(1, 10);
        var eventHappenedCounter = 0;

        var isEventHappend = isEventHappenedFactory(attemptsSkip, leftRangeStep, rightRangeStep);

        for (var loops = 0; loops < attemptsCount; loops++) {
          if (isEventHappend()) {
            eventHappenedCounter += 1;
          }
        }

        expect(eventHappenedCounter).to.be.oneOf([
          Math.floor((attemptsCount - ( rightRangeStep <= attemptsSkip ? attemptsSkip : rightRangeStep + leftRangeStep )) / (leftRangeStep + rightRangeStep))
          + ( rightRangeStep <= attemptsSkip ? 0 : 1 ),
          Math.ceil((attemptsCount - ( rightRangeStep <= attemptsSkip ? attemptsSkip : rightRangeStep + leftRangeStep )) / (leftRangeStep + rightRangeStep))
          + ( rightRangeStep <= attemptsSkip ? 0 : 1 )
        ]);
      }
    });
  });

  describe("Get random integer in specific range", function () {
    it("If passed not integer expected throwing", function () {
      expect(getRandomInt.bind(this, '1000', 1500)).to.throw(OnlyIntegerAvailableError);
      expect(getRandomInt.bind(this, 0, '5')).to.throw(OnlyIntegerAvailableError);
      expect(getRandomInt.bind(this, Infinity, 565)).to.throw(OnlyIntegerAvailableError);
      expect(getRandomInt.bind(this, 78678.89, 987)).to.throw(OnlyIntegerAvailableError);
    });

    it("Returned value is integer", function () {
      expect(Number.isInteger(getRandomInt(1000, 1500))).to.be.true;
      expect(Number.isInteger(getRandomInt(0, 5))).to.be.true;
      expect(Number.isInteger(getRandomInt(5, 565))).to.be.true;
      expect(Number.isInteger(getRandomInt(-676, 987))).to.be.true;
    });

    it("Random integer expected in passed range", function () {
      for (var rangeEnd = -98; rangeEnd < 1000; rangeEnd++) {
        var rangeStart = getRandomInt(-100, rangeEnd - 1);
        expect(getRandomInt(rangeStart, rangeEnd)).to.be.within(rangeStart, rangeEnd);
      }
    });

    it("Max value must be more than min", function () {
      expect(getRandomInt.bind(this, 6786, 786)).to.throw(Error);
      expect(getRandomInt.bind(this, 6786, -7867868)).to.throw(Error);
      expect(getRandomInt.bind(this, 6786, 0)).to.throw(Error);
      expect(getRandomInt.bind(this, 0, -789789)).to.throw(Error);
    });
  });
});
