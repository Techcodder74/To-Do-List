class project{
    constructor(name)
    {   this.id = crypto.randomUUID();
        this.name=name;
        this.arr=[];
    }
    add(c)
    {
        this.arr.push(c);
    }
    get(){
        return this.arr;
    }

}
export default project;
