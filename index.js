const util = require('util');

module.exports = function(id, separator='-') {
  // define quiet mode
  this.quietMode = false;

  // by default, all messages > 5 are displayed
  this.priority = 5;

  // Log with all parameters
  this.log = function(string,priority=10) {
    if(priority=>this.priority) {
      if(this.quietMode===false) {
        console.log(util.format(id, separator, string));
      }
    }
  }

  // set quiet mode
  this.setQuietMode = function () {
    this.quietMode = true;
  }

  this.setVerboseMode = function () {
    this.quietMode = false;
  }

  this.setPriority = function(priority){
    this.priority = priority;
  }

}
