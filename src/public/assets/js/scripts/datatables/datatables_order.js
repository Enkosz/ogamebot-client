$(document).ready(function() {
  // Endpoint API

  const endpointAPI = "/api/order/list";

  $("#order-list").DataTable({
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
      { data: "id" },
      { data: "user.class.school.name" },
      {
        data: "user.class",
        render: function(data, type, row) {
          return `${data.section} ${data.faculty}`;
        }
      },
      {
        data: "user",
        render: function(data, type, row) {
          return `${data.firstname} ${data.lastname}`;
        }
      },
      {
        data: "isConfirmed",
        render: function(data, type, row) {
          var isConfirmed = data ? "Ritirato" : "In attesa";

          return `<span class="tran-type badge badge-danger badge-pill badge-sm">${isConfirmed}</span>`;
        }
      },
      {
        data: "amount",
        render: function(data, type, row) {
          return `${data} €`;
        }
      },
      {
        data: "products",
        render: function(data, type, row) {
          return data.length;
        }
      },
      {
        data: "id",
        render: function(data, type, row) {
          return `
            <span class="dropdown">
              <button id="dropdown-options-table" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn btn-blue dropdown-toggle dropdown-menu-right"><i class="ft-settings"></i></button>
              <span aria-labelledby="dropdown-options-table" class="dropdown-menu mt-1 dropdown-menu-right" x-placement="bottom-end" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(62px, 31px, 0px);">
                  <a href="#" class="dropdown-item"><i class="la la-eye"></i> Visualizza</a>
                  <a href="/schools/edit?id=${data}" class="dropdown-item"><i class="la la-pencil"></i> Modifica</a>
                  <a href="/orders/delete?id=${data}" class="dropdown-item" onClick="return confirm('Sei sicuro di voler eliminare questa scuola?');"><i class="la la-trash"></i> Cancella</a>
              </span>
            </span>
            `;
        }
      }
    ]
  });
});
