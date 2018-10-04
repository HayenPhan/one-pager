window.addEventListener('scroll', () => {  // Triggering the scroll event
  const scrolled = window.pageYOffset;  // Returns the numbers of pixels for scrolling
  const image = document.querySelector('.section__first'); // Select the image

  image.style.top = scrolled * 0.9 + 'px'; // Top position image = numbers of pixels while scrolling * 0.9

  console.log(image.style.top)

})

/* Don't forget to MINIFY */
