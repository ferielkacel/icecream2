let stocks = {
  fruits: ["oranges", "strawberry", "pinneppale"],
  others: ["sugar", "coco"],
  materials: ["cup", "spoon"],
  drinks: ["water", "ice"],
};
let shop_is_open = false;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (shop_is_open == true) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.fruits[2]} got picked`);

    await time(1000);
    console.log("production has started");

    await time(2000);
    console.log("fruit has been chopped");

    await time(1000);
    console.log(`${stocks.drinks[0]} and ${stocks.drinks[1]} added`);

    await time(1000);
    console.log("start the machine");

    await time(2000);
    console.log(`ice cream placed on ${stocks.materials[1]}`);

    await time(3000);
    console.log(`${stocks.others[0]} as toppings`);

    await time(2000);
    console.log("Serve Ice Cream");
  } catch (error) {
    console.log("customer left", error);
  } finally {
    console.log("day ended , shop is closed");
  }
}

kitchen();
