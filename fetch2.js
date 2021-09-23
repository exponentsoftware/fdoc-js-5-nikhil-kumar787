//Find the 10 most largest countries

const fetch = require("node-fetch");

async function getData() {
  let api = `https://restcountries.com/v2/all`;

  await fetch(api)
    .then((res) => res.json())

    .then((res2) => {
      let obj = res2;

      let arr = [];

      let arr2 = [];

      for (let i of obj) {
        let newObj = {};
        newObj["country"] = i.name;
        newObj["area"] = i.area;
        arr2.push(newObj);
      }

      // }
      let sorted_arry = arr2.sort(function (x, y) {
        return x.area - y.area;
      });
      //top 15 array
      let top_10 = [];
      let rev = sorted_arry.reverse();
      for (let i = 0; i < 10; i++) {
        top_10.push(rev[i]);
      }
      console.log(top_10);
    });
}
getData();
