const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsObj = {};

  domains.forEach(domain => {
    const subDomains = domain.split(".");
    const reversedSubDomains = [...subDomains].reverse();
    let currDomain = "";

    reversedSubDomains.forEach(domainName => {
      currDomain += "." + domainName;

      if (domainsObj[currDomain]) {
        domainsObj[currDomain]++;
      } else {
        domainsObj[currDomain] = 1;
      }
    })
  })

  return domainsObj;
}

module.exports = {
  getDNSStats
};
