import { cleanEnv } from 'envalid'
import { str, port } from "envalid/dist/validators"

export default cleanEnv(process.env, {
    DATA_BASE: str(),
    PORT: port(),
    SECRET_TOKEN: str()
})