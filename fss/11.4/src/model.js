import FessJQuery from 'jquery';

export default class {
  constructor() {
  }

  search(url, params) {
    return new Promise(function(resolve, reject) {
      FessJQuery.ajax({
        url: url,
        type: "GET",
        dataType: "jsonp",
        data: params
      }).done(function(data){
        resolve(data);
      }).fail(function(data){
        reject(data);
      });
    });
  }

  getLabels(url) {
    return new Promise(function(resolve, reject) {
      FessJQuery.ajax({
        url: url,
        type: "GET",
        dataType: "jsonp",
        data: {type: 'label'}
      }).done(function(data){
        resolve(data);
      }).fail(function(data){
        reject(data);
      });
    });
  }

  getStatus(url) {
    return new Promise(function(resolve, reject) {
      FessJQuery.ajax({
        url: url,
        type: "GET",
        dataType: "jsonp",
        data: {type: 'ping'}
      }).done(function(data){
        resolve(data);
      }).fail(function(data){
        reject(data);
      });
    });
  }
}
