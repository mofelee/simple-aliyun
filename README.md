# simple aliyun client

```javascript
const aliyun = require('simple-aliyun');

async function run(){
  try {
    const data = await aliyun.invoke('DescribeRegions', {});
    console.log(JSON.stringify(data, null, 2)); // eslint-disable-line
  } catch (e) {
    console.error(e); //eslint-disable-line
  }
}

run();
```
