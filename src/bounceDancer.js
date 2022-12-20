var MakeBounceDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.moveTop = null;
  this.width = 20;
};

MakeBounceDancer.prototype = Object.create(MakeDancer.prototype);
MakeBounceDancer.prototype.constructor = MakeBlinkyDancer;

MakeBounceDancer.prototype.step = function(top, left) {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
  if (this.moveTop) {
    this.top -= 25;
    this.moveTop = this.top > 25 ? true : false;
  } else {
    this.top += 25;
    this.moveTop = this.top > 685 ? true : false;
  }
  this.setPosition.call(this, this.top, this.left);
};