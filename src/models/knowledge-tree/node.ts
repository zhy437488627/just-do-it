
export interface Base {
    title: String;
    descript: String;
  }
export interface Node extends Base {
    children?: Node[];
    parent?: Node;
    content: Content[];
  }
  export interface Content extends Base{
    parts?: Parts[];
  }
  export interface Parts {
      
  }