// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

// Internal imports:
import { initFlatpickr } from "../plugins/flatpickr";
import { initCheckBox } from "../plugins/init_checkbox";
import { initSelect2 } from "../plugins/init_select2";
import {
  initFilterTblBatches,
  filterTblBatchesReceived,
  filterTblBatchesUnsent,
  filterTblBatchesSent
} from "../components/table_batches"
import { selectAll } from "../components/select_all"
import { initAutocomplete } from "../plugins/init_autocomplete"
import { initChatroomCable } from "../channels/chatroom_channel"

document.addEventListener('turbolinks:load', () => {
  // Call your functions here:
  initFlatpickr();
  initSelect2();
  initCheckBox();
  initAutocomplete();
  initFilterTblBatches();
  filterTblBatchesReceived();
  filterTblBatchesUnsent();
  filterTblBatchesSent();
  selectAll();
  initChatroomCable();
});

// require('select2_simple_form');
import "controllers"
