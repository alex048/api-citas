'use strict';
const loginSiteds = async (req, res, next) => {
    const data = req.body;     
        //const event = await eventData.getCoutosPending(documento);
        fetch('http://app3.susalud.gob.pe:7800/ServicePasarela?wsdl', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
            res.send('OK');
          })
          .catch((error) => {
            console.error('Error:', error);
            res.send('FAIL');
          });
        
    
}
module.exports = {
    loginSiteds
}