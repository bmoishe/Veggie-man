function VeggieMan() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed =0;
  var total = 0;
  this.total = 0;
  this.tail = [];
  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.update = function() {
    this.tail[this.total-1] = createVector(this.x, this.y);
    this.x = this.x + this.xspeed*scle;
    this.y = this.y + this.yspeed*scle;
    this.x = constrain(this.x, 0, width-scle)
    this.y = constrain(this.y, 0, height-scle)
    document.getElementById("score").innerHTML = total;

  }

  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      total++
      return true;
    } else {
      return false;
    }
  }
    this.eatMeat = function(pos) {
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        this.total++;
        total--
        return true;
      } else {
        return false;
      }
  }
  this.death = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1 ) {
        this.total = 0
        this.tail = []
        setup();
      }
    }
  }
  this.show = function() {
    fill(255);
    for (var i = 0; i < this.tail.length-1; i++) {
      rect(this.tail[i].x, this.tail[i].y, scle, scle);
    }
    fill(255);
    rect(this.x, this.y, scle, scle);
  }
}
