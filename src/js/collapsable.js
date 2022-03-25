'use strict';

//--------CONST GENERAL-----------
/* const legend */
const fillLegend = document.querySelector('.js-filled');
const designLegend = document.querySelector('.js-design');
const shareLegend = document.querySelector('.js-share');
/* const wrapper */
const designWrapper = document.querySelector('.js-design__wrapper');
const fillWrapper = document.querySelector('.js-filled__wrapper');
const shareWrapper = document.querySelector('.js-share__wrapper');
const shareWrapper2 = document.querySelector('.js-share__wrapper2'); 
/* const triangle */
const fillTriangle = document.querySelector('.js-fill__triangle');
const designTriangle = document.querySelector('.js-design__triangle');
const shareTriangle = document.querySelector('.js-share__triangle');


//-------- share-----------            
function handleArrowS(){
shareWrapper.classList.toggle('hidden');
shareWrapper2.classList.toggle('hidden');
shareTriangle.classList.toggle('turn');
}
shareLegend.addEventListener('click', handleArrowS);

//-------- fill-----------
function handleArrowF(){
fillWrapper.classList.toggle('hidden');
fillTriangle.classList.toggle('turn');
}
fillLegend.addEventListener('click', handleArrowF);


//-------- design-----------
function handleArrowD(){
designWrapper.classList.toggle('hidden');
designTriangle.classList.toggle('turn');
}
designLegend.addEventListener('click', handleArrowD);