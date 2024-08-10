import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType() // GraphQL ObjectType
@Entity()
export class Task {
  @Field(() => Int) // GraphQL Field with Int type
  @PrimaryGeneratedColumn()
  id: number;

  @Field() // GraphQL Field with String type
  @Column()
  title: string;

  @Field()
  @Column()
  description: string;

  @Field({ defaultValue: 'Draft' })
  @Column()
  status: string;

  @Field(() => Boolean, { defaultValue: false })
  @Column({ default: false })
  completed: boolean;
}