//Category Book Items
var bookString = '<div id="myTabContent" class="tab-content">';

$(document).ready(
  function() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var bookARR = JSON.parse(this.responseText);
        category(bookARR);
      }
    };
    xmlhttp.open("GET", "books.json", true);
    xmlhttp.send();

    function category(arr) {
      bookString += '<div class="tab-pane fade active in" id="All"><div class="row"><div class="col-lg-12"><h2 class="page-header">All</h2></div>';

      // var mybutton = '<button class="btn btn-danger my-cart-btn" data-id=' + arr[i].id + ' data-name=' + arr[i].name + ' data-summary=' + arr[i].description + ' data-price=' + arr[i].price + ' data-quantity="1" data-image=' + arr[i].image + '>Add to cart</button>';
      //
      //
      // console.log(mybutton);

      for (var i = 0; i < arr.length; i++) {
        bookString += '<div class="col-md-4 text-center"><div class="thumbnail"><img class="img-responsive" src="' + arr[i].image + '" alt=""><div class="caption"><h3>' + arr[i].name + '</h3><p style="max-height: 100px; overflow: auto;">' + arr[i].description + '</p><h3 class="text-primary">$ ' + arr[i].price + '</h3>' + '<button class="btn btn-danger my-cart-btn" data-id="' + arr[i].id + '"data-name="' + arr[i].name + '" data-summary=" " data-price="' + arr[i].price + '" data-quantity="1" data-image="' + arr[i].image + '">Add to cart</button>' + '</div></div></div>';
      }
      bookString += '</div></div>';

      var categoryARR = ["Fiction", "Education", "Health", "Travel", "Sports"];
      for (var n = 0; n < categoryARR.length; n++) {
        bookString += '<div class="tab-pane fade" id="' + categoryARR[n] + '"><div class="row"><div class="col-lg-12"><h2 class="page-header">' + categoryARR[n] + '</h2></div>';

        for (var i = 0; i < arr.length; i++) {
          if (arr[i].category == categoryARR[n]) {
            bookString += '<div class="col-md-4 text-center"><div class="thumbnail"><img class="img-responsive" src="' + arr[i].image + '" alt=""><div class="caption"><h3>' + arr[i].name + '</h3><p style="max-height: 100px; overflow: auto;">' + arr[i].description + '</p><h3 class="text-primary">$ ' + arr[i].price + '</h3>' + '<button class="btn btn-danger my-cart-btn" data-id="' + arr[i].id + '"data-name="' + arr[i].name + '" data-summary=" " data-price="' + arr[i].price + '" data-quantity="1" data-image="' + arr[i].image + '">Add to cart</button>' + '</div></div></div>';
          }
        }
        bookString += '</div></div>';
      }
      bookString += '</div>';
      document.getElementById("bookCategory").innerHTML = bookString;
    }
  }
);
