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
// currency
$(document).on('turbolinks:load', function() {
  $('.js-example-basic-single').select2();  // currency
  $(".js-example-tags").select2({           // tags (turbolinks)
    tags: true
  });
});

import 'sweetalert2'
import Swal from 'sweetalert2'
window.Swal = Swal

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.btn-submit').addEventListener('click', function() {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Save`,
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  })
})

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
