// Selecting DOM elements
const inputField = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const productList = document.getElementById("productList");
let editingItem = null;

// Add Product
addBtn.addEventListener("click", () => {
    const productName = inputField.value.trim();
    if (productName === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        <span class="productName">${productName}</span>
        <div>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        </div>
    `;
    productList.appendChild(li);
    inputField.value = "";
});

// Event Delegation for Edit & Delete
productList.addEventListener("click", function(event) {
    const target = event.target;
    const li = target.closest("li");

    // Delete Product
    if (target.classList.contains("deleteBtn")) {
        li.remove();
    }

    // Edit Product
    if (target.classList.contains("editBtn")) {
        startEditing(li);
    }
});

// Start Edit Mode
function startEditing(li) {
    if (editingItem) saveEdit(editingItem);

    editingItem = li;
    li.classList.add("editing");

    const nameSpan = li.querySelector(".productName");
    const currentText = nameSpan.textContent;

    nameSpan.innerHTML = `<input type="text" class="editInput" value="${currentText}">`;
    nameSpan.querySelector("input").focus();
}

// Save Edit
function saveEdit(li) {
    const inputBox = li.querySelector(".editInput");
    if (!inputBox) return;

    const updatedText = inputBox.value.trim();
    li.querySelector(".productName").textContent = updatedText || "Unnamed Product";
    li.classList.remove("editing");

    editingItem = null;
}

// Auto-Save when clicking outside
document.addEventListener("click", function(event) {
    if (editingItem && !editingItem.contains(event.target)) {
        saveEdit(editingItem);
    }
});
