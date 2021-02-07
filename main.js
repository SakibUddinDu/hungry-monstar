
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
        console.log(foodItems)
        const  foodArray = foodItems.meals;
        const foodItemsDiv = document.getElementById('foods');
        foodArray.forEach(food => {
            let dataItem = '';
            dataItem += `
            
            <div class="card" style="width: 18rem;">
                <img src="${food.strSource} class="card-img-top" alt="...">
                <div class="card-body">
                 <h4 class="card-text">${food.strMeal}</h4>
                </div>
            </div>
 
            foodItemsDiv.innerHTML = dataItem;
            foodItemsDiv.innerHTML = dataItem;
            foodItemsDiv.appendChild();
            // foodItemsDiv.appendChild(foodDiv);    
            // // console.log(foodInfo);  
            });
           
            
    }
           
    // }


        // <p>${food.strIngredient1}</p>
        // <p>${food.strIngredient2}</p>
        // <p>${food.strIngredient3}</p>
        // <p>${food.strIngredient4}</p>
        // <p>${food.strIngredient5}</p>
        // <p>${food.strIngredient6}</p>
        // <p>${food.strIngredient7}</p>
        
                 
        // const searchInput = document.getElementById('search-input');
        // const detailsArea = document.getElementById('details-area');
        // const errorContent = document.getElementById('error-area');
        
        // // Search area
        // const clickToSearch = () => {
        //   const itemsName = searchInput.value;
        //   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${itemsName}`)
        //     .then((res) => res.json())
        //     .then((data) => {
        //       const foodItems = document.getElementById('food-items');
        //       let dataItem = '';
        
        //       if (itemsName === '') {
        //         errorContent.innerHTML = `
        //           <div class="error-content">
        //             <h2>The search box cannot be empty.</h2>
        //             <button onclick="closeBtn()" class="close">X</button>
        //           </div>
        //         `;
        
        //         errorContent.style.display = 'block';
        //         foodItems.innerHTML = '';
        //       } else if (data.meals) {
        //         data.meals.forEach((item) => {
        //           dataItem += `
        //           <div onclick="itemDetails('${item.strMeal}')" class="food-item"> 
        //             <img src="${item.strMealThumb}" />
        //             <h4>${item.strMeal}</h4>
        //           </div>`;
        //         });
        
        //         foodItems.innerHTML = dataItem;
        //       } else {
        //         errorContent.innerHTML = `
        //           <div class="error-content">
        //             <h2>Sorry, We do not have this item at this time.</h2>
        //             <button onclick="closeBtn()" class="close">X</button>
        //           </div>
        //         `;
        
        //         errorContent.style.display = 'block';
        //         foodItems.innerHTML = '';
        //       }
        //       detailsArea.style.display = 'none';
        //     });
        //   searchInput.value = '';
        // };
        
        // 1item click to show Deatils
        // const itemDetails = (itemName) => {
        //   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${itemName}`)
        //     .then((res) => res.json())
        //     .then((data) => {
        //       const itemDetailsArea = document.getElementById('item-details');
        //       const mealsItem = data.meals[0];
        //       itemDetailsArea.innerHTML = `
        //         <div class="details-img">
        //           <img
        //             src="${mealsItem.strMealThumb}"
        //             alt="${mealsItem.strMeal}"
        //           />
        //         </div>
        //         <h2>${mealsItem.strMeal}</h2>
        //         <h4>Ingredient</h4>
        //         <ul>
        //           <li><span class="check-icon">&#x2714;</span>${mealsItem.strMeasure1} ${mealsItem.strIngredient1}</li>
        //           <li><span class="check-icon">&#x2714;</span>${mealsItem.strMeasure2} ${mealsItem.strIngredient2}</li>
        //           <li><span class="check-icon">&#x2714;</span>${mealsItem.strMeasure3} ${mealsItem.strIngredient3}</li>
        //           <li><span class="check-icon">&#x2714;</span>${mealsItem.strMeasure4} ${mealsItem.strIngredient4}</li>
        //           <li><span class="check-icon">&#x2714;</span>${mealsItem.strMeasure5} ${mealsItem.strIngredient5}</li>
        //           <li><span class="check-icon">&#x2714;</span>${mealsItem.strMeasure6} ${mealsItem.strIngredient6}</li>
        //         </ul>
        //         <button onclick="closeBtn()" class="close">X</button>
        //       `;
        
        //       detailsArea.style.display = 'block';
        //     });
        // };
        
        // // Clock to close button
        // const closeBtn = () => {
        //   detailsArea.style.display = 'none';
        //   errorContent.style.display = 'none';
        // };
        