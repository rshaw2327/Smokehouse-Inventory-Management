import data from "./data.js";
console.log(data);

window.addEventListener("load", () => {
  const statCont = document.querySelector(".stat-cont");
  const tableCont = document.querySelector(".table-cont");
  const closeAddCatBtn = document.querySelector(".close-add-cat-btn")
  const modalWrapper = document.querySelector(".modal-wrapper")



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

  // Category table
  function categoryTable() {
    let catTbodyHtml = `
      <div class="table-heading">
        <h1>Categories Table</h1>
        <button class="add-cat-btn add-btn">Add New Category</button>
      </div>
      <table class="categories-table">
        <thead>
            <tr>
                <th>Sr. no</th>
                <th>Category ID</th>
                <th>Category Name</th>
                <th>Actions</th>
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
            <td>
                <button class="edit-btn edit-cat"><i class="fa-solid fa-pencil"></i></button>
                <button class="del-cat del-btn"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>`;
    });
    catTbodyHtml += `</tbody>
    </table>`;
    tableCont.innerHTML = catTbodyHtml;
    const addCatBtn = document.querySelector(".add-cat-btn")
    addCatBtn.addEventListener("click",openModal)
  }

  // Process table
  function processTable() {
    let processHtml = `
    <div class="table-heading">
        <h1>Process Table</h1>
        <button class="add-process-btn add-btn">Add New Process</button>
      </div>
      <table class="process-table">
                   
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
                            <th>Actions</th>

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
      }" data-timer="${process.timer}">Loading...</td>
      <td class="status">${process.status}</td>
      <td class="quantity">${process.quantity}</td>
      <td>${process.stockId}</td>
      <td>
          <button class="edit-btn edit-cat"><i class="fa-solid fa-pencil"></i></button>
          <button class="del-cat del-btn"><i class="fa-solid fa-trash"></i></button>
      
      </td>
    </tr>

        `;
    });

    processHtml += `   </tbody>

       </table>`;

    tableCont.innerHTML = processHtml;
    const addProcessBtn = document.querySelector(".add-process-btn")
    addProcessBtn.addEventListener("click",openModal)
    createCountdowns();
  }

  // Create Countdown
  function createCountdowns() {
    let cds = document.querySelectorAll("td[id^='cd']");
    cds.forEach((cd) => {
      let startDate = new Date(cd.dataset.starttime).getTime();
      let endDate = startDate + Number(cd.dataset.timer * 60 * 1000);
      let myCountDown = setInterval(() => {
        let distance = endDate - new Date().getTime();
        if (distance < 1) {
          clearInterval(myCountDown);
          console.log("hello");
          cd.innerHTML = "Finished";
        } else {
          let hours = Math.floor(distance / (1000 * 60 * 60));
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);

          cd.innerHTML = `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        }
      }, 1000);
    });
  }

  // Stock Table
  function stockTable() {
    let stockHtml = `
    <div class="table-heading">
        <h1>Stock Table</h1>
        <button class="add-stock-btn add-btn">Add Stock</button>
      </div>
    <table class="stock-table">
                    <thead>
                        <th>id</th>
                        <th>Category Name</th>
                        <th>quantity</th>
                        <th>Actions</th>
                    </thead>
                    <tbody class="stock-tbody-cont">
                    `;

    data.stock.forEach((stocks, index) => {
      stockHtml += `
         <tr>
            <td>${stocks.id}</td>
            <td>${getCatNameByCatId(stocks.categoryId)}</td>
            <td class="quantity">${stocks.quantity} ${stocks.unit}</td>
            <td>
              <button class="edit-btn edit-cat"><i class="fa-solid fa-pencil"></i></button>
              <button class="del-cat del-btn"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
        `;
    });
    stockHtml += ` </tbody>
                </table>`;
    tableCont.innerHTML = stockHtml;
    const addStockBtn = document.querySelector(".add-stock-btn")
    addStockBtn.addEventListener("click",openModal)
    }

  function getCatNameByCatId(categoryId) {
    let item = data.categories.find((cat) => {
      return cat.id == categoryId;
    });
    return item.name;
  }

  function openModal(){
    modalWrapper.classList.add("visible")

  }

  function closeModal(){
    modalWrapper.classList.remove("visible")
    
   
  }

   closeAddCatBtn.addEventListener("click",closeModal)

});
