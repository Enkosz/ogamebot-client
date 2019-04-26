$(document).ready(function() {
  // Endpoint API

  const endpointAPI = "/api/user/recharge/list";

  $("#recharge-list-user").DataTable({
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
    order: [[3, "desc"]],
    ajax: { url: endpointAPI, dataSrc: "" },
    columns: [
      { data: "id" },
      {
        data: "amount",
        render: function(data, type, row) {
          return `${data} €`;
        }
      },
      {
        data: "type",
        render: function(data, type, row) {
          var textState = parseTextState(data);
          var classState = parseClassState(data);

          return `<span class="tran-type badge badge-${classState} badge-pill badge-sm">${textState}</span>`;
        }
      },
      {
        data: "createdAt",
        render: function(data, type, row) {
          return new Date(data).toLocaleString();
        }
      }
    ]
  });
});

/**
 * @description Restituisce la stringa desiderata in base al tipo di ordine
 */
function parseTextState(state) {
  switch (state) {
    case 0:
      return "Deposito";
    case 1:
      return "Prelievo";
    case 2:
      return "Rimborso";
  }
}

/**
 * @description Restituisce la classe desiderata in base al tipo di ordine
 */
function parseClassState(state) {
  switch (state) {
    case 0:
      return "success";
    case 1:
      return "danger";
    case 2:
      return "success";
  }
}
