//console.log(Object.getOwnPropertyNames(b.prototype));

(function(){
function jsdir(obj)
{
  if(typeof(obj) === 'function')
  {
    return Object.getOwnPropertyNames(obj.prototype);
  }else
  {
    return Object.getOwnPropertyNames(obj.constructor.prototype);
  }
}
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = jsdir;
  }
  else {
    if (typeof define === 'function' && define.amd) {
      define([], function() {
        return jsdir;
      });
    }
    else {
      window.jsdir = jsdir;
    }
  }
})();
