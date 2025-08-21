const data = {
    categories: [
        {
            id:1,
            name:"whole chicken"
        },
        {
            id:2,
            name:"chicken thighs"
        },
        {
            id:3,
            name:"chicken wings"
        },
        {
            id:4,
            name:"pork ribs"
        },
        {
            id:5,
            name:"pork belly strips"
        },
        {
            id:6,
            name:"beef ribs"
        },
        {
            id:7,
            name:"brisket"
        },
        {
            id:8,
            name:"sausage jalepeno cheese"
        },
        {
            id:9,
            name:"boeworse cheese"
        },
        {
            id:10,
            name:"mac & cheese"
        },
        {
            id:11,
            name:"coleslaw"
        },
        {
            id:12,
            name:"chunky fries"
        },
        {
            id:13,
            name:"corn on the cob"
        },
        {
            id:14,
            name:"Amarulla cheese cake"
        },
        {
            id:15,
            name:"churros"
        },
    ],

    stock: [
        {
            id:1,
            categoryId:11,
            quantity:5,
            unit: "boxes"
        },
         {
            id:2,
            categoryId:1,
            quantity:4,
            unit: "pcs"
        },
        {
            id:3,
            categoryId:6,
            quantity:20,
            unit: "kgs"
        },{
            id:4,
            categoryId:4,
            quantity:2,
            unit: "boxes"
        },
        {
            id:5,
            categoryId:5,
            quantity:10,
            unit: "kgs"
        },
        {
            id:5,
            categoryId:3,
            quantity:10,
            unit: "kgs"
        },
          {
            id:6,
            categoryId:7,
            quantity:30,
            unit: "kgs"
        },
        

    ],

    process: [
        {
            id:1,
            categoryId:6,
            type:"marinade",
            where:"souved",
            startTime:"0700",
            timer:"480",
            status:"in-process",
            quantity:"2",
            stockId:3
        },
        {
            id:2,
            categoryId:3,
            type:"marinade",
            where:"souved",
            startTime:"0500",
            timer:"300",
            status:"in-process",
            quantity:"3",
            stockId:3
        },
         {
            id:3,
            categoryId:7,
            type:"smoked",
            where:"smoker",
            startTime:"0500",
            timer:"720",
            status:"in-process",
            quantity:"10",
            stockId:6
        },


    ]


}

export default data;