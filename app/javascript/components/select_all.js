const selectAll = () => {
  const chckbxSeletor = document.getElementById('checkbox_selector');
  if (chckbxSeletor) {
    chckbxSeletor.addEventListener('click', () => {
      const checkboxes = document.querySelectorAll(".form-check-input");
      checkboxes.forEach(checkbox => { checkbox.setAttribute('checked', true) })
    });
  }
  // $("input:checkbox").each(function(){
  //   $(this).attr('checked', true);
  // });

  // return false;
}

export { selectAll };