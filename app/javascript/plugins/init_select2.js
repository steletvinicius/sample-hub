import $ from 'jquery';
import 'select2';

const initSelect2 = () => {
  $('.select2').select2({width: '300px' });
};

export { initSelect2 };