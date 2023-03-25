const slider = () =>{
    const slider = document.querySelector('.slider-inner');
    let isDragging = false, prevPageX, prevScrollLeft;
    const dragStart = (e) =>{
        e.preventDefault();
        isDragging = true;

        // Find the point of clicking the mouse or touching on the screen
        prevPageX = e.pageX || e.touches[0].pageX;
        prevScrollLeft = slider.scrollLeft;
    }
    const dragStop = () =>{
        isDragging = false;
    }
    const dragging = (e) =>{
        e.preventDefault();
        if (!isDragging) return;

        // Calculate the difference between the current and previous mouse position, change the scroll position of the container with slides.
        let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
        slider.scrollLeft = prevScrollLeft - positionDiff;
    }

    // Add litener on touch, drag and drop 
    slider.addEventListener('mousedown', dragStart);
    slider.addEventListener('touchstart', dragStart);

    slider.addEventListener('mousemove', dragging);
    slider.addEventListener('touchmove', dragging);

    slider.addEventListener('touched', dragStop);
    slider.addEventListener('mouseup', dragStop);
    slider.addEventListener('mouseleave', dragStop);
};
export default slider;