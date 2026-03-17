import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_farmacia_pg2',
      //autoLoadEntities: true,
      entities: [Categoria],
      synchronize: true,
      //logging: true,  - usar so pra ver o relacionamento entre as tabelas no console, nao usar em producao
    }),
    CategoriaModule

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
