function checkboxes() {
  for (var i=0;i<document.forms.length;i++) {
    var form = document.forms[i];
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var results = '';
     // loop through all checkboxes to see if checked
     var checkboxes = form.querySelectorAll("input[type='checkbox']");
     for(var k = 0; k < checkboxes.length; k++) {
       results += checkboxes[k].id + '=' + checkboxes[k].checked + '\n';
     }
     // loop through all radio buttons to display value
     var radiobuttons = form.querySelectorAll("input[type='radio']:checked");
     for(var m = 0; m < radiobuttons.length; m++) {
       results += radiobuttons[m].name + '=' + radiobuttons[m].value + '\n';
     }
     // log results
     console.log(results);
    });
  }
}
