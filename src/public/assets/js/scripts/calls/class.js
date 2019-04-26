$(document).ready(function() {
  // Validazione Form Creazione Classe
  $("#form_class_create").validate({
    errorClass: "has-error",
    submitHandler: function(form) {
      if ($(form).valid()) {
        var submitButton = $(form).find(":submit");

        // Disabilito il bottone per evitare multipli inserimenti
        submitButton.prop("disabled", true);
        submitButton.text("");
        submitButton.append('<i class="la la-refresh spinner"></i>');

        form.submit();
      }
      return false;
    },
    rules: {
      name: {
        required: true
      },
      faculty: {
        required: true
      },
      schoolId: {
        required: true
      }
    },
    messages: {
      name: {
        required: "Inserire nome e sezione classe"
      },
      faculty: {
        required: "Inserire indirizzo classe"
      },
      schoolId: {
        required: "Selezionare una scuola"
      }
    }
  });
});
