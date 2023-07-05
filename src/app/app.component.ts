//import {HashtableController} from '../presentation/controller/HashtableController.ts';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MenuItem} from "primeng/api";
//import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import {HashtableController} from "./presentation/controller/HashtableController";
import {Service} from "./service/Service";
import {Table} from "./model/Table";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],


})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  }


}
