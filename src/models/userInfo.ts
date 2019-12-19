export class UserInfo{
    id:any;
    accountid:any;
    username:any;
    img:any;
    phone:any;
    email:any;
    skill:any;
    musical:any;
    achievements:any;   
    constructor(id, accId, username, img, phone, email, skill, musical, achievements){
        this.id = id;
        this.accountid = accId;
        this.username=username;
        this.img = img;
        this.phone=phone;
        this.email=email;
        this.skill=skill;
        this.musical=musical;
        this.achievements=achievements;
    }
}