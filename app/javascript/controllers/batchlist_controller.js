// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ 'tbRows' ];

  connect() {
    console.log("Connected!");
    console.log(this.tbRowsTarget);
  }

  filterSent() {
    console.log("You clicked the filter sent button");
    // get batches with sent_at
    fetch('/batches', { headers: { accept: "application/json" } })
    .then(response => response.json())
    .then((data) => {
      data.filter(batch => { batch.sent_at == null });
      console.log(data);
    });
    // replace the row with new forEach
  }
  filterUnsent() {
    console.log("You clicked the filter unsent button");
    // filter @batches to show only without sent_at
  }
  filterReceived() {
    console.log("You clicked the filter received button");
    // filter @batches to show only with received_at
  }
}
