const fetch = require('node-fetch');
const _ = require('lodash');
const crypto = require('crypto');
const querystring = require('querystring');

const id = process.env.ALIYUN_ID;
const secret = process.env.ALIYUN_SECRET;

const hmac = crypto.createHmac('sha1', secret + '&');

// aliyun.invoke('DescribeRegions')
function invoke(action, options = {}){
  const req = Object.assign({
    Format: 'json',
    Version: '2014-05-26',
    TimeStamp: (new Date()).toJSON(),
    SignatureMethod: 'HMAC-SHA1',
    SignatureNonce: Date.now(),
    SignatureVersion: '1.0',
    Action: action, // 'DescribeRegions',
    AccessKeyId: id,
    //Signature: '111'
  }, options);

  req.Signature = sign(req);

  const url = `https://ecs.aliyuncs.com/?${querystring.stringify(req)}`;

  return fetch(url).then(d=>d.json());
}

function sign(req){
  const arr = _.sortBy(
    _.toPairs(req),
    d=>d[0]
  );

  let str = arr.reduce((p, v)=>{
    p.push(`${v[0]}=${v[1]}`);
    return p;
  }, []).join('&');

  str = encodeURIComponent(str).replace(/%3A/g, '%253A');
  str = 'GET&%2F&' + str;

  const sign = hmac.update(str).digest().toString('base64');

  return sign;
}

module.exports = {
  invoke: invoke,
  sign: sign
};
