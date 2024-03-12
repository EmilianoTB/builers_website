if (!window.observer) {
    const section = document.querySelector('.section_project');
    const h1 = section.querySelector('h1');

    window.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.classList.add('animate');
            } else {
                section.classList.remove('animate');
            }
        });
    });

    window.observer.observe(h1);
}


