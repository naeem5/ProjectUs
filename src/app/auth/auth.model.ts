export class User{
    public fname: string;
    public lname: string;
    public email: string;
    public password: string;
    public role: string;


    constructor(fname: string, lname: string, email: string, password: string, role: string){
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.password = password;
        this.role = role;
    
        }
}