function logtosign() {
    var item1 = document.getElementById('item1');
    var item2 = document.getElementById('item2');
    var item3 = document.getElementById('item3');

    // Toggle display property of item1
    // if (item1.style.display === 'none') {
        // item1.style.display = 'flex';
    // } else {
        item1.style.display = 'none';
    // }

    // Set display property of item2 to flex
    item2.style.display = 'flex';

    // Set justify-content property of item2 to flex-end
    item3.style.justifyContent = 'flex-end';
}
function signtolog() {
  var item1 = document.getElementById("item1");
  var item2 = document.getElementById("item2");
  var item3 = document.getElementById("item3");

  // Toggle display property of item1
  // if (item2.style.display === "none") {
    // item2.style.display = "flex";
  // } else {
    item2.style.display = "none";
  // }

  // Set display property of item2 to flex
  item1.style.display = "flex";

  // Set justify-content property of item2 to flex-end
  item3.style.justifyContent = "flex-start";
}