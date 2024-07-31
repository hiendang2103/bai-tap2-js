function TinhTong() {
  var giatien = parseInt(document.getElementById("price").value);
  var soluong = parseInt(document.getElementById("quantity").value);
  var sum;

  sum = giatien * soluong;
  document.getElementById("sum-price1").value = sum;
}

function myFunction() {
  var giatien = parseInt(document.getElementById("price").value);
  var soluong = parseInt(document.getElementById("quantity").value);
  var khachtra = parseInt(document.getElementById("total-price").value);
  var thanhtoan = parseInt(document.getElementById("result").value);
  var sum;

  sum = giatien * soluong;
  thanhtoan = khachtra - sum;
  document.getElementById("result").innerHTML = thanhtoan;
}
