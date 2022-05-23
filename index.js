const web3ContractParseEvent = async(ABI, contractAddress) => {
    const Web3 = require('web3');
    const web3 = new Web3(new Web3.providers.HttpProvider("https://kovan.infura.io/v3/3d1ad44da9c34f7b9c42f137f68b0d4d"));
    const contract = new web3.eth.Contract(ABI, contractAddress);
    return contract.getPastEvents('Transfer', {
        fromBlock: 0,
        toBlock: 'latest'
    })
}

const readCSVFile = () => {

}
const main = () => {
    const ABI = require('./abi/SporteShoes.json');
    const contractAddress = "0xa081e897472c8CE9fc950EAD0670658b8160Cb71";
    const fs = require('fs');
    let parse = require('csv-parser');
    let csvData = [];
    fs.createReadStream('./MintBatchFinal.csv')
        .pipe(parse({ delimiter: ':' }))
        .on('data', (csvrow) => {
            csvData.push(csvrow);
        })
        .on('end', () => {

            console.log(csvData);
        });




    // web3ContractParseEvent(ABI, contractAddress).then((events) => {
    //     const fs = require('fs');
    //     fs.writeFile("data.json", JSON.stringify(events), (err) => {
    //         if (err) {
    //             console.log(err);
    //         }
    //     });
    // })
}
main();