import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReceitasService } from './receitas.service';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
import { Receita } from './entities/receita.entity';
import { ApiBody } from '@nestjs/swagger';

@Controller('receitas')
export class ReceitasController {
  constructor(private readonly receitasService: ReceitasService) {}

  @ApiBody({type: CreateReceitaDto})
  @Post()
  create(@Body() createReceitaDto: CreateReceitaDto) {
    return this.receitasService.create(createReceitaDto);
  }

  @ApiBody({type: CreateReceitaDto})
  @Get()
  async findAll(): Promise<Receita[]> {
    return this.receitasService.findAll();
  }

  @ApiBody({type: CreateReceitaDto})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.receitasService.findOne(id);
  }

  @ApiBody({type: CreateReceitaDto})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReceitaDto: UpdateReceitaDto) {
    return this.receitasService.update(id, updateReceitaDto);
  }

  @ApiBody({type: CreateReceitaDto})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.receitasService.remove(id);
  }
}
