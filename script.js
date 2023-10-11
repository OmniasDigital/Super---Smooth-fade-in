//get all direct childs from a parent div and add a opacity of 0 to each
pageDivs = document.querySelectorAll('.wrapper > *');
pageDivs.forEach(div => {
    div.style.opacity = "0"
});

const observer = new IntersectionObserver ( entries => {
    entries.forEach(entry => {

        //adds "show" class to currently intersecting
        entry.target.classList.toggle("show", entry.isIntersecting) 

        //once Intersected wont remove class
        if (entry.isIntersecting) observer.unobserve(entry.target) 
    })
    },
    {
        threshold: .4,
    }
)

//runs observer on search found div
pageDivs.forEach((div) => {
    observer.observe(div)
})