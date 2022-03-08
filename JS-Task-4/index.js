function productDetail() {
    let products = {
        "Electronics": {
            "Television": [
                {
                    "id": "PR001",
                    "name": "MAX-001",
                    "brand": "Samsung"
                },
                {
                    "id": "PR002",
                    "name": "BIG-301",
                    "brand": "Bravia"
                },
                {
                    "id": "PR003",
                    "name": "APL-02",
                    "brand": "Apple"
                }
            ],
            "Mobile": [
                {
                    "id": "PR004",
                    "name": "GT-1980",
                    "brand": "Samsung"
                },
                {
                    "id": "PR005",
                    "name": "IG-5467",
                    "brand": "Motorola"
                },
                {
                    "id": "PR006",
                    "name": "IP-8930",
                    "brand": "Apple"
                }
            ]
        },
        "Jewelry": {
            "Earrings": [
                {
                    "id": "PR007",
                    "name": "ER-001",
                    "brand": "Chopard"
                },
                {
                    "id": "PR008",
                    "name": "ER-002",
                    "brand": "Mikimoto"
                },
                {
                    "id": "PR009",
                    "name": "ER-003",
                    "brand": "Bvlgari"
                }
            ],
            "Necklaces": [
                {
                    "id": "PR010",
                    "name": "NK-001",
                    "brand": "Piaget"
                },
                {
                    "id": "PR011",
                    "name": "NK-002",
                    "brand": "Graff"
                },
                {
                    "id": "PR012",
                    "name": "NK-003",
                    "brand": "Tiffany"
                }
            ]
        }
    }


    let htmltext = "<tr><th>Category</th><th> Subcategory</th><th>ID</th><th>Name</th><th>Brand</th></tr>";
   

    for (i in products) {

        for (j in products[i]) {

            for (k in products[i][j]) {

                htmltext += `<tr>
                <td>${i}</td>
                <td>${j}</td>
                <td>${products[i][j][k].id}</td>
                 <td> ${products[i][j][k].name} </td>
                 <td> ${products[i][j][k].brand}</td>
                 </tr>`;

            }
        }
    }

 
   

    document.getElementById("table1").innerHTML = htmltext;

    // all Mobile product
   
    htmltext = "<tr><th>Category</th><th> Subcategory</th><th>ID</th><th>Name</th><th>Brand</th></tr>";
    for (i in products) {

        for (j in products[i]) {

            for (k in products[i][j]) {
                if(j=='Mobile')
                htmltext += `<tr><td>${i}</td>
                <td>${j}</td>
                <td>${products[i][j][k].id}</td>
                 <td> ${products[i][j][k].name} </td>
                 <td> ${products[i][j][k].brand}</td>
                 </tr>`;

            }
        }
    }

  
    document.getElementById("table2").innerHTML = htmltext;


    // all product of sumsang

    

    htmltext = "";
    for (i in products) {

        for (j in products[i]) {
          
            for (k in products[i][j]) {
                if(products[i][j][k].brand=='Samsung')
                {
                htmltext +=`<tr>
                <td>Product Id:</td>
                <td> ${products[i][j][k].id}</td>
                </tr> 
                <tr>
                <td>Brand:</td>
                <td> ${products[i][j][k].brand }</td>
                </tr>
                <tr>
                <td>SubCategory:<td>${j}</td>
                </tr>
                <tr><td>Category:</td>
                <td>${i}<td>
                </tr>`;
                
                }

            }
        }
    }

    document.getElementById("table3").innerHTML = htmltext;

    htmltext = "<tr><th>Category</th><th> Subcategory</th><th>ID</th><th>Name</th><th>Brand</th></tr>";
    for (i in products) {

        for (j in products[i]) {

            for (k in products[i][j]) {

                 if(products[i][j][k].id!="PR003"){
                htmltext += `<tr><td>${i}</td>
                <td>${j}</td>
                <td>${products[i][j][k].id}</td> 
                <td> ${products[i][j][k].name} </td>
                <td> ${products[i][j][k].brand}</td>
                </tr>`;}
                 else
                 {
                     delete products[i][j][k];
                 }
            }
        }
    }
       document.getElementById("table4").innerHTML=htmltext;

       htmltext = "<tr><th>Category</th><th> Subcategory</th><th>ID</th><th>Name</th><th>Brand</th></tr>";
       for (i in products) {
   
           for (j in products[i]) {
   
               for (k in products[i][j]) {
   
                    if(products[i][j][k].id=="PR002")
                       products[i][j][k].name="BIG-555";
                   htmltext += `<tr><td>${i}</td>
                   <td>${j}</td>
                   <td>${products[i][j][k].id}</td>
                    <td> ${products[i][j][k].name} </td>
                    <td> ${products[i][j][k].brand}</td>
                    </tr>`;
                   
               }
           }
       }

       document.getElementById("table5").innerHTML=htmltext;

}
productDetail();