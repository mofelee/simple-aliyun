# simple aliyun client

test.js
```javascript
const aliyun = require('simple-aliyun');

async function run(){
  try {
    const data = await aliyun.invoke('DescribeInstances', {RegionId: 'cn-shanghai'});
    console.log(JSON.stringify(data, null, 2)); // eslint-disable-line
  } catch (e) {
    console.error(e); //eslint-disable-line
  }
}

run();
```

```sh
ALIYUN_ID=id ALIYUN_SECRET=secret node test.js
```

[reinit-cluster-exampke](https://github.com/mofelee/reinit-cluster-js/blob/master/index.js)
