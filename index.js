const util = require('util');

module.exports = function(id='', dater=true, separator='-') {
  // define quiet mode
  this.quietMode = false;

  // by default, all messages > 5 are displayed
  this.priority = 5;

  // set date var
  this.getDate = '';

  // Log with all parameters
  this.log = function(string,priority=10) {
    if(priority=>this.priority) {
      if(this.quietMode===false) {

        var returned = '';

        if(id!='') {
          returned = util.format(id, separator);
        }

        if(dater===true) {
          var getDate = new Date().toISOString().replace(/T/, ' ').substr(0, 19);
          returned = util.format(returned, getDate, separator);
        }

        returned = util.format(returned, string);


        console.log(returned);
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
