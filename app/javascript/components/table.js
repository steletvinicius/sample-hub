const filterTblBatchesReceived = () => {
  const tabReceived = document.getElementById('filterReceived');
  const tabUnsent = document.getElementById('filterUnsent')
  const tabSent = document.getElementById('filterSent')

  tabReceived.addEventListener('click', () => {
    // add selected class to tab element
    tabReceived.classList.add("selected");
    tabReceived.classList.add("btn-secondary");
    tabUnsent.classList.remove("selected");
    tabUnsent.classList.remove("btn-secondary");
    tabSent.classList.remove("selected");
    tabSent.classList.remove("btn-secondary");
    // Loop through all rows, and hide those that don't match criteria
    const table = document.getElementById("tblBatches");
    const tr = table.getElementsByTagName("tr");
    let counter = 0;

    for (let i = 0; i < tr.length; i++) {
      const dateCell = tr[i].getElementsByTagName("td")[4];

      if (dateCell) {
        const dateValue = dateCell.textContent || dateCell.innerText;
        if (dateValue !== "") {
          tr[i].style.display = "";
          counter += 1;
        } else {
          tr[i].style.display = "none";
        }
      }
    }
    const caption = document.getElementById("counter");
    caption.innerHTML = `Total ${pluralizeJS(counter, 'remessa', 'remessas')}`;
  });
}

const pluralizeJS = (count, singular, plural) =>
  `${count} ${count <= 1 ? singular : plural}`;

const filterTblBatchesUnsent = () => {
  const tabReceived = document.getElementById('filterReceived');
  const tabUnsent = document.getElementById('filterUnsent');
  const tabSent = document.getElementById('filterSent');

  tabUnsent.addEventListener('click', () => {
    // add selected class to tab element
    tabReceived.classList.remove("selected");
    tabReceived.classList.remove("btn-secondary");
    tabUnsent.classList.add("selected");
    tabUnsent.classList.add("btn-secondary");
    tabSent.classList.remove("selected");
    tabSent.classList.remove("btn-secondary");
    // Loop through all rows, and hide those that don't match criteria
    const table = document.getElementById("tblBatches");
    const tr = table.getElementsByTagName("tr");
    let counter = 0;

    for (let i = 0; i < tr.length; i++) {
      const dateCell = tr[i].getElementsByTagName("td")[3];

      if (dateCell) {
        const dateValue = dateCell.textContent || dateCell.innerText;
        if (dateValue === "") {
          tr[i].style.display = "";
          counter += 1;
        } else {
          tr[i].style.display = "none";
        }
      }
    }
    const caption = document.getElementById("counter");
    caption.innerHTML = `Total ${pluralizeJS(counter, 'remessa', 'remessas')}`;
  });
}

const filterTblBatchesSent = () => {
  const tabReceived = document.getElementById('filterReceived');
  const tabUnsent = document.getElementById('filterUnsent');
  const tabSent = document.getElementById('filterSent');

  tabSent.addEventListener('click', () => {
    // add selected class to tab element
    tabReceived.classList.remove("selected");
    tabReceived.classList.remove("btn-secondary");
    tabUnsent.classList.remove("selected");
    tabUnsent.classList.remove("btn-secondary");
    tabSent.classList.add("selected");
    tabSent.classList.add("btn-secondary");
    // Loop through all rows, and hide those that don't match criteria
    const table = document.getElementById("tblBatches");
    const tr = table.getElementsByTagName("tr");
    let counter = 0;

    for (let i = 0; i < tr.length; i++) {
      const dateCellSent = tr[i].getElementsByTagName("td")[3];
      const dateCellReceived = tr[i].getElementsByTagName("td")[4];

      if (dateCellSent) {
        const dateValueSent = dateCellSent.textContent || dateCellSent.innerText;
        const dateValueReceived = dateCellReceived.textContent || dateCellReceived.innerText;
        if (dateValueSent !== "" && dateValueReceived === "") {
          tr[i].style.display = "";
          counter += 1;
        } else {
          tr[i].style.display = "none";
        }
      }
    }
    const caption = document.getElementById("counter");
    caption.innerHTML = `Total ${pluralizeJS(counter, 'remessa', 'remessas')}`;
  });
}

export { filterTblBatchesUnsent };
export { filterTblBatchesReceived };
export { filterTblBatchesSent };

