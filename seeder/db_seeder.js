dbseed();
async function dbseed() {
    await require('./category');
    await require('./company');    
    //await require('./job');    
}