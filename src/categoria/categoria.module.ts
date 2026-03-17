import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaController } from './controllers/categoria.controller';
import { CategoriaService } from './services/categoria.service';
import { Categoria } from './entities/categoria.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Categoria])], //chamar a entidade Categoria
    controllers: [CategoriaController], //classe que vai responder as requisições (rotas)
    providers: [CategoriaService],//classe q vai prover os serviços (métodos) para o controller
    exports: [CategoriaService] //para poder ser usado em outros módulos (como o PostagemModule)
})
export class CategoriaModule {}