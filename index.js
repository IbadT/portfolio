"use strict"

let siteType = `
1-Сайт-визитка,
2-Интернет-магазин,
3-Промо-сайт,
4-Сайт-витрина,
5-Корпоративный имиджевый сайт,
6-Корпоративный информационный сайт,
7-Тематический сайт,
8-Новостной сайт`;

let siteDesign = `
1-Минимализм
2-Классический стиль
3-Корпоративный стиль
4-Стиль Ар-Деко
5-Ретро
6-HI TECH
7-Рисованный стиль
8-Информационный`;

let siteAdaptiv = `
1-Адаптивный
2-Динамический`;


let priceForType = {
    1 : 200,
    2 : 800,
    3 : 400,
    4 : 300,
    5 : 600,
    6 : 600,
    7 : 500,
    8 : 600
};
let priceForDesign = {
    1 : 100,
    2 : 200,
    3 : 400,
    4 : 500,
    5 : 550,
    6 : 700,
    7 : 950,
    8 : 400
};
let priceForAdaptiv = {
    1 : 200,
    2 : 300
};

// setTimeout(()=>{
//     let first = prompt(`Тип сайта?
//     ${siteType}`);
//     let second = prompt(`Дизайн сайта?
//     ${siteDesign}`);
//     let third = prompt(`Адаптивность сайта сайта?
//     ${siteAdaptiv}`);

//     let obj = {}
//     obj.type = first;
//     obj.design = second;
//     obj.adaptiv = third;

//     let a = Object.entries(obj)
//     for(let i = 0; i < a.length; i++){
//         if(a[i][0]==='type'){
//             for(let key in priceForType){
//                 if(key==a[i][1]){
//                     a[i].splice(1,1,priceForType[key])
//                 }
//             }
//         }else if(a[i][0]==='design'){
//             for(let key in priceForDesign){
//                 if(key==a[i][1]){
//                     a[i].splice(1,1,priceForDesign[key])
//                 }
//             }
//         }else if(a[i][0]==='adaptiv'){
//             for(let key in priceForAdaptiv){
//                 if(key==a[i][1]){
//                     a[i].splice(1,1,priceForAdaptiv[key])
//                 }
//             }

//         }
//     };
//     let result = Object.fromEntries(a);
//     let res = [];
//     res.push(result.type);
//     res.push(result.design);
//     res.push(result.adaptiv);
//     let p = res.map(i => String(i).length>2 ? i : 0);
//     let price = p.reduce((acc,cur)=>acc+cur);


//     const amountDaysForType = [0, 2, 1, 3, 2, 3, 4, 2, 1];
//     const amountDaysForDesign = [0, 1, 3, 4, 2, 3, 4, 1, 2];
//     const amountDaysForAdaptiv = [0, 2, 1];

//     let days = countDays(obj, amountDaysForType, amountDaysForDesign, amountDaysForAdaptiv);


//     function countDays(obj, amountDaysForType, amountDaysForDesign, amountDaysForAdaptiv){
//         let arr = [];
//         let res = Object.entries(obj)
//         arr.push(amountDaysForType[res[0][1]])
//         arr.push(amountDaysForDesign[res[1][1]])
//         arr.push(amountDaysForAdaptiv[res[2][1]])
//         let days = arr.filter(i => i!==0)
//         if(days.length>1){
//             return days.reduce((acc,cur)=>acc+cur);
//         }else if(days.length==1){
//             return days[0]
//         }else{
//             return ''
//         }
//     };

//     const elem = document.querySelector('.aboutResult');

//     if(price===0){
//         return 0
//     }else{
//         elem.lastElementChild.innerHTML=price+' $'
//     };

//     if(days===''){
//         return ''
//     }else{
//         elem.firstElementChild.innerHTML=days + ' Days'
//     };

//     // console.log(`You'r price: ${price} ( type: ${p[0]}, design: ${p[1]}, adaptiv: ${p[2]} )`);
// },3500);

const elem = document.querySelector('#list');
const elem1 = document.querySelector('#list1');
const elem2 = document.querySelector('#list2');

const btn = document.getElementById('btnId');
const secBtn = document.getElementById('btnId2');

const first = document.querySelector('.aboutResult');

const amountDaysForType = [0, 2, 1, 3, 2, 3, 4, 2, 1];
const amountDaysForDesign = [0, 1, 3, 4, 2, 3, 4, 1, 2];
const amountDaysForAdaptiv = [0, 2, 1];

let result = [];

btn.onclick = e => {
    result.push(elem.value);
    result.push(elem1.value);
    result.push(elem2.value);
    let days = countDays(result, amountDaysForType, amountDaysForDesign, amountDaysForAdaptiv);
    // console.log(result)

    // let price = result.reduce((acc,cur)=>+acc + +cur)

    if(result && days){
        let price = result.reduce((acc,cur)=>+acc + +cur);
        // let days = countDays(result, amountDaysForType, amountDaysForDesign, amountDaysForAdaptiv);
        first.lastElementChild.innerHTML=price + ' $';
        first.firstElementChild.innerHTML=days + ' Days';

        secBtn.style.display='block';
        secBtn.style.marginTop='20px';
    
        btn.disabled='true'
    }else{
        $('.fifthFroms').addClass('error')
        btn.disabled='false';
    }

    // first.lastElementChild.innerHTML=price + ' $';
    // first.firstElementChild.innerHTML=days + ' Days';

    // secBtn.style.display='block';
    // secBtn.style.marginTop='20px';

    // btn.disabled='true';
}

function countDays(result, amountDaysForType, amountDaysForDesign, amountDaysForAdaptiv){
    let days = [];
    days.push(amountDaysForType[result[0]])
    days.push(amountDaysForDesign[result[1]])
    days.push(amountDaysForAdaptiv[result[2]])
    return days.reduce((acc,cur)=>acc+cur);
}















new WOW().init();

$(document).ready(function(){

    let options = {threshold: [0.2]}
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('main');

    elements.each((i,el)=>{ 
        observer.observe(el);
    })
    function onEntry(entry){
        entry.forEach(i => {
            if(i.isIntersecting){
                i.target.classList.add('show');
            }else{
                i.target.classList.remove('show')
            }
        })
    }


    $('.image-link').magnificPopup({type:'image'});

    



    $(window).scroll(function(){ //scroll and navMenu
        let current_position = $(this).scrollTop();

        $('.mainFromNav').each((i,el)=>{
            if($(el).offset().top - $('.first').outerHeight() <= current_position){
                 $('.first a').each((e,el)=>{
                     if($(el).hasClass('activeForNav')){
                         $(el).removeClass('activeForNav');
                     }
                 })
                 $('.first div:eq('+ i +')').find('a').addClass('activeForNav')
            }
        })
    })







    $('form').submit(function(e){
        e.preventDefault();

        $.ajax({
            type: 'post',
            url: 'php/index.php',     //указываем наш обработчик
            data: $(this).serialize()   //для JSON
        }).done(function(){
            $(this).find('input').val('');
            console.log($(this).serialize())
            alert('Done inter');
            $('form').trigger('reset')
        })
        return false
    })
   
})