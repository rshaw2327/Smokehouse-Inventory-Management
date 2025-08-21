import data from "./data.js";
console.log(data);

window.addEventListener("load", () => {
  const statCont = document.querySelector(".stat-cont");
  const catTbodyCont = document.querySelector(".cat-tbody-cont");
  const proTbodyCont = document.querySelector(".pro-tbody-cont");
  const stockTbodyCont = document.querySelector(".stock-tbody-cont");
  const entries = Object.entries(data);

  // console.log(Object.entries(data))
  let statHtml = "";
  entries.forEach((entry) => {
    statHtml += `
        <div class="stat">
            <h3 class="name">${entry[0]}</h3>
            <p class="value">${entry[1].length}</p>
        </div>`;
  });
  statCont.innerHTML = statHtml;

  let catTbodyHtml = "";

  data.categories.forEach((cat, index) => {
    catTbodyHtml += `
         <tr>
            <td>${index + 1}</td>
            <td>${cat.id}</td>
            <td class="capitalize">${cat.name}</td>
        </tr>`;
  });
  catTbodyCont.innerHTML = catTbodyHtml;

  let processHtml = "";

  data.process.forEach((process, index) => {
    processHtml += ` <tr>
                            <td>${process.id}</td>
                            <td>${process.categoryId}</td>
                            <td>${process.type}</td>
                            <td>${process.where}</td>
                            <td>${process.startTime}</td>
                            <td>${process.timer}</td>
                            <td class="status">${process.status}</td>
                            <td class="quantity">${process.quantity}</td>
                            <td>${process.stockId}</td>
                             <td>
            <button class="inc-process">+Q</button>
            <button class="dec-process">-Q</button>
            <button class="toggle-status">Done/Undo</button>
          </td>
                        </tr>
        `;
  });

  proTbodyCont.innerHTML = processHtml;

  let stockHtml = "";

  data.stock.forEach((stocks, index) => {
    stockHtml+= `
         <tr>
            <td>${stocks.id}</td>
            <td>${stocks.categoryId}</td>
            <td class="quantity">${stocks.quantity}</td>
            <td>${stocks.unit}</td>
            <td>
            <button class="decrement">-</button>
            <button class="increment">+</button>
          </td>
        </tr>
        `;
  });
  stockTbodyCont.innerHTML = stockHtml;

  


});
