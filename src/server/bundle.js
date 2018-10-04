(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('scroll', () => {  // Triggering the scroll event
  const scrolled = window.pageYOffset;  // Returns the numbers of pixels for scrolling
  const image = document.querySelector('.section__first'); // Select the image

  image.style.top = scrolled * 0.9 + 'px'; // Top position image = numbers of pixels while scrolling * 0.9

  console.log(image.style.top)

})

/* Don't forget to MINIFY */

},{}]},{},[1]);
