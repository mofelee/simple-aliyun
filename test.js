const aliyun = require('./');

async function run(){
  try {
    const data = await aliyun.invoke('DescribeRegions');
    console.log(JSON.stringify(data, null, 2)); // eslint-disable-line
  } catch (e) {
    console.error(e); //eslint-disable-line
  }
}

run();
