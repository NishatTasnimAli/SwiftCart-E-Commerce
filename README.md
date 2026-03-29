cat << 'EOF' > README.md
# 🛒 SwiftCart E-Commerce

SwiftCart is a simple e-commerce web application built using HTML, CSS, and Vanilla JavaScript. It fetches product data from an external API and displays them dynamically with category filtering, product details modal, and cart functionality.

---

## 🔗 Live Site
https://rad-gingersnap-777568.netlify.app/

---

## 🚀 Features

- Dynamic product loading from API  
- Category-based product filtering  
- Product details modal  
- Add to cart functionality  
- Cart count update  
- Fully responsive design  

---

## 🧰 Technologies Used

- HTML  
- CSS  
- JavaScript (Vanilla)  
- API: https://fakestoreapi.com  

---

## 📡 API Endpoints Used

- https://fakestoreapi.com/products  
- https://fakestoreapi.com/products/categories  
- https://fakestoreapi.com/products/category/{category}  
- https://fakestoreapi.com/products/{id}  

---

## 🧠 Questions & Answers

### 1) What is the difference between null and undefined?

Undefined is a value assigned to a variable when it is declared but not initialized.  
Null is an intentional assignment that represents no value.

---

### 2) What is the use of the map() function in JavaScript? How is it different from forEach()?

The map() function is used to iterate over an array and return a new array with modified elements.  
The forEach() function only loops through the array but does not return a new array.

---

### 3) What is the difference between == and ===?

== compares values only and performs type conversion if necessary.  
=== compares both value and data type strictly.

Example:  
5 == "5" → true  
5 === "5" → false  

---

### 4) What is the significance of async/await in fetching API data?

Async/await makes asynchronous code easier to read and manage.  
It allows writing asynchronous operations in a synchronous style and helps handle promises more effectively.

---

### 5) Explain the concept of Scope in JavaScript (Global, Function, Block).

Scope determines the accessibility of variables.

- Global Scope: Accessible from anywhere in the code  
- Function Scope: Accessible only within a function  
- Block Scope: Accessible only within a block (used with let and const)

---

## ⚡ Future Improvements

- Store cart data in LocalStorage  
- Improve UI/UX design  
- Add loading spinner  
- Enhance cart summary section  

EOF
