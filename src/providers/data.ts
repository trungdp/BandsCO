import {Injectable} from '@angular/core';
import {UserInfo} from '../models/userInfo';
import { inject } from '@angular/core/src/render3';
import { User } from '../models/user';
import {Storage} from '@ionic/storage';

@Injectable()
export class Data{
    public user: UserInfo;
    constructor(public storage:Storage){

    }
    start(){
        this.readFromStorage().then(user=>{
            if(user){
                this.user = user;
            }
        });
    }
    readFromStorage():Promise<any>{
        return this.storage.get('user');
    }
    deleteFromStorage():Promise<any>{
        return this.storage.remove('user');
    }

    saveToStorage(){
        console.log("provider/data: save: "+this.user.username);
        this.storage.set('user', this.user);
    }
    getProfile(){
        return this.user;
    }
    updateProfile(user){
        this.user = user;
        this.saveToStorage();
    }
    deleteProfile(){
        if(!this.user){
            return false;
        }
        this.user = null;
        this.saveToStorage();
    }
}