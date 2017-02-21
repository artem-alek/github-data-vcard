import $ from 'jquery';
import token from './token'

function getCall (callback) {
  return $.ajax({
    url: `https://api.github.com/users/artem-alek?client_id=${token}`,
    dataType: 'json',
    success: callback
  });
}

export { getCall };
