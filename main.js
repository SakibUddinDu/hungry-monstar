
// = document.getElementById('')
const alternativeResponse = document.getElementById("alternative-response");
const search = () =>{
    const displayFood = document.getElementById('food').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${displayFood}`)
    .then(res => res.json())
    // .then(json=>console.log(json))
    .then(json=>showFoods(json))
    .catch((error)=>{
        alternativeResponse.innerText = "We didn't Find the Recipe You Searched for.Please, Try Another ....."
        document.getElementById('food').value ="";
    }) 
    
}


    const showFoods = foodItems =>{
        // console.log(foodItems)
       
        const foodItemsDiv = document.getElementById('foods');
        const  foodArray = foodItems.meals;
        foodArray.forEach(food => {
            const foodDiv = document.createElement('div')
            foodDiv.className = 'col-md-3 card'
            
         const  foodInfo = `
 
         
       
            
               <img src="${food.strMealThumb}" class="card-img-top" alt="...">
               <div class="card-body">
                <h4 class="card-text">${food.strMeal}</h4>
                <button class="btn" onclick="displayIngredients('${food.strMeal}')" >Ingredients</button>
               </div>
         



    

         
         `;
         foodDiv.innerHTML = foodInfo;
         foodItemsDiv.appendChild(foodDiv)
        });   
    }

    const displayIngredients = name =>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
        // console.log(name)
        fetch(url)
        .then(res =>res.json())
        // .then(data =>console.log(data.meals[0].strMeal))
        .then(data =>renderFoodData(data.meals[0]))
    }

    const renderFoodData= foodItem =>{
        const foodItemDiv= document.getElementById('foodIngredients');
        foodItemDiv.innerHTML = `
        <img id="ingredientImage" src="${foodItem.strMealThumb}" alt="...">
        <h1>${foodItem.strMeal}</h1>
        <h5>Ingredients</h5>
        <ul>
        <li><span class="check-icon">&#x2714;</span>${foodItem.strMeasure1} ${foodItem.strIngredient1}</li>
        <li><span class="check-icon">&#x2714;</span>${foodItem.strMeasure2}${foodItem.strIngredient2}</li>
        <li><span class="check-icon">&#x2714;</span>${foodItem.strMeasure3} ${foodItem.strIngredient3}</li>
        <li><span class="check-icon">&#x2714;</span>${foodItem.strMeasure4} ${foodItem.strIngredient4}</li>
        <li><span class="check-icon">&#x2714;</span>${foodItem.strMeasure5}${foodItem.strIngredient5}</li>
        <li><span class="check-icon">&#x2714;</span>${foodItem.strMeasure6}${foodItem.strIngredient6}</li>
      </ul>
        ,
        `
    }
    // const  foodItem= document.getElementsByClassName("card");
    // foodItem.addEventListener('click',function(){
    //     console.log('3')
   // })

   //  <img src="${food.strSource} class="card-img-top" alt="...">
        //  <h4 class="card-text">${food.strMeal}</h4>

// <img src="${food.strSource} class="card-img-top" alt="...">
        
    //     <div class="col-md-3" style="margin-top: 20px;" dataId="${meal.idMeal}">
    //     <div class=" card text-center "  style="background-color:#F8F7F5;border-radius: 2%; ">
    //         <img src="${meal.strMealThumb}" data-id="${meal.idMeal}" class="card-img-top " style="width: 100%; border-top-right-radius: 2%; border-top-left-radius: 2%; ">
    //         <div class="card-body " data-id="${meal.idMeal}" style="padding-top: 7px;padding-bottom: 7px; ">
    //             <h3 class="card-text text-center " data-id="${meal.idMeal}" style="font-size:17px">${meal.strMeal}</h3>
    //         </div>
    //     </div>
    // </div>