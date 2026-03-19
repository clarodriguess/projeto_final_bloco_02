import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Categoria } from "../entities/categoria.entity";
import { Repository, DeleteResult, ILike } from "typeorm";


@Injectable()
export class CategoriaService {

    //construtor para injetar o repositório da categoria
    constructor (
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>
    ){}

    //listar todas as categorias
    async findAll (): Promise<Categoria[]> {
        return await this.categoriaRepository.find();
    }

    //listar categoria por id
    async findById (id: number): Promise<Categoria> {
       const categoria = await this.categoriaRepository.findOne({
            where: { id },
        })         //select * from tb_categorias where id = ? 
        if (!categoria) 
            throw new HttpException(`Categoria com id ${id} não encontrada`, HttpStatus.NOT_FOUND); //lançar um erro caso a categoria nao seja encontrada
        return categoria; //se nao tiver erro, retorna a categoria encontrada
    }
    

    //listar categoria por nome    
    async findAllByNome(nome: string): Promise<Categoria[]> {
        return this.categoriaRepository.find({
            where: {
                nome: ILike(`%${nome}%`) //select * from tb_categoria where nome like '%nome%'
            },
        })
    }

    //método para criar uma nova categoria
    async create (categoria: Categoria): Promise<Categoria> {
        return await this.categoriaRepository.save(categoria);
    }

    //atualizar uma categoria existente
    async update (categoria: Categoria): Promise<Categoria> {
        if(!categoria.id || categoria.id <= 0) 
            throw new HttpException("ID da categoria inválido", HttpStatus.BAD_REQUEST);
        
        await this.findById(categoria.id);
        return this.categoriaRepository.save(categoria);
    }

    //deletar uma categoria por id
    async delete(id: number): Promise<DeleteResult> {         
        await this.findById(id);        //chamar o findById() para verificar se o tema existe, se nao existir, ele lança um erro
        return this.categoriaRepository.delete(id); //delete from tb_categorias where id = ?
    }   

}