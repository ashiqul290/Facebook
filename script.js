const showLeftMenu = document.querySelector('.hide-details');
const showMore = document.querySelector("#showMore");
const hideLess = document.querySelector('#hide-less');


showMore.addEventListener('click',()=>{
showMore.style.display = 'none';
showLeftMenu.style.display = 'block';
})

hideLess.addEventListener('click',()=>{
    showLeftMenu.style.display = 'none';
    showMore.style.display = 'block';

})
const hideGroups = document.querySelector('.hideGroups');
const showMoreGroup = document.querySelector("#showMoreGroup");
const hideLessGroup = document.querySelector('#hideLessGroup');


showMoreGroup.addEventListener('click',()=>{
showMoreGroup.style.display = 'none';
hideGroups.style.display = 'block';
})

hideLessGroup.addEventListener('click',()=>{
    hideGroups.style.display = 'none';
    showMoreGroup.style.display = 'block';

})

