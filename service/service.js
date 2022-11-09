const axios = require('axios');
const moment = require('moment')


//Exercise1
module.exports.prepareData = (data)=>{
    let preData = data.toString().replace(/,/g, ' ')
    return preData;
}

module.exports.removeUnessarySpacess = (data)=>{
    let preData = data.replace(/[`~!@#$%^&*()_|+\-=?;:'",.\n\{\}\[\]\\\/]/gi, ' ').replace(/\s+/g, ' ')
    return preData;
}

module.exports.countString= (data)=>{
    // let obj={};
    // // let returnData = data.map(k=>obj[k]=0).map((_,i)=>{ obj[data[i]]+=1 })
    // console.log(obj);

let obj2={}
for(i=0;i<data.length;i++)
{
    let key = data[i]
    obj2[key]=0
}
for(i=0;i<data.length;i++)
{
    let key = data[i]
    obj2[key]+=1
}
return obj2;

}



//Exercise2 
module.exports.dateTimefun = (date)=>{
    return moment(date).format("YYYY-MM-DD")
}

async function getUser() {
    try {
      //let Obj ={ Name:'title + firstname + lastname',DOB:'date of birth in YYYY-MM-DD',email :'email'}  
      
      let collArrData = []
      for(let i=0;i<10;i++){
      const response = await axios.get('https://randomuser.me/api/');
      collArrData.push(response.data.results[0])  
    } 
    //  console.log(collArrData);
      return collArrData;

    } catch (error) {
      console.error(error);
    }
  }
 
module.exports.getUser = getUser; 
