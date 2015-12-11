;(function( context ) {


  var viewport;

  function init() {
    window.onresize = resizing;
    injectElement();
    resizing();
  }

  function injectElement() {
    var e = document.createElement('div');
    e.style.position = "fixed";
    e.style.bottom = "0";
    e.style.left = "0";
    e.style.color = "#000";
    e.style.fontSize = "1.2em";
    e.style.textAlign = "center";
    e.style.zIndex = "9999";
    e.style.background = "rgba(255,255,255,0.7)";
    viewport = document.body.appendChild( e );
  }

  function resizing() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    viewport.innerHTML = w + " X " + h;
  }

  document.addEventListener('DOMContentLoaded', init, false);

})( this );