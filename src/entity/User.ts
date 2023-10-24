import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("users")
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    nickname!: string

    @Column()
    email!: string

    @Column()
    password!: string

    @Column()
    name!: string

    @Column()
    phone!: number

    @Column()
    createdAt!: Date

    @Column()
    updatedAt!: Date

    @Column()
    enum!: string

}