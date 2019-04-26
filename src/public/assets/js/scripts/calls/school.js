$(document).ready(function() {
  // Input Mask Numero telefono
  $("#school-phone").inputmask("+99 9999999999");

  // Validazione Form Creazione Scuola
  $("#form_school_create").validate({
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
      address: {
        required: true
      },
      city: {
        required: true
      },
      province: {
        required: true
      },
      region: {
        required: true
      },
      email: {
        email: true
      }
    },
    messages: {
      name: {
        required: "Inserire nome scuola"
      },
      address: {
        required: "Inserire indirizzo scuola"
      },
      city: {
        required: "Inserire città scuola"
      },
      province: {
        required: "Inserire provincia scuola"
      },
      region: {
        required: "Inserire regione scuola"
      },
      email: {
        email: "Inserire un'email valida"
      }
    }
  });
});
