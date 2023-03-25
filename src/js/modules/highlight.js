const highlight = () =>{
    function bindHighlight (trigger, highlightObjects) {
        trigger.addEventListener('click', () =>{
            highlightObjects.forEach(object => {
                object.classList.add('_highlight')
            });
            setTimeout(function () {
                highlightObjects.forEach(object => {
                    object.classList.remove('_highlight')
                });
            }, 300)
        });
    };
    const headerHiglightTrigger = document.querySelector('.menu__button');
    const headerHighlightObjects = document.querySelectorAll('.menu__item-link');
    const burgersTrigger = document.querySelector('.burgers__button');
    const burgersHighlightObjects = document.querySelectorAll('.burger');
    bindHighlight(headerHiglightTrigger, headerHighlightObjects);
    bindHighlight(burgersTrigger, burgersHighlightObjects);
};
export default highlight;