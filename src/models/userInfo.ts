export class UserInfo{
    id:any;
    accountid:any;
    username:any;
    avatar:any;
    phone:any;
    email:any;
    skill:any;
    musical:any;
    achievements:any;   
    constructor(id, accId, username, avatar, phone, email, skill, musical, achievements){
        this.id = id;
        this.accountid = accId;
        this.username=username;
        this.avatar = avatar;
        this.phone=phone;
        this.email=email;
        this.skill=skill;
        this.musical=musical;
        this.achievements=achievements;
    }
}