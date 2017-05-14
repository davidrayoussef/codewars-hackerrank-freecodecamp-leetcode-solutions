/*
Create a basic UriBuilder object that will be used specifically to build query params on an existing URI.
It should support a params property and a build method. It will handle the URL having pre-existing params
that need to be managed. The URL must be properly encoded (i.e. "a b" should be encoded as "a%20b")

Examples of how the builder will be used:
let builder = new UriBuilder('http://www.codewars.com')
builder.params.page = 1 
builder.params.language = 'javascript'

// new builder instance to demonstrate pre-existing params.
builder = new UriBuilder('http://www.codewars.com?page=1')

builder.params.page = 2
// builder.build() should return 'http://www.codewars.com?page=2'


// if you delete params then they will disappear from the url string
delete builder.params.page

// now builder.build() should return 'http://www.codewars.com'
*/

class UriBuilder {
  constructor(uri) {
    this.base = uri.split('?')[0];
    this.params = {};

    if (uri.includes('?')) {
      const [paramKey, paramVal] = uri.split('?')[1].split('=');

      this.params[paramKey] = paramVal;
    }

  }

  build() {
    const paramStr = Object
      .keys(this.params)
      .map(key => {
        let val = this.params[key];

        if (typeof val === 'string' && val.includes(' ')) {
          val = val.replace(' ', '%20');
        }

        return key + '=' + val;
      })
      .join('&');

    return this.base + '?' + paramStr;
  }
}

let builder = new UriBuilder('http://www.codewars.com');
builder.params.page = 1;
builder.params.language = 'javascript';
builder.build(); //=> "http://www.codewars.com?page=1&language=javascript"
