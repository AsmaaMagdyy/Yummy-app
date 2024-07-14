// ============================Page loading End==============================

$(window).ready(function () {
   $(".loading-screen").fadeOut(500)
   $("body").css({ overflow: "visible" })
})

function loading() {
   $(".loading-screen").fadeIn(); (500);
   $(window).ready(function () {
      $(".loading-screen").fadeOut(500)
      $("body").css({ overflow: "visible" })
   })

}
// ============================Page loading Start==============================


// ============================Side Nav Bar Start==============================
$('.open-close-btn').click(function (e) {
   let sideBarWidth = $('.side-bar').outerWidth(true);
   //    console.log(sideBarWidth);
   let navLeft = $('nav').offset().left;
   if (navLeft === 0) {
      $('nav').css({ left: `-${sideBarWidth}px`, transition: 'all 1s' })
      $('.open-close-btn').removeClass('fa-x');
      $('.open-close-btn').addClass('fa-bars');
      $('.nsearch').animate({
         top: '300px'
      }, 500)
      $('.ncate').animate({
         top: '300px'
      }, 500)
      $('.narea').animate({
         top: '300px'
      }, 500)
      $('.ningre').animate({
         top: '300px'
      }, 500)
      $('.ncont').animate({
         top: '300px'
      }, 500)

   } else {
      $('nav').css({ left: `0px`, transition: 'all 1s' })
      $('.open-close-btn').removeClass('fa-bars');
      $('.open-close-btn').addClass('fa-x');
      $('.nsearch').animate({
         top: '0'
      }, 300, function () {
         $('.ncate').animate({
            top: '0',
         }, 300, function () {
            $('.narea').animate({
               top: '0',
            }, 300, function () {
               $('.ningre').animate({
                  top: '0',
               }, 300, function () {
                  $('.ncont').animate({
                     top: '0',
                  }, 300)
               })
            })
         })
      })
   }

});



// ============================Side Nav Bar End============================== azbt elharaka



// ============================Default Meals Start==============================
import { Default } from "./apis.js";
import { displayDefault } from "./display.js";
let de = new Default();
let x = await de.showDefault();
console.log(x);
console.log(x.meals);
let data = displayDefault(x.meals);
$('.home .row').html(data);

// ============================Meal Details Start==============================
import { MealById } from "./apis.js";
import { displayMealById } from "./display.js";
let inner = document.querySelectorAll('.home .inner');

for (let i = 0; i < inner.length; i++) {
   inner[i].addEventListener('click', async function () {
      let id = inner[i].getAttribute('data-id')
      console.log(id);
      let mealDetails = new MealById(id);
      let data = await mealDetails.getApiMeal();
      let mealObg = data.meals;
      let displayde = displayMealById(mealObg[0]);
      $('.meal-details .row').html(displayde);
      console.log(mealObg[0]);
      loading();
      $('.home').addClass('hidden')
      $('.meal-details').removeClass('hidden')
   })

}

$('.meal-details .fa-x').click(function () {
   loading();
   $('.home').removeClass('hidden')
   $('.meal-details').addClass('hidden')
})


// ============================Meal Details End==============================

// ============================Search By Name Start==============================

// +++++++++++Close SideBar When any section opened Start++++++++++++
$('nav li a').click(function () {
   let sectionName = $(this).attr('data-id');
   $('section,header').addClass('hidden');
   $(`.${sectionName}`).removeClass('hidden')
   loading();
   let sideBarWidth = $('.side-bar').outerWidth(true);
   $('nav').css({ left: `-${sideBarWidth}px`, transition: 'all 1s' })
   $('.open-close-btn').removeClass('fa-x');
   $('.open-close-btn').addClass('fa-bars');
})
// +++++++++++Close SideBar When any section opened End++++++++++++


import { SearchByName } from "./apis.js";

$('.s-by-name').keyup(async function (e) {
   let mealName = $('.s-by-name').val();
   console.log(mealName);
   let sByN = new SearchByName(mealName);
   let data = await sByN.getApiByName();
   let response = data.meals;
   console.log(response);
   let dataDesplayed = data.meals ? displayDefault(data.meals) : displayDefault([])
   loading();
   $('.search .row').html(dataDesplayed);

   let innerSN = document.querySelectorAll('.search .inner');

   for (let i = 0; i < innerSN.length; i++) {
      innerSN[i].addEventListener('click', async function () {
         let id = innerSN[i].getAttribute('data-id')
         console.log(id);
         let mealDetails = new MealById(id);
         let data = await mealDetails.getApiMeal();
         let mealObg = data.meals;
         let displayde = displayMealById(mealObg[0]);
         $('.meal-details .row').html(displayde);
         console.log(mealObg[0]);
         loading();
         $('.search').addClass('hidden')
         $('.meal-details').removeClass('hidden')
      })

   }
});


// ============================Search By Name End==============================
// ============================Search By Letter Start==============================

import { SearchByFirstLetter } from "./apis.js";

$('.s-by-l').keyup(async function () {

   let mealLett = $('.s-by-l').val();
   let sByl = new SearchByFirstLetter(mealLett);
   let data = await sByl.getApiByLiter();
   let response =await data.meals;
   console.log(response);
    let mealll=displayDefault(response);
   console.log(mealll);
      loading();
   $('.search .row').html(mealll);

      let innerSN = document.querySelectorAll('.search .inner');

   for (let i = 0; i < innerSN.length; i++) {
      innerSN[i].addEventListener('click', async function () {
         let id = innerSN[i].getAttribute('data-id')
         console.log(id);
         let mealDetails = new MealById(id);
         let data = await mealDetails.getApiMeal();
         let mealObg = data.meals;
         let displayde = displayMealById(mealObg[0]);
         $('.meal-details .row').html(displayde);
         console.log(mealObg[0]);
         loading();
         $('.search').addClass('hidden')
         $('.meal-details').removeClass('hidden')
      })

   }
});

// ============================Search By Letter End==============================


// ============================All Meal Categories Start==============================
import { AllMealCategory } from "./apis.js";
import { displayAllMealCategory } from "./display.js";

let AlMcate= new AllMealCategory();
let dataCate =await AlMcate.getApiAllMealCategory();
console.log(dataCate.categories);

let responseCate = displayAllMealCategory(dataCate.categories);
$('.categories .row').html(responseCate)
// ============================All Meal Categories End==============================
// // ============================Display Meals By Category Start==============================
import { MealsByCategory } from "./apis.js";

$('.categories .inner').click(async function () {
   let category = $(this).attr('data-category');
   // console.log(category);
   let mealByCate= new MealsByCategory(category);
   let response = await mealByCate.getApiMealsByCategory();
   // console.log(response.meals);
   let dataMC = displayDefault(response.meals);
   $('.categories').addClass('hidden')
   loading();
   $('.meals').removeClass('hidden')
   $('.meals .row').html(dataMC)
   let inner= $('.meals .inner')
   for (let i = 0; i < inner.length; i++) {
      inner[i].addEventListener('click', async function () {
         let id = inner[i].getAttribute('data-id')
         console.log(id);
         let mealDetails = new MealById(id);
         let data = await mealDetails.getApiMeal();
         let mealObg = data.meals;
         let displayde = displayMealById(mealObg[0]);
         $('.meal-details .row').html(displayde);
         console.log(mealObg[0]);
         loading();
         $('.meals').addClass('hidden')
         $('.meal-details').removeClass('hidden')
      })

   }
  })
// // ============================Display Meals By Categories End==============================

// ============================Area Section Start==============================
import { Area } from "./apis.js";
import { displayArea } from "./display.js";

let area= new Area();
let dataArea =await area.getApiArea();
console.log(dataArea.meals);
let responseArea = displayArea(dataArea.meals);
$('.area .row').html(responseArea)
// // ============================Area Section End==============================
// // ============================Display Meals By Area Start==============================
import { MealsByArea } from "./apis.js";

$('.area .inner').click(async function () {
   let area = $(this).attr('data-area');
   let mealByArea= new MealsByArea(area);
   let response = await mealByArea.getApiMealsByArea();
   let dataMA = displayDefault(response.meals);
   $('.area').addClass('hidden')
   loading();
   $('.meals').removeClass('hidden')
   $('.meals .row').html(dataMA)
   let inner= $('.meals .inner')
   for (let i = 0; i < inner.length; i++) {
      inner[i].addEventListener('click', async function () {
         let id = inner[i].getAttribute('data-id')
         console.log(id);
         let mealDetails = new MealById(id);
         let data = await mealDetails.getApiMeal();
         let mealObg = data.meals;
         let displayde = displayMealById(mealObg[0]);
         $('.meal-details .row').html(displayde);
         console.log(mealObg[0]);
         loading();
         $('.meals').addClass('hidden')
         $('.meal-details').removeClass('hidden')
      })

   }
  })
// ============================Display Meals By Area End==============================
// ============================Ingrediants Section Start==============================
import { Ingrediants } from "./apis.js";
import { displayIngrediants } from "./display.js";

let ingredaints= new Ingrediants();
let dataIngred =await ingredaints.getApiIngrediant();
console.log(dataIngred.meals);
let responseIngred = displayIngrediants(dataIngred.meals);
$('.ingredients .row').html(responseIngred)
// ============================Ingrediants Section End==============================
// ============================Display Meals By Ingrediants Start==============================
import { MealsByIngrediants } from "./apis.js";

$('.ingredients .inner').click(async function () {
   let ingredaints = $(this).attr('data-ingredaints');
   let mealByIngr= new MealsByIngrediants(ingredaints);
   let response = await mealByIngr.getApiMealsByIngrediants();
   let dataMI = displayDefault(response.meals);
   $('.ingredients').addClass('hidden')
   loading();
   $('.meals').removeClass('hidden')
   $('.meals .row').html(dataMI)
   let inner= $('.meals .inner')
   for (let i = 0; i < inner.length; i++) {
      inner[i].addEventListener('click', async function () {
         let id = inner[i].getAttribute('data-id')
         console.log(id);
         let mealDetails = new MealById(id);
         let data = await mealDetails.getApiMeal();
         let mealObg = data.meals;
         let displayde = displayMealById(mealObg[0]);
         $('.meal-details .row').html(displayde);
         console.log(mealObg[0]);
         loading();
         $('.meals').addClass('hidden')
         $('.meal-details').removeClass('hidden')
      })

   }
  })
// ============================Display Meals By Ingrediants End==============================


// ============================Contact Section Start==============================
let name = document.querySelector('.contact .name');
let email = document.querySelector('.contact .email');
let phone = document.querySelector('.contact .phone');
let age = document.querySelector('.contact .age');
let pass = document.querySelector('.contact .pass');
let repass = document.querySelector('.contact .repass');


$('form').submit(function (e) { 
   e.preventDefault();
   
});
function regexV(em) {
   let ele;
    let regex = {
      name: /^[A-Z-a-z]{1,}$/,
        pass:  /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/,
        email: /^[A-z-a-z-0-9]{1,}@[a-z]{1,}\.(com)$/,
        age: /^[1-9]{1,2}$/,
        phone: /^[0-9]{10}$/
    }
    if(em.value==''){
          ele =em.id;
         $(`#${ele}Alert`).removeClass('hidden');
        return false;
    }
    else if (regex[em.id].test(em.value) == true) {
       ele =em.id;
      $(`#${ele}Alert`).addClass('hidden');
        return true;
    } else{
       ele =em.id;
      $(`#${ele}Alert`).removeClass('hidden');
     return false;
    }
}

function CheckValidation() {
   if(name.value==''||email.value==''||phone.value==''||age.value==''||pass.value==''||repass.value==''){
      return false;
   }else{
      if(pass.value!==repass.value){
        return false;
      }
      if(!regexV(name)||!regexV(phone)||!regexV(age)||!regexV(email)||!regexV(pass)){
         return false;
      }else if(regexV(name)&&regexV(name)&&regexV(name)&&regexV(name)&&regexV(name)&&(pass.value==repass.value)){
         return true;
      }
      
   }
  }

function finalCheck() {
   if (CheckValidation()) {
      $('.contact button').removeAttr('disabled'); 
   } else {
      $('.contact button').attr('disabled','true'); 
   }
}

//When Focus On any input
name.addEventListener('focus',function () {
   regexV(name);
  })

phone.addEventListener('focus',function () {
   regexV(phone);
  })

email.addEventListener('focus',function () {
   regexV(email);
  })

pass.addEventListener('focus',function () {
   if(pass.value!==repass.value){
      $(`#repassAlert`).removeClass('hidden');
   }else{
      $(`#repassAlert`).addClass('hidden');
   }
  regexV(pass);
  })

repass.addEventListener('focus',function () {
   if(pass.value!==repass.value){
      $(`#repassAlert`).removeClass('hidden');
   }else{
      $(`#repassAlert`).addClass('hidden');
   }
  })

age.addEventListener('focus',function () {
   regexV(age);
  })


//When Enter value to any input
name.addEventListener('input',function () {
  regexV(name);
  finalCheck()
  })

email.addEventListener('input',function () {
  regexV(email);
  finalCheck()
  })

phone.addEventListener('input',function () {
  regexV(phone);
  finalCheck()
  })

age.addEventListener('input',function () {
  regexV(age);
  finalCheck()
  })

pass.addEventListener('input',function () {
   if(pass.value!==repass.value){
      $(`#repassAlert`).removeClass('hidden');
   }else{
      $(`#repassAlert`).addClass('hidden');
   }
  regexV(pass);
  finalCheck()
  })

  repass.addEventListener('input',function () {
   if(pass.value!==repass.value){
      $(`#repassAlert`).removeClass('hidden');
   }else{
      $(`#repassAlert`).addClass('hidden');
   }
   finalCheck()

    })



  


// ============================Contact Section End==============================
