
const pluralizeJS = (count, singular, plural) =>
`${count} ${count <= 1 ? singular : plural}`;


// => SAMPLES
const initFilterTblSamples = () => {
    // Loop through all rows, and hide those that don't match criteria
    const table = document.getElementById("tblSamples");
    const tr = table.getElementsByTagName("tr");
    let counter = 0;

    for (let i = 0; i < tr.length; i++) {
      const dateCell = tr[i].getElementsByTagName("td")[3]; // <==== ALTERAR COLUNA AQUI

      if (dateCell) {
        const dateValue = dateCell.textContent || dateCell.innerText;
        console.log(dateValue);
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

}

const filtertblSamplesCollected = () => {
  const tabCollected = document.getElementById('filterCollected');
  const tabEmpty = document.getElementById('filterEmpty');

  tabEmpty.addEventListener('click', () => {
    // add selected class to tab element
    tabCollected.classList.remove("selected");
    tabCollected.classList.remove("btn-secondary");
    tabEmpty.classList.add("selected");
    tabEmpty.classList.add("btn-secondary");
    // Loop through all rows, and hide those that don't match criteria
    const table = document.getElementById("tblSamples");
    const tr = table.getElementsByTagName("tr");
    let counter = 0;

    for (let i = 0; i < tr.length; i++) {
      const dateCell = tr[i].getElementsByTagName("td")[3]; // <==== ALTERAR COLUNA AQUI

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

const filtertblSamplesUncollected = () => {
  const tabCollected = document.getElementById('filterCollected');
  const tabEmpty = document.getElementById('filterEmpty');

  tabEmpty.addEventListener('click', () => {
    // add selected class to tab element
    tabCollected.classList.remove("selected");
    tabCollected.classList.remove("btn-secondary");
    tabEmpty.classList.add("selected");
    tabEmpty.classList.add("btn-secondary");
    // Loop through all rows, and hide those that don't match criteria
    const table = document.getElementById("tblSamples");
    const tr = table.getElementsByTagName("tr");
    let counter = 0;

    for (let i = 0; i < tr.length; i++) {
      const dateCell = tr[i].getElementsByTagName("td")[3]; // <==== ALTERAR COLUNA AQUI

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

export { filtertblSamplesCollected };
export { filtertblSamplesUncollected };
export { initFilterTblSamples };

