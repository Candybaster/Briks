$(document).ready(function($) {

        $("#form1").submit(function() {
          $.ajax({
            type: "POST",
            url: "send.php",
            data: $("#form1").serialize()
          }).done(function() {
            console.log('отправлена');
            $('#form1')[0].reset();
          });
          return false;
        });

        $("#form2").submit(function() {
          $.ajax({
            type: "POST",
            url: "send.php",
            data: $("#form2").serialize()
          }).done(function() {
            console.log('отправлена');
          });
          return false;
        });

});