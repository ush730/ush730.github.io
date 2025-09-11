window.onload = () =>{
    let scrollpos = window.scrollY; 
    const about = document.querySelector("#about > div")
    const tech = document.querySelector("#Tech > div")
    const Career = document.querySelector("#Career > div") 
    const add_class_on_scroll = (dom) => dom.classList.add("come-in")  
    window.addEventListener('scroll', function() { 
      scrollpos = window.scrollY; 
      if (scrollpos >= about.offsetHeight - 200) add_class_on_scroll(about)
      if (scrollpos >= tech.offsetHeight + 300) add_class_on_scroll(tech)
      if (scrollpos >= Career.offsetHeight + 700) add_class_on_scroll(Career) 
    }) 
} 