import * as mongoose from "mongoose";

class Database {
    private DB_URL: string = "mongodb://192.168.1.101:27017/db_portal";

    createConnection() {
        mongoose.connect(this.DB_URL);
    }
}

export default Database;