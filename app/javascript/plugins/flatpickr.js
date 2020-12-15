import flatpickr from "flatpickr";
import { Portuguese } from "flatpickr/dist/l10n/pt"

const initFlatpickr = () => {
  flatpickr(".datepicker", {
    locale: Portuguese,
    altInput: true,
    altFormat: "l, j \\de F, Y",
  });
};

export { initFlatpickr };