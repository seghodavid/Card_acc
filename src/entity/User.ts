import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, BaseEntity} from "typeorm";
import {v4 as uuid} from 'uuid'

@Entity("users")
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    email: string;

    @Column({
        length: 16
    })
    cardNumber: string;

    @Column()
    month: string;

    @Column()
    year: string;

    @Column()
    cvv: string;

    @Column()
    name: string;

    @Column()
    country: string;

    @Column()
    zipcode: string;

    @Column({
        type: 'uuid'
    })
    uuid: string;

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @BeforeInsert()
    createUuid() {
        this.uuid = uuid()
    }

    toJSON() {
        return{...this, id:undefined}
    }
}
