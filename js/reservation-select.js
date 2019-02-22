$(document).ready(function () {
    // hide red reservation image by default 
    $(".red-reserve").hide();


    // when a reservation type is selected
    // 2 person
    $('#2-person-reservation-grey').click(function (e) {
      $(".grey-reserve").show();
      $(".red-reserve").hide();
      $('#2-person-reservation-red').show();
      $('#2-person-reservation-grey').hide();
    });

    // 4 Person
    $('#4-person-reservation-grey').click(function (e) {
      $(".grey-reserve").show();
      $(".red-reserve").hide();
      $('#4-person-reservation-red').show();
      $('#4-person-reservation-grey').hide();
    });

    // 8 Person
    $('#8-person-reservation-grey').click(function (e) {
      $(".grey-reserve").show();
      $(".red-reserve").hide();
      $('#8-person-reservation-red').show();
      $('#8-person-reservation-grey').hide();
    });

    // Whole Banquet
    $('#banquet-reservation-grey').click(function (e) {
      $(".grey-reserve").show();
      $(".red-reserve").hide();
      $('#banquet-reservation-red').show();
      $('#banquet-reservation-grey').hide();
    });

    // for mobile
    // hide red reservation image by default 
    $(".red-reserve-mob").hide();


    // when a reservation type is selected
    // 2 person
    $('#2-person-reservation-grey-mob').click(function (e) {
      $(".grey-reserve-mob").show();
      $(".red-reserve-mob").hide();
      $('#2-person-reservation-red-mob').show();
      $('#2-person-reservation-grey-mob').hide();
    });

    // 4 Person
    $('#4-person-reservation-grey-mob').click(function (e) {
      $(".grey-reserve-mob").show();
      $(".red-reserve-mob").hide();
      $('#4-person-reservation-red-mob').show();
      $('#4-person-reservation-grey-mob').hide();
    });

    // 8 Person
    $('#8-person-reservation-grey-mob').click(function (e) {
      $(".grey-reserve-mob").show();
      $(".red-reserve-mob").hide();
      $('#8-person-reservation-red-mob').show();
      $('#8-person-reservation-grey-mob').hide();
    });

    // Whole Banquet
    $('#banquet-reservation-grey-mob').click(function (e) {
      $(".grey-reserve-mob").show();
      $(".red-reserve-mob").hide();
      $('#banquet-reservation-red-mob').show();
      $('#banquet-reservation-grey-mob').hide();
    });
  });