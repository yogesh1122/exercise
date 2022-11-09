const axios = require('axios');
const fs = require('fs') //testing
const { prepareData,removeUnessarySpacess,countString}= require('./service/service')

async function excercise1()
{
try {
        //accsing data
        const response = await axios.get('http://norvig.com/big.txt');
        let data = response.data;
        let mydata = await removeUnessarySpacess(data);
        let mydata2 = await mydata.split(' ')
        let result = await countString(mydata2)
        

        //testing data
        //  let writeStream =  fs.createWriteStream('ab.txt');
        //  await writeStream.write(JSON.stringify(result));
        //  await writeStream.end();
        
        const sortable = Object.fromEntries(
            Object.entries(result).sort(([,a],[,b]) => b-a).slice(0, 10)
        );

       console.log(sortable); 
       return sortable;
        
        

    } catch (error) {
        console.error(error);
      }

}

//calling
excercise1()




