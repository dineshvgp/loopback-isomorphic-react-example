const Promise = require('bluebird');

const getJSON = function(url) {
  const promise = Promise.defer( function(resolve, reject) {
    var client = new XMLHttpRequest();
    client.open('GET', url);
    client.onreadystatechange = handler;
    client.responseType = 'json';
    client.setRequestHeader('Accept', 'application/json');
    client.send();

    function handler() {
      if (this.readyState === this.DONE) {
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(this);
        }
      }
    }
  });

  return promise;
};

export default function fetchArticleById(id) {
  return getJSON('/api/article/' + id);
}

export default function fetchArticles() {
  return getJSON('/api/articles');
}
