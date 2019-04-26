$(document).ready(function() {
  // Endpoint API
  const endpointAPI = 'http://127.0.0.1:5000/planets';

  $('#planets-list').DataTable({
    language: {
      sEmptyTable: 'Nessun dato presente nella tabella',
      sInfo: 'Vista da _START_ a _END_ di _TOTAL_ elementi',
      sInfoEmpty: 'Vista da 0 a 0 di 0 elementi',
      sInfoFiltered: '(filtrati da _MAX_ elementi totali)',
      sInfoPostFix: '',
      sInfoThousands: '.',
      sLengthMenu: 'Visualizza _MENU_ elementi',
      sLoadingRecords: '<i class=\'la la-refresh spinner\'></i>',
      sProcessing: '<i class=\'la la-refresh spinner\'></i>',
      sSearch: 'Cerca:',
      sZeroRecords: 'La ricerca non ha portato alcun risultato.',
      oPaginate: {
        sFirst: 'Inizio',
        sPrevious: 'Precedente',
        sNext: 'Successivo',
        sLast: 'Fine',
      },
      oAria: {
        sSortAscending: ': attiva per ordinare la colonna in ordine crescente',
        sSortDescending:
            ': attiva per ordinare la colonna in ordine decrescente',
      },
    },
    pagingType: 'simple',
    ajax: {
      url: endpointAPI,
      dataSrc: '',
      cache: true,
    },
    columns: [
      {data: 'id'},
      {data: 'name'},
      {data: 'coordinates'},
    ],
  });
});

