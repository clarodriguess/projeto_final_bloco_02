import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty, Length } from "class-validator";
import { Column,Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";


@Entity({name:'tb_categoria'})
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number;

    @Transform(({ value } : TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Length(2, 100)
    @Column({ length: 100 })
    nome: string;

    @Length(2, 255)
    @Column({ length: 255, nullable: true })
    descricao: string;

        
  //relacionamento com a entidade Produto (uma categoria pode ter muitos produtos)
  @OneToMany(() => Produto, (produto) => produto.categoria)
  produtos: Produto[];

}