import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Receta} from '../models';
import {RecetaRepository} from '../repositories';

export class RecetasController {
  constructor(
    @repository(RecetaRepository)
    public recetaRepository : RecetaRepository,
  ) {}

  @post('/recetas', {
    responses: {
      '200': {
        description: 'Receta model instance',
        content: {'application/json': {schema: getModelSchemaRef(Receta)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Receta, {
            title: 'NewReceta',
            exclude: ['id'],
          }),
        },
      },
    })
    receta: Omit<Receta, 'id'>,
  ): Promise<Receta> {
    return this.recetaRepository.create(receta);
  }

  @get('/recetas/count', {
    responses: {
      '200': {
        description: 'Receta model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Receta)) where?: Where<Receta>,
  ): Promise<Count> {
    return this.recetaRepository.count(where);
  }

  @get('/recetas', {
    responses: {
      '200': {
        description: 'Array of Receta model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Receta, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Receta)) filter?: Filter<Receta>,
  ): Promise<Receta[]> {
    return this.recetaRepository.find(filter);
  }

  @patch('/recetas', {
    responses: {
      '200': {
        description: 'Receta PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Receta, {partial: true}),
        },
      },
    })
    receta: Receta,
    @param.query.object('where', getWhereSchemaFor(Receta)) where?: Where<Receta>,
  ): Promise<Count> {
    return this.recetaRepository.updateAll(receta, where);
  }

  @get('/recetas/{id}', {
    responses: {
      '200': {
        description: 'Receta model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Receta, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.query.object('filter', getFilterSchemaFor(Receta)) filter?: Filter<Receta>
  ): Promise<Receta> {
    return this.recetaRepository.findById(id, filter);
  }

  @patch('/recetas/{id}', {
    responses: {
      '204': {
        description: 'Receta PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Receta, {partial: true}),
        },
      },
    })
    receta: Receta,
  ): Promise<void> {
    await this.recetaRepository.updateById(id, receta);
  }

  @put('/recetas/{id}', {
    responses: {
      '204': {
        description: 'Receta PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() receta: Receta,
  ): Promise<void> {
    await this.recetaRepository.replaceById(id, receta);
  }

  @del('/recetas/{id}', {
    responses: {
      '204': {
        description: 'Receta DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.recetaRepository.deleteById(id);
  }
}
