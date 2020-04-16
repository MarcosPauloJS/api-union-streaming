const firebaseConnection = require('../database/firebaseConnection');

module.exports = {
    async index(request, response){
        console.log('here')
        const services = await firebaseConnection.database().ref('/services/')
        .once('value')
        .then( async snapshot =>{
            return snapshot.val();
        })
        response.json(services);
    }
}