import { Model } from "mongoose"
import TokenModel from "../models/token.model"
import { TokenSchema } from "../models/types/token"
import { createJWT } from "../utils/jwt"

class Token{
    constructor(
        private tokenModel: Model<TokenSchema> = TokenModel){
    }
    async createToken(jwt: string, isAdmin=false){
        if(jwt){
            const accesssToken = jwt
            return this.tokenModel.create({accesssToken, isAdmin})
        }
        return this.tokenModel.create()
    }

    deleteToken(accesssToken: string){
        return this.tokenModel.findOneAndDelete({accesssToken})
    }

    findToken(accesssToken: string){
        return this.tokenModel.findOne({accesssToken})
    }

    findByRefreshToken(refreshToken: string){
        return this.tokenModel.findOne({refreshToken})
    }

    getById(id: string){
        return this.tokenModel.findById(id)
    }
}


const tokenService = new Token()

export default tokenService