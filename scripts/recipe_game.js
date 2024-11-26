// Game 2: 음식 만들기 게임
let selectedIngredients = [];

function selectIngredient(ingredient) {
    selectedIngredients.push(ingredient);
    updateIngredientList();
}

function updateIngredientList() {
    const selectedContainer = document.getElementById('selected-ingredients');
    selectedContainer.innerHTML = '';
    selectedIngredients.forEach(ingredient => {
        const ingredientDiv = document.createElement('div');
        ingredientDiv.classList.add('order-item');
        ingredientDiv.textContent = ingredient;
        selectedContainer.appendChild(ingredientDiv);
    });
}

function resetIngredients() {
    selectedIngredients = [];
    updateIngredientList();
}