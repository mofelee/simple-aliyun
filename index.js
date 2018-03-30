const aliyun = require('./aliyun');

async function run(){
  try {
    const data = await aliyun.invoke('DescribeRegions')
    console.log(JSON.stringify(data, null, 2))
  } catch (e) {
    console.error(e)
  }
}

run()
