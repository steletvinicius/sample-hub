const initCheckBox = () => {
  const trs = document.querySelectorAll("tr")
  if (trs) {
    trs.forEach((tr) => {
      let inputs = tr.querySelectorAll("input")
      let receber = tr.querySelector(".chb-1")
      let rejeitar = tr.querySelector(".chb-2")
      inputs.forEach((input) => {
        input.addEventListener("click", (event) => {
          if (event.currentTarget.classList[0] === "chb-1") {
            rejeitar.checked = false;
          }
          if (event.currentTarget.classList[0] === "chb-2") {
            receber.checked = false;
          }
        })
      })
    })
  };
};


export { initCheckBox };