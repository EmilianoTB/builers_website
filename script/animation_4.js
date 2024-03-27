// Intersection Observer setup (placed at the end)
const hello = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated'); // Add 'animated' class for CSS
      } else {
        // Optionally remove the 'animated' class when out of view (for performance)
        entry.target.classList.remove('animated');
      }
    });
  });
  
  // Observe the contact section
  const target = document.querySelector('.contact_question');
  hello.observe(target);

  // Intersection Observer setup (placed at the end)
const new_animation = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.big_animation.classList.add('animated'); // Add 'animated' class for CSS
      } else {
        // Optionally remove the 'animated' class when out of view (for performance)
        entry.big_animation.classList.remove('animated');
      }
    });
  });
  
  // Observe the contact section
  const big_animation = document.querySelector('.contact_answer');
  hello.observe(big_animation);



  const first_animation = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.search_animation_animation.classList.add('animated'); // Add 'animated' class for CSS
      } else {
        // Optionally remove the 'animated' class when out of view (for performance)
        entry.search_animation_animation.classList.remove('animated');
      }
    });
  });
  
  // Observe the contact section
  const search_animation = document.querySelector('.typing-animation');
  hello.observe(search_animation);



  const second_animation = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.search_animation_animation.classList.add('animated'); // Add 'animated' class for CSS
      } else {
        // Optionally remove the 'animated' class when out of view (for performance)
        entry.search_animation_animation.classList.remove('animated');
      }
    });
  });
  
  // Observe the contact section
  const new_search_animation = document.querySelector('.text_specialize');
  hello.observe(new_search_animation);


