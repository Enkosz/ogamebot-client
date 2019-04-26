$(document).ready(function() {
  $("#form_login").submit(function(e) {
    e.preventDefault();
    var submitButton = $(this).find(":submit");

    // Disabilito il bottone per evitare multipli inserimenti
    submitButton.prop("disabled", true);
    submitButton.text("");
    submitButton.append('<i class="la la-refresh spinner"></i>');

    this.submit();
  });

  $("#user-school").change(function() {
    const schoolId = this.value;
    var userClassSelect = $('#user-class');
    userClassSelect.empty();

    $.ajax({
      type: "GET",
      url: "/api/schools/classes?id=" + schoolId,
      success: function({success, foundClasses}) {
        var { classes } = foundClasses;

        classes.forEach(element => {
          userClassSelect.append(new Option(element.section + ' ' + element.faculty, element.id));
        });
      },
      beforeSend: function() {
        userClassSelect.append('<option id="loadingOption" selected disabled>Caricamento... </option>')
      },
      complete: function(){
        $('#loadingOption').remove();
     },
    });
  });
});

