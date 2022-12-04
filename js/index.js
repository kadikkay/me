AOS.init();



let headerLink = document.querySelectorAll('.header__link');
let tabsItem = document.querySelectorAll('.active');

headerLink.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    headerLink.forEach(function(btn){ btn.classList.remove('work__link-btn--active')});
    e.currentTarget.classList.add('work__link-btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  })
})
