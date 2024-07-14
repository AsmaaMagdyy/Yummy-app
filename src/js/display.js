export function displayDefault(arr) {
    let newarr;
    if (arr.length > 20) {
        newarr = arr.slice(0, 20)
    } else {
        newarr = arr;
    }
    let data = ``;
    for (let i = 0; i < newarr.length; i++) {
        data += `
         <div class=" w-full md:w-1/4  rounded-lg ">
                    <div class="inner m-3 rounded-lg relative group overflow-hidden cursor-pointer" data-id="${newarr[i].idMeal}">
                        <img src="${newarr[i].strMealThumb}" alt="meal" class="w-full rounded-lg">
                        <div class="w-full h-full bg-[#f9f6f6ca] rounded-lg flex items-center absolute -bottom-full group-hover:bottom-0 duration-500">
                            <h3 class="capitalize text-[28px] font-medium line-clamp-2">${newarr[i].strMeal}</h3>
                        </div>
                    </div>
                   
                </div>
        `;
    }
    return data;
}

export function displayMealById(obj) {
    let ingredients = ``

    for (let i = 1; i <= 20; i++) {
        if (obj[`strIngredient${i}`]) {
            ingredients += `<li class="bg-[#CFF4FC] text-[#055160] p-1 rounded-md">${obj[`strMeasure${i}`] + ' ' + obj[`strIngredient${i}`]}</li>`
        }
    }



    let tags = ``;
    let arrTAgs;
    let taggg = ``;
    // console.log(arrTAgs);
    if (obj.strTags == null) {
        tags = ''

    } else {
        arrTAgs = obj.strTags.split(",")
        for (let tag of arrTAgs) {
            let i = 1
            taggg += `<li class="bg-[#f8d7da] text-[#842029] p-1 rounded-md capitalize">${tag}</li>`
            i++;
        }
        tags = `<h4 class="text-[28px] font-bold">Tags :</h4>
                    <ul class="row m-3 gap-4">
                            ${taggg}
                    </ul>
       `
    }

    let data = `
    <div class="w-full md:w-[30%]">
                    <div class="inner rounded-lg">
                        <img src="${obj.strMealThumb}" alt="meal" class="w-full rounded-lg">
                        <h3 class="meal-name text-[32px] font-medium capitalize">${obj.strMeal}</h3>
                    </div>
                </div>
                <div class="w-full md:w-[60%]">
                    <h3 class="text-[32px] font-medium capitalize">Instructions</h3>
                    <p>${obj.strInstructions}</p>
                    <h4 class="text-[28px] font-bold mt-4">Area : <span class="font-medium">${obj.strArea}</span></h4>
                    <h4 class="text-[28px] font-bold mt-4">Category : <span class="font-medium">${obj.strCategory}</span></h4>
                    <h4 class="text-[28px] font-bold mt-4">Recipes : </h4>
                    <ul class="row m-3 gap-4">${ingredients}</ul>
                    ${tags}
                    <div class="flex text-white gap-x-2 mt-5">
                        <a href="${obj.strSource}" target='_blank' class="px-3 py-2 bg-[#198754] hover:bg-[#157347] block rounded-md shadow focus:shadow-green ">Source</a>
                    <a href="${obj.strYoutube}" target='_blank' class="px-3 py-2 bg-[#dc3545] hover:bg-[#bb2d3b] block rounded-md shadow focus:shadow-danger">Youtube</a>
                    </div>
                    


                </div>
    `;
    return data;
}

export function displayAllMealCategory(arr) {
    let newarr;
    if (arr.length > 20) {
        newarr = arr.slice(0, 20)
    } else {
        newarr = arr;
    }
    let data = ``;
    for (let i = 0; i < newarr.length; i++) {
        data +=
            `<div class=" w-full md:w-1/4  rounded-lg ">
                    <div class="inner m-3 rounded-lg relative group overflow-hidden cursor-pointer"
                        data-category="${newarr[i].strCategory}">
                        <img src="${newarr[i].strCategoryThumb}" alt="meal" class="w-full rounded-lg">
                        <div
                            class="w-full h-full bg-[#f9f6f6ca] rounded-lg flex flex-col justify-center text-center items-center absolute -bottom-full group-hover:bottom-0 duration-500">
                            <h3 class="capitalize text-[28px] font-medium">${newarr[i].strCategory}</h3>
                            <p class="line-clamp-2">${newarr[i].strCategoryDescription}</p>
                        </div>
                    </div>

                </div>`;
    }

    return data;
}

export function displayArea(arr) {
    let data = ``;
    for (let i = 0; i < arr.length; i++) {
        data +=
           `<div class=" w-full md:w-1/4  rounded-lg ">
                    <div class="inner m-3 cursor-pointer" data-area="${arr[i].strArea}">
                        <i class="fa-solid fa-house-laptop fa-4x "></i>
                            <h3 class="capitalize text-[28px] font-medium">${arr[i].strArea}</h3>
                    </div>
                   
                </div>
           `;
    }

    return data;
}
export function displayIngrediants(arr) {
    let data = ``;
    for (let i = 0; i < 20; i++) {
        data +=
           `<div class=" w-full md:w-1/4  rounded-lg ">
                    <div class="inner m-3 cursor-pointer" data-ingredaints="${arr[i].strIngredient}">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h3 class="capitalize text-[28px] font-medium">${arr[i].strIngredient}</h3>
                        <p class="line-clamp-3 ps-6">${arr[i].strDescription}</p>
                    </div>

                </div>
           `;
    }

    return data;
}