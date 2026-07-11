  const cards = document.querySelectorAll('.level-card');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.25 });
  cards.forEach(c => io.observe(c));
