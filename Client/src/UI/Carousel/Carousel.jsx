import "./Carousel.css"
const Carousel = () => {
    let scrollcontainer = document.querySelector('.gallery')
  let backbtn = document.querySelector('#bcbtn')
  let nextkbtn = document.querySelector('#nbtn')
  scrollcontainer.addEventListener('wheel',(evt)=>{
    evt.preventDefault();
    scrollcontainer.scrollLeft += evt.deltaY; 
    scrollcontainer.style.scrollBehavior = "auto";
  })

  nextkbtn.addEventListener("click",()=>{
    scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollLeft += 330; 
  })
  backbtn.addEventListener("click",()=>{
    scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollRight += 330; 
  })
    return(
        <>
            <div className="Gallery-wrap">
                <h1 id='bcbtn'>left</h1>
                <div className='gallery'>
                    <div>
                        <span><img src='Photos/carosal1.jpg' alt="food"></img></span>
                        <span><img src='Photos/carosal2.jpg'></img></span>
                        <span><img src='Photos/carosal3.jpg'></img></span>
                    </div>
                    <div>
                        <span><img src='carosal4.jpg'></img></span>
                        <span><img src='carosal1.jpg'></img></span>
                        <span><img src='carosal2.jpg'></img></span>
                    </div>
                </div>
                <h1 id='nbtn'>right</h1>
            </div>
        </>
    )
}
export default Carousel;