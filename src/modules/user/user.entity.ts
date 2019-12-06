import {BaseEntity, Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
import { type } from 'os';

@Entity('Users')
export class User extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column({type:'varchar',unique:true,length:25,nullable:false})
    username:string;

    @Column({type:'varchar',nullable:false})
    email:string;

    @Column({type:'varchar',nullable:false})
    password:string;

    @Column({type:'varchar',default:'ACTIVATE',length:8})
    status:string;

    @Column({type:'timestamp',name:'created_at'})
    createdAt:Date;

    @Column({type:'timestamp',name:'created_at'})
    UpdatedAt:Date;

      
}


