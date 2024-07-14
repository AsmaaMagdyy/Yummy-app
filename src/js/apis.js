export class Default{
    async showDefault() {
        let data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        let response = await data.json();
        return response;
     }
    
}


export class MealById{
    constructor(id){
        this.id=id;
    }
    async getApiMeal(){
        let data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.id}`);
        let response = await data.json();
        return response;
    }
}

export class SearchByName{
    constructor(name){
        this.name=name;
    }
    async getApiByName(){
        let api=`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.name}`
        
        let data = await fetch(api);
        let response = await data.json();
        return response;
    }
}

export class SearchByFirstLetter{
    constructor(liter){
        this.liter=liter;
    }
    async getApiByLiter(){
        let api;
        if(this.liter==''){
             api=`https://www.themealdb.com/api/json/v1/1/search.php?f=a`
        }else{
            api=`https://www.themealdb.com/api/json/v1/1/search.php?f=${this.liter}`
        }
         
        
        let data = await fetch(api);
        let response = await data.json();
        return response;
    }
}

export class AllMealCategory{
    async getApiAllMealCategory() {
        let data = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        let response = await data.json();
        return response;
     }
    
}

export class MealsByCategory{
    constructor(category){
        this.category=category
    }
    async getApiMealsByCategory(){
        let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.category}`);
        let response = await data.json();
        return response;
    }
}

export class Area{
    async getApiArea() {
        let data = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        let response = await data.json();
        return response;
     }
    
}

export class MealsByArea{
    constructor(area){
        this.area=area
    }
    async getApiMealsByArea(){
        let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${this.area}`);
        let response = await data.json();
        return response;
    }
}
export class Ingrediants{
    async getApiIngrediant() {
        let data = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
        let response = await data.json();
        return response;
     }
    
}

export class MealsByIngrediants{
    constructor(ingrediants){
        this.ingrediants=ingrediants;
    }
    async getApiMealsByIngrediants(){
        let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${this.ingrediants}`);
        let response = await data.json();
        return response;
    }
}