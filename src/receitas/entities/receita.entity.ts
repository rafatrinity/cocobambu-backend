import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

export type ReceitaDocument = Receita & Document;

class Preparo {
  tempo: string;
  passos: Array<string>;
}
class Image {
  thumb: string;
  foto: string;
}
@Schema()
export class Receita {
  @Prop()
  @ApiProperty({type: String})
  nome: string;
  @Prop()
  @ApiProperty({type: String})
  desc: string;
  @Prop()
  @ApiProperty({type: String})
  Ingredientes: Array<string>;
  @Prop()
  @ApiProperty({type: Preparo})
  preparo: Preparo;
  @Prop()
  @ApiProperty({type: Image})
  image: Image;
}

export const ReceitaSchema = SchemaFactory.createForClass(Receita);
