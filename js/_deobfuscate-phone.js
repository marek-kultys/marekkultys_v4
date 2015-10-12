//Borrowed from henryhadlow.github.io
function _callme() {
  var callmeOriginal = document.getElementById("callme").outerHTML;
  var dwadwa = / dwadwa /g;
  var dziewiec = / dziewiec /g;
  var callmePhone = callmeOriginal.match(/>(.*)</)[1];
  callmePhone = callmePhone.replace(dwadwa,"22").replace(dziewiec,"9");
  callmeClass = callmeOriginal.match(/class="(.*?)"/)[1];
  var callmeReplacement = '<span title="Call on Mobile" class="'+callmeClass+'">'+callmePhone+'</span>';
  document.getElementById("callme").outerHTML = callmeReplacement;
}
_callme();
