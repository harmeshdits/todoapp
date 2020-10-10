export interface TodoColors{
    id:number
    color:string
    colorCode: string
}

export class Colors{
    List: any[];
    constructor(){
        this.List=  [
            {id:1, colorCode:"#00bfff"},
            {id:2, colorCode:"#ff00ff"},
            {id:3, colorCode:"#ff0040"}, 
            {id:4, colorCode:"#00ff80"}, 
            {id:5, colorCode:"#ffff00"}, 
            {id:6, colorCode:"#00ffff"}
        ]
    }   
}

export class Todos{
    id: number
    note:string
    date: Date
    color:string
}

export class TodoModel{
    note:string   
    undo: boolean= false
    index: number = 0
}