$(".searchbox").keypress(function(){
  var search = $(".searchbox");
  alert(search.val());
  var a = "r.e.t.";
  switch (a) {
    case "r":
    case "r.":
    case "r.e":
    case "r.e.":
    case "r.e.t":
    case "r.e.t.":
      //Hide all non R.E.T. Robots
      $("butler.bot").toggleClass("hidden");
      $("megaMan").toggleClass("hidden");
      break;
    case "b":
    case "bu":
    case "but":
    case "butl":
    case "butle":
    case "butler":
    case "butler.":
    case "butler.b":
    case "butler.bo":
    case "butler.bot":
      //Hide all non Butler.Bot Robots
      $("ret").toggleClass("hidden");
      $("megaMan").toggleClass("hidden");
      break;
    case "m":
    case "me":
    case "meg":
    case "mega":
    case "mega ":
    case "mega m":
    case "mega ma":
    case "mega man":
      //Hide all non Mega Man Robots
      $("butler.bot").toggleClass("hidden");
      $("ret").toggleClass("hidden");
      break;
    default:
      //remove  all Robots
      $("butler.bot").toggleClass("hidden");
      $("ret").toggleClass("hidden");
      $("megaMan").toggleClass("hidden");
      break;
  }
});
