import data from "./data.js";
console.log(data);

window.addEventListener("load", () => {
  const statCont = document.querySelector(".stat-cont");
  const tableCont = document.querySelector(".table-cont");
  processTable();

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

  const statEls = document.querySelectorAll(".stat");
  statEls[0].classList.add("active");

  statEls.forEach((statEl) => {
    statEl.addEventListener("click", (e) => {
      statEls.forEach((sEl) => {
        sEl.classList.remove("active");
      });
      statEl.classList.add("active");

      let statName = statEl.querySelector(".name").innerHTML;
      if (statName == "process") {
        processTable();
      } else if (statName == "categories") {
        categoryTable();
      } else if (statName == "stock") {
        stockTable();
      }
    });
  });

  function categoryTable() {
    let catTbodyHtml = `
     <table class="categories-table">
                    <caption>
                        <h1> Categories Table</h1>
                    </caption>

                    <thead>
                        <tr>
                            <th>Sr. no</th>
                            <th>Category ID</th>
                            <th>Category Name</th>
                        </tr>
                    </thead>
                    <tbody class="cat-tbody-cont">
                   
  `;

    data.categories.forEach((cat, index) => {
      catTbodyHtml += `
         <tr>
            <td>${index + 1}</td>
            <td>${cat.id}</td>
            <td class="capitalize">${cat.name}</td>
        </tr>`;
    });
    catTbodyHtml += `</tbody>
    </table>`;
    tableCont.innerHTML = catTbodyHtml;
  }

  function processTable() {
    let processHtml = `
      <table class="process-table">
                    <caption>
                        <h1>Process Table</h1>
                    </caption>

                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Category Name</th>
                            <th>type</th>
                            <th>where</th>
                            <th>countdown</th>
                            <th>status</th>
                            <th>quantity</th>
                            <th>stockID</th>

                        </tr>
                    </thead>
                    <tbody class="pro-tbody-cont">`;

    data.process.forEach((process, index) => {
      processHtml += ` 
    <tr>
      <td>${process.id}</td>
      <td>${getCatNameByCatId(process.categoryId)}</td>
      <td>${process.type}</td>
      <td>${process.where}</td>
      <td class="cd"  id="cd-${process.id}" data-starttime="${
        process.startTime
      }" data-timer="${process.timer}"></td>
      <td class="status">${process.status}</td>
      <td class="quantity">${process.quantity}</td>
      <td>${process.stockId}</td>
    </tr>

        `;
    });

    processHtml += `   </tbody>

       </table>`;

    tableCont.innerHTML = processHtml;
    createCountdowns();
  }

  function createCountdowns() {
    let cds = document.querySelectorAll("td[id^='cd']");
    cds.forEach((cd) => {
      let startDate = new Date(cd.dataset.starttime).getTime();
      let endDate = startDate + Number(cd.dataset.timer * 60 * 1000);
      let remainingTime = endDate - new Date().getTime();
      if(remainingTime < 1){
        cd.innerHTML = "Finished"
      } else {
        cd.innerHTML = ((endDate - new Date().getTime()) / 1000)/60;

        console.log(cd)

        var distance = countDownDate - now;


  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      }

    });
  }

  function stockTable() {
    let stockHtml = `
    <table class="stock-table">
                    <caption>
                        <h1>Stock Table</h1>
                    </caption>
                    <thead>
                        <th>id</th>
                        <th>Category ID</th>
                        <th>quantity</th>
                        <th>unit</th>

                    </thead>
                    <tbody class="stock-tbody-cont">
                    `;

    data.stock.forEach((stocks, index) => {
      stockHtml += `
         <tr>
            <td>${stocks.id}</td>
            <td>${stocks.categoryId}</td>
            <td class="quantity">${stocks.quantity}</td>
            <td>${stocks.unit}</td>
        </tr>
        `;
    });
    stockHtml += ` </tbody>
                </table>`;
    tableCont.innerHTML = stockHtml;
  }

  function getCatNameByCatId(categoryId) {
    let item = data.categories.find((cat) => {
      return cat.id == categoryId;
    });
    return item.name;
  }
});
