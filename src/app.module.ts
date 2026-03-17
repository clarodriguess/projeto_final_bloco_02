import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_farmacia_pg2',
      autoLoadEntities: true,
      synchronize: true,
      //logging: true,  - usar so pra ver o relacionamento entre as tabelas no console, nao usar em producao
    }),],
  controllers: [],
  providers: [],
})
export class AppModule {}
