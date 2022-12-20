var MakeBounceDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.moveTop = null;
  this.moveLeft = null;
  this.width = 20;
  this.expand = null;
};

MakeBounceDancer.prototype = Object.create(MakeDancer.prototype);
MakeBounceDancer.prototype.constructor = MakeBlinkyDancer;

MakeBounceDancer.prototype.step = function(top, left) {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
  // Move Up and Down

  // console.log($('body').height(), $('body').width()); // 715 717
  if (this.moveTop && this.moveLeft) {
    this.top -= 25;
    this.left -= 25;
    this.moveTop = this.top > 25 ? true : false;
    this.moveLeft = this.left > 25 ? true : false;
  } else if (this.moveTop && !this.moveLeft) {
    this.top -= 25;
    this.left += 25;
    this.moveTop = this.top > 25 ? true : false;
    this.moveLeft = this.left > $('body').width() - 25 ? true : false;
  } else if (!this.moveTop && this.moveLeft) {
    this.top += 25;
    this.left -= 25;
    this.moveTop = this.top > $('body').height() - 25 ? true : false;
    this.moveLeft = this.left > 25 ? true : false;
  } else {
    this.top += 25;
    this.left += 25;
    this.moveTop = this.top > $('body').height() - 25 ? true : false;
    this.moveLeft = this.left > $('body').width() - 25 ? true : false;
  }

  // Expand or Shrink
  if (this.expand) {
    // debugger;
    this.width += 2;
    this.expand = this.width < 30 ? true : false;
  } else {
    this.width -= 2;
    this.expand = this.width > 10 ? false : true;
  }

  var updateWidth = this.width + 'px';
  this.$node.css('border-width', `${updateWidth}`);

  this.setPosition.call(this, this.top, this.left);
};