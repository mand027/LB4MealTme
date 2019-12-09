import { Entity, model, property } from '@loopback/repository';

@model()
export class Receta extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  type: string;

  @property({
    type: 'string',
    required: true,
  })
  autor: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'string',
  })
  ingredientes?: string;

  @property({
    type: 'string',
  })
  preparacion?: string;

  @property({
    type: 'string',
  })
  imagen?: any;

  @property({
    type: 'string',
  })
  video?: any;

  @property({
    type: 'string',
  })
  remindAtAddress?: string; // address,city,zipcode

  @property({
    type: 'string',
  })
  remindAtGeo?: string; // latitude,longitude

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;


  constructor(data?: Partial<Receta>) {
    super(data);
  }
}

export interface RecetaRelations {
  // describe navigational properties here
}

export type RecetaWithRelations = Receta & RecetaRelations;
