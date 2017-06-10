//Featured Items
$(document).ready(
  function() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var popularArr = JSON.parse(this.responseText);
        popular(popularArr);
      }
    };
    xmlhttp.open("GET", "books.json", true);
    xmlhttp.send();


    function popular(arr) {
      var popular = "";
      var i;
      for (i = 0; i < arr.length; i++) {
        if (arr[i].popularity == "high") {
          popular += '<div class="col-md-3 text-center"><br><div class="thumbnail"><br><a href="underDeveloping.html"><br><img class="img-responsive" src="' + arr[i].image + '" alt="' + arr[i].name + '"><br><p>' + arr[i].name + '</p></a></div></div>';
        }
      }
      document.getElementById("feauredBooks").innerHTML = popular;
    }
  }
);

//Onsale Items
$(document).ready(
  function() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var onsaleArr = JSON.parse(this.responseText);
        onsale(onsaleArr);
      }
    };
    xmlhttp.open("GET", "books.json", true);
    xmlhttp.send();

    function onsale(arr) {
      var onsale = "";
      var i;
      for (i = 0; i < arr.length; i++) {
        if (arr[i].onsale == "yes") {
          onsale += '<div class="col-md-3 text-center"><br><div class="thumbnail"><br><a href="underDeveloping.html"><br><img class="img-responsive" src="' + arr[i].image + '" alt="' + arr[i].name + '"><br><p>' + arr[i].name + '</p></a></div></div>';
        }
      }
      document.getElementById("onsaleBooks").innerHTML = onsale;
    }
  }
);
