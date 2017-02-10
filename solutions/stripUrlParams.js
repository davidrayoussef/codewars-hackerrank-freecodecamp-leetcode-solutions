/*
Complete the method so that it does the following:
 - Removes any duplicate query string parameters from the url
 - Removes any query string parameters specified within the 2nd argument (optional array)

Examples:
stripUrlParams('www.codewars.com?a=1&b=2&a=2') // returns 'www.codewars.com?a=1&b=2'
stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) // returns 'www.codewars.com?a=1'
stripUrlParams('www.codewars.com', ['b']) // returns 'www.codewars.com'
*/

function stripUrlParams(url, paramsToStrip = []) {
  if (!url.includes('?')) return url;

  let [domain, params] = url.split('?');
  params = params.includes('&') ? params.split('&') : params;

  const paramsHash = params
    .reverse()
    .reduce((obj,curr) => {
      obj[curr[0]] = curr[2];
      return obj;
    }, {});

  const paramsResult = Object
    .keys(paramsHash)
    .filter(key => !paramsToStrip.includes(key))
    .map(key => `${key}=${paramsHash[key]}`)
    .reverse()
    .join('&');

  return `${domain}?${paramsResult}`;
}

stripUrlParams('www.codewars.com?a=1&b=2&a=2&b=3', ['b']); //=> "www.codewars.com?a=1"
