//import { Service } from "/home/rahma/IdeaProjects/Hashtable-with-Angular/src/app/service/Service.ts";


import {Service} from "../../service/Service";
import {Table} from "../../model/Table";
export class HashtableController{
  private service:Service;
  constructor(service:Service){
    this.service=service;
  }
  getService():Service{
    return this.service;
  }
  getTable():Table{
    return this.service.table;
  }
  setService(service:Service):void{
    this.service=service;
  }

}
