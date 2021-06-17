import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReceitasService } from './receitas.service';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
import { Receita } from './entities/receita.entity';
import { ApiBody } from '@nestjs/swagger';

@Controller('receitas')
export class ReceitasController {
  constructor(private readonly receitasService: ReceitasService) {}

  @Post()
  @ApiBody({type: CreateReceitaDto})
  create(@Body() createReceitaDto: CreateReceitaDto) {
    return this.receitasService.create(createReceitaDto);
  }

  @Get()
  @ApiBody({type: CreateReceitaDto})
  async findAll(): Promise<Receita[]> {
    return this.receitasService.findAll();
  }

  @Get(':id')
  @ApiBody({type: CreateReceitaDto})
  findOne(@Param('id') id: string) {
    return this.receitasService.findOne(id);
  }

  @Patch(':id')
  @ApiBody({type: CreateReceitaDto})
  update(@Param('id') id: string, @Body() updateReceitaDto: UpdateReceitaDto) {
    return this.receitasService.update(id, updateReceitaDto);
  }

  @Delete(':id')
  @ApiBody({type: CreateReceitaDto})
  remove(@Param('id') id: string) {
    return this.receitasService.remove(id);
  }
}
