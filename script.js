pageDivs = document.querySelectorAll('.wrapper > *');
pageDivs.forEach(div => {
    div.style.opacity = "0"
});

const observer = new IntersectionObserver ( entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
    },
    {
        threshold: .1,
    }
)

pageDivs.forEach((div) => {
    observer.observe(div)
})