const accordion = () =>{
    const accordionList = document.querySelectorAll('.burger');
    const accordionContentList = document.querySelectorAll('.burger__ingredients');
    const detailsList = document.querySelectorAll('.burger__details');
    for (let i = 0; i < accordionList.length; i++) {
        accordionList[i].addEventListener('click', () => {

            accordionList[i].classList.toggle('_open');

            if (accordionList[i].classList.contains('_open')) {
                accordionContentList[i].style.maxHeight = accordionContentList[i].scrollHeight + 'px';
                detailsList[i].textContent = 'Reduce';
            }else{
                accordionContentList[i].style.maxHeight = 0 + 'px';
                detailsList[i].textContent = 'Details';
            };
        });
    };
};

export default accordion;
