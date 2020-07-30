"use strict";

// Part 1

$('#get-fortune-button').on('click', () => {
  $.get('/fortune', (response) => {
    $('#fortune-text').html(response);
    //
    // This is the body of the callback function for $.get!
    // TODO: use `response` to update the text in `div#fortune-text`
    //
  });
});


// Part 2

$('#weather-form').on('submit', (evt) => {
  evt.preventDefault();

  const formData = {
    // TODO: select the zipcode input
    zipcode: $('#zipcode-field').val()
  };

  // TODO: choose a request method (GET or POST) by uncommenting one of
  // these blocks of code

  $.get('/weather', formData, (response) => {
    $('#weather-info').html(response.forecast);
    // Fill in the callback function
  });

});


// Part 3

$("#order-form").on('submit', (evt) => {
  evt.preventDefault();

  const formData = {
    melon_type: $('#melon-type-field').val(), 
    qty: $('#qty-field').val()
  };

  $.post('/order-melons', formData, (response) => {
    const orderStatus = $('#order-status');

    if (result.code === 'ERROR') {
      orderStatus.css('color', 'red');
    } 
    else {
      orderStatus.css('color', '');
    }

    orderStatus.html(`<p>${response.msg}</p>`);
  });

  // TODO: create an object to store key-value pairs that'll be sent to
  // the server

  // TODO: make a request to /order-melons
  //
  // In the callback function, use the response from the server to
  // update #order-status. IMPORTANT: if the result code is 'ERROR',
  // make it show up in red.
});
