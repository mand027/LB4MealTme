import {DefaultCrudRepository} from '@loopback/repository';
import {User, UserRelations} from '../models';
import {MealtmeDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.email,
  UserRelations
> {
  constructor(
    @inject('datasources.mealtme_db') dataSource: MealtmeDbDataSource,
  ) {
    super(User, dataSource);
  }
}
