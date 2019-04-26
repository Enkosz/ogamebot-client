$(document).ready(function() {
  // Endpoint API

  const endpointStoreModify = "/store/checkoutModifyProduct";
  const endpointStoreRemove = "/store/checkoutRemoveProduct";

  $("#checkout-list tbody").on("click", "button.btn.btn-blue", function() {
    var productId = (table.row($(this).parents("tr")).data())[0];
    var productQuantity = table
      .cell(table.row($(this).parents("tr")), 3)
      .nodes()
      .to$()
      .find("input")
      .val();

    // Chiamata post aggiunta prodotti
    $.ajax({
      type: "POST",
      url: endpointStoreModify,
      data: {
        productId,
        productQuantity
      }
    }).done(function(data) {
      // Ricaricamento pagina
      window.location = data;
    });
  });

  $("#checkout-list tbody").on("click", "button.btn.btn-danger", function() {
    var productId = (table.row($(this).parents("tr")).data())[0];

    // Chiamata post aggiunta prodotti
    $.ajax({
      type: "POST",
      url: endpointStoreRemove,
      data: {
        id: productId,
      }
    }).done(function(data) {
      // Ricaricamento pagina
      window.location = data;
    });
  });

  var table = $("#checkout-list").DataTable({
    language: {
      sEmptyTable: "Nessun dato presente nella tabella",
      sInfo: "Vista da _START_ a _END_ di _TOTAL_ elementi",
      sInfoEmpty: "Vista da 0 a 0 di 0 elementi",
      sInfoFiltered: "(filtrati da _MAX_ elementi totali)",
      sInfoPostFix: "",
      sInfoThousands: ".",
      sLengthMenu: "Visualizza _MENU_ elementi",
      sLoadingRecords: "<i class='la la-refresh spinner'></i>",
      sProcessing: "<i class='la la-refresh spinner'></i>",
      sSearch: "Cerca:",
      sZeroRecords: "La ricerca non ha portato alcun risultato.",
      oPaginate: {
        sFirst: "Inizio",
        sPrevious: "Precedente",
        sNext: "Successivo",
        sLast: "Fine"
      },
      oAria: {
        sSortAscending: ": attiva per ordinare la colonna in ordine crescente",
        sSortDescending:
          ": attiva per ordinare la colonna in ordine decrescente"
      }
    },
    pagingType: "simple"
  });
});
