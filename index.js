var totalAmount = 0;
var orders = [];

function addToOrder(dish, price) {
  var qty = parseInt(prompt("Enter quantity for " + dish));
  if (!qty || qty == "0") {
    alert("please.. Enter Quantity for " + dish);
  } else if (isNaN(qty)) {
    alert("Please.. Enter digits Only");
  } else if (qty > 100) {
    alert("Sorry.. Right Now It is not possible for us");
  } else {
    totalAmount += price * qty;
    orders.push({ dish, qty, price });

    // Display the confirmation button
    var confirmationDiv = document.getElementById("confirmation");
    confirmationDiv.innerHTML =
      '<button class="confirm-button" onclick="confirmOrder()">Confirm Order</button>';

    document.getElementById("moving").style.position = "relative";
    document.getElementById("moving").style.bottom = "2rem";
  }
}

function confirmOrder() {
  document.getElementById("navbar").style.display = "none";
  document.getElementById("container").style.display = "none";
  document.getElementById("starter").style.display = "none";
  document.getElementById("Main-course").style.display = "none";
  document.getElementById("Desserts").style.display = "none";
  document.getElementById("moving").style.display = "none";
  document.body.style.backgroundImage =
    "url(https://th.bing.com/th/id/R.ecae54fdeb161ea6f3b5f144c2387921?rik=OIM1q1d3gFaVRw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-GOFmGKTSmNs%2fUh90_bqP-2I%2fAAAAAAAAFuA%2fVCQZ3wGMiD0%2fs640%2fBackground-In-Text4.jpg&ehk=E7wbE%2b8eI4Uxt3GgHadxeBcaRF5W427bx%2fCbGv28tSg%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1)";

  document.getElementById("confirmation").innerHTML = "";

  document.getElementById("orderList").classList.add("list");

  var orderList = document.getElementById("orderList");
  orderList.innerHTML = "<h2>Bhukkad.com</h2><h3>Restaurant Bill</h3>"; // Clear any existing content
  orders.forEach((order) => {
    orderList.innerHTML += `<p><span>${order.dish}</span>:- ${order.price} x ${
      order.qty
    } = Rs.${order.price * order.qty}/-</p>`;
  });
  orderList.innerHTML += `<p><br><strong>Total Bill: Rs.${totalAmount}/-</strong></p>`;
}
