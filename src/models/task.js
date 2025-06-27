class task{
    constructor(name, due)
    {   this.id = crypto.randomUUID();
        this.name=name;
        this.due=new Date(due);
        // this.priority=priority;
        this.isComplete=false;
    }
}

export default task