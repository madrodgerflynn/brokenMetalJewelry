mongo.connect(process.env.MONGODB_URI,function(err, database){
    if(err) {
        if (process.env.DEBUG) {
            throw err;
        }
        return;
    }

    db= database;
    console.log("Connected to DB");
    server.run();
});