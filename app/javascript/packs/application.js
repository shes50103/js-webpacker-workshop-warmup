// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/scss/bootstrap.scss'

import 'select2'
import 'select2/dist/css/select2.css'
import $ from 'jquery' 
window.$ = $
import 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'
import Swal from 'sweetalert2'
window.Swal = Swal
import 'tempusdominus-bootstrap-4'
import 'tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.css'
import 'font-awesome/css/font-awesome.css'

$(document).on('turbolinks:load', function() {
  // currency
  $('.js-example-basic-single').select2();
  // tags
  $(".js-example-tags").select2({
    tags: true
  });
  // date
  $(function () {
    $('#datetimepicker7').datetimepicker({
      format: 'YYYY/MM/DD'
    });
    $('#datetimepicker8').datetimepicker({
      format: 'YYYY/MM/DD',
      useCurrent: false
    });
    $("#datetimepicker7").on("change.datetimepicker", function (e) {
      $('#datetimepicker8').datetimepicker('minDate', e.date);
    });
    $("#datetimepicker8").on("change.datetimepicker", function (e) {
      $('#datetimepicker7').datetimepicker('maxDate', e.date);
    });
  });
  // confirm
  $('.btn-submit').on('click',function(e){
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Loading...',
          showConfirmButton: false
        })
        document.querySelector('form').submit()
      }
    })
  }) 
});

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
