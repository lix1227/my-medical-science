const path = require('path')
const exec = require('child_process').execFile

const sp = {
  sendToPython (params = null, callback = null) { // params是数组参数，如["参数1","参数2"]
    const url = path.resolve(__dirname, '../11.exe')
    exec(url, [JSON.stringify(params)], { encoding: 'utf8' }, (err, stdout, sterr) => {
      if (err) {
        console.log(`运行python失败${err}`)
        return
      }
      ;

      try {
        const result = JSON.parse(stdout)
        if (result.code === 0) {
          const obj = JSON.parse(JSON.stringify(result))
          delete obj.code
          callback && callback(obj)
        }
        console.log('运行python成功' + result)
      } catch (err) {
        console.log(err)
      }
    })
  }
}
module.exports = sp
