$(document).ready(function() {
  // Endpoint API

  const endpointAPI = "/api/store/products";
  const endpointStore = "/store/addProduct";

  $("#store-list tbody").on("click", "button", function() {
    var productId = table.row($(this).parents("tr")).data().id;
    var productQuantity = table
      .cell(table.row($(this).parents("tr")), 2)
      .nodes()
      .to$()
      .find("input")
      .val();

    // Chiamata post aggiunta prodotti
    $.ajax({
      type: "POST",
      url: endpointStore,
      data: {
        productId,
        productQuantity
      }
    }).done(function(data) {
      // Ricaricamento pagina
      window.location = data;
    });
  });

  var table = $("#store-list").DataTable({
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
    pagingType: "simple",
    ajax: { url: endpointAPI, dataSrc: "" },
    columns: [
      { data: "name" },
      {
        data: "price",
        render: function(data, type, row) {
          return `
              ${data} €
          `;
        }
      },
      {
        render: function(data, type, row) {
          return `
          <input type="number" class="form-control"
                 min="1" max="1000" value="1">`;
        }
      },
      {
        data: "id",
        render: function(data, type, row) {
          return `
          <div class="text-center">
          <button class="btn btn-blue" type="button">Aggiungi al carrello</button>
          </div>
            `;
        }
      }
    ]
  });
});
