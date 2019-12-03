import { DefaultCrudRepository } from '@loopback/repository';
import { Receta, RecetaRelations } from '../models';
import { MealtmeDbDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class RecetaRepository extends DefaultCrudRepository<
  Receta,
  typeof Receta.prototype.id,
  RecetaRelations
  > {
  constructor(
    @inject('datasources.mealtme_db') dataSource: MealtmeDbDataSource,
  ) {
    super(Receta, dataSource);
  }
}
