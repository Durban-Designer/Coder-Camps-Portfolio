function search() {
  var searchD = $("#searchbox").val().toLowerCase();
  switch (searchD) {
    case "r":
    case "r.":
    case "r.e":
    case "r.e.":
    case "r.e.t":
    case "r.e.t.":
      //Hide all non R.E.T. Robots
      $("#ret").removeClass("hidden");
      $("#butler").addClass("hidden");
      $("#megaMan").addClass("hidden");
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
      $("#butler").removeClass("hidden");
      $("#ret").addClass("hidden");
      $("#megaMan").addClass("hidden");
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
      $("#megaMan").removeClass("hidden");
      $("#butler").addClass("hidden");
      $("#ret").addClass("hidden");
      break;
    case "":
    case " ":
      //add back in Robots
      $("#butler").removeClass("hidden");
      $("#ret").removeClass("hidden");
      $("#megaMan").removeClass("hidden");
      break;
    default:
      //remove  all Robots
      $("#butler").addClass("hidden");
      $("#ret").addClass("hidden");
      $("#megaMan").addClass("hidden");
      break;
  }
};
