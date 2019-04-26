$(document).ready(function() {
  // Validazione Form Creazione Prodotto
  $("#form_product_create").validate({
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
      price: {
        required: true,
        number: true
      }
    },
    messages: {
      name: {
        required: "Inserire nome prodotto"
      },
      price: {
        required: "Inserire prezzo prodotto",
        number: "Inserire un prezzo prodotto in formato numerico"
      }
    }
  });
});
