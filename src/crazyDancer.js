var MakeCrazyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="crazyDancer" src="./gorilla.gif" />');
  this.unleash();
  this.setPosition(top, left);
};

MakeCrazyDancer.prototype = Object.create(MakeDancer.prototype);
MakeCrazyDancer.prototype.constructor = MakeCrazyDancer;

MakeCrazyDancer.prototype.unleash = function() {
  this.$node.animate({
    width: '400px',
  }, 3000);
};
