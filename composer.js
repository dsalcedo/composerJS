String.prototype.composer = (function (){
  var re = /\{{(.+?)\}}/g;
  return function (o){
    return this.replace(re, function (_, k){
      return typeof o[k] != 'undefined' ? o[k] : '';
    });
  }
}());
