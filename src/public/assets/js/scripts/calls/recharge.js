$(document).ready(function() {
  // Validazione Form Creazione Prodotto
  $("#form_recharge_create").validate({
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
      amount: {
        required: true,
        number: true
      }
    },
    messages: {
      amount: {
        required: "Inserire prezzo prodotto",
        number: "Inserire un prezzo prodotto in formato numerico"
      }
    }
  });
});
