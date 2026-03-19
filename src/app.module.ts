import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaModule } from './categoria/categoria.module';
import { ProdutoModule } from './produto/produto.module';
import { Produto } from './produto/entities/produto.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_farmacia_pg2',
      //autoLoadEntities: true,
      entities: [Categoria, Produto],
      synchronize: true,
      //logging: true,  - usar so pra ver o relacionamento entre as tabelas no console, nao usar em producao
    }),
    CategoriaModule,
    ProdutoModule

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
