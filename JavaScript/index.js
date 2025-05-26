let input = document.getElementById("itemInput");
let button = document.getElementById("addItemButton");
let list = document.getElementById("shoppingList")

function addArticle() {
    let article = input.value.trim();

    if (article !== ""){
        let li = document.createElement("li");
        li.textContent = article;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Supprimer l'article";

        deleteButton.addEventListener("click", () => {
            list.removeChild(li);
        });

        li.appendChild(deleteButton);
        list.appendChild(li);

        input.value = "";
        input.focus();
    }
}

button.addEventListener("click", addArticle);

input.addEventListener("keydown", (e) => {
    if ( e.key === "Enter"){
        addArticle();
    }
})