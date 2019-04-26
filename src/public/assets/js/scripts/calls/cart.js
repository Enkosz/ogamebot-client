$(document).ready(function() {
  $(".product_cart_add").click(function(e) {
    e.preventDefault();
    const productId = $(e.target).attr("productId");
    var productButton = $(this);

    // Svuoto gli alert
    $("#alert-success").empty();
    $("#alert-danger").empty();
    $("#alert-success").css("display", "none");
    $("#alert-danger").css("display", "none");

    $.ajax({
      type: "POST",
      url: "/api/store/add",
      data: { productId, qty: 1 },
      dataType: "json",
      beforeSend: function() {
        // Disabilito tutti i button prima di inviare la richiesta
        $(".product_cart_add").attr("disabled", true);
        productButton.text("");
        productButton.prepend("<i class='la la-refresh spinner'></i>");
      },
      success: function(response) {
        // Update stato del carrello
        $("#cart_length").text(response.cartLength);
        $("#cart_length").css("display", "block");
        // Visualizzo l'alert
        $("#alert-success").css("display", "block");
        $("#alert-success").prepend(
          "<span>Prodotto aggiunto al carrello</span>"
        );
      },
      error: function() {
        $("#alert-danger").css("display", "block");
        $("#alert-danger").prepend(
          "<span>Qualcosa è andato storto nell'aggiunta del prodotto. Aggiorna la pagina</span>"
        );
      },
      complete: function() {
        productButton.text("Aggiungi al carrello");
        productButton.find(".la-spinner:first").remove();
        $(".product_cart_add").attr("disabled", false);
      }
    });
  });

  $("#form_checkout_confirm").submit(function(e) {
    e.preventDefault();
    var submitButton = $(this).find(":submit");

    // Disabilito il bottone per evitare multipli inserimenti
    submitButton.prop("disabled", true);
    submitButton.text("");
    submitButton.append('<i class="la la-refresh spinner"></i>');

    this.submit();
  });
});
