const bcryptjs = require('bcryptjs');

export class Password {
    static async hash(password: string) {
        return await bcryptjs.hash(password, 10)
    }

    static async compare(password: string, hash: string) {
        return await bcryptjs.compare(password, hash)
    }
}