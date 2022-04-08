    let form = document.querySelector(".form");
    let inputNumber = document.querySelector(".input-number");
    let inputText = document.querySelector(".input-text");
    let inputSelect = document.querySelector(".input-select");
    let create = document.querySelector(".create");
    let results = document.querySelector(".results");

    form.style.cssText = `display:flex; 
    flex-direction:column;
    align-item:center;
    background-color: #f47120;  
    width: 350px;
    height: 300px;  
    font-size: 16px;
    padding: 40px 40px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    border-radius: 30px; 
    margin:auto;
    margin-top:100px;
    `;
    inputNumber.style.cssText = `
    font-family: 'Fuzzy Bubbles', cursive;
    padding:15px; 
    border-radius:30px;
    width: 90%;
    margin-bottom: 25px;
    outline: none;
    border: none;
    `;
    inputText.style.cssText = `
    font-family: 'Fuzzy Bubbles', cursive;
    padding:15px; 
    border-radius:30px;
    width: 90%;
    margin-bottom: 25px;
    outline: none;
    border: none;
    `;
    inputSelect.style.cssText = ` 
    font-family: 'Fuzzy Bubbles', cursive;
    padding:15px; 
    border-radius:30px;
    width: 100%;
    margin-bottom: 50px;
    outline: none;
    border: none;
    `;
    create.style.cssText = `
        font-family: 'Fuzzy Bubbles', cursive;
    width:60% ;padding:15px; 
    border-radius:20px;
    outline: none;
    border: none;
    font-size:20px;
    color: #f47120; 
    background-color: #fff; 
    margin: auto;
    `;
    results.style.cssText = `margin-top:100px;     
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    `;
    function createElement() {
    results.innerHTML = " ";
    for (let i = 0; i < inputNumber.value; i++) {
    let element = document.createElement(`${inputSelect.value}`);
    element.textContent = inputText.value;
    element.title = "Element";
    element.id = `id-${i + 1}`;
    element.className = "elements";
    results.appendChild(element);
    }
    inputNumber.value = "";
    inputText.value = "";
    }
    create.addEventListener("click", (e) => {
    createElement();
    });
    form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    });
