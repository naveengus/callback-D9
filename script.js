let node = document.querySelector(".root");
let h1 = document.createElement("h1");

setTimeout(() => {
  setTimeout(() => {
    h1.innerHTML = "";
    h1.innerHTML = 10;
    //   console.log(h1);
    setTimeout(() => {
      h1.innerHTML = "";
      h1.innerHTML = 9;
      setTimeout(() => {
        h1.innerHTML = "";
        h1.innerHTML = 8;
        setTimeout(() => {
          h1.innerHTML = "";
          h1.innerHTML = 7;
          setTimeout(() => {
            h1.innerHTML = "";
            h1.innerHTML = 6;
            setTimeout(() => {
              h1.innerHTML = "";
              h1.innerHTML = 5;
              setTimeout(() => {
                h1.innerHTML = "";
                h1.innerHTML = 4;
                setTimeout(() => {
                  h1.innerHTML = "";
                  h1.innerHTML = 3;
                  setTimeout(() => {
                    h1.innerHTML = "";
                    h1.innerHTML = 2;
                    setTimeout(() => {
                      h1.innerHTML = "";
                      h1.innerHTML = 1;
                      setTimeout(() => {
                        h1.innerHTML = "";
                        h1.innerHTML = "Happy independece day  ('-')!";
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

node.appendChild(h1);

// function display(a) {
//   console.log("the value" + a);
// }

// function add(a, b, display) {
//   console.log("the input " + a + "," + b);
//   display(a + b);
// }

// add(10, 5, display);

// let value = [1, 2, 3, 4, 5];

// function forEachOwn(value, callback) {
//   for (let i = 0; i < value.length; i++) {
//   }
// }

// forEachOwn(value, (e) => {
//   console.log("callback" + e);
// });

// usual
