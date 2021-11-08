import { PregnantEntity } from '@entities/pregnants';
import { ICreatePregnant, IPregnant } from '@shared/interfaces/pregnant/pregnant.interface';
import { IPregnantRepository } from '@shared/interfaces/pregnant/pregnant.repository'
import { getRepository, Repository } from 'typeorm';

export class PregnantRepository implements IPregnantRepository<PregnantEntity>{
  private repository: Repository<PregnantEntity> = getRepository(PregnantEntity)

  async findById(params: string): Promise<PregnantEntity | undefined>{
    return this.repository.findOne({where: params})
  }
  async create(data: ICreatePregnant): Promise<PregnantEntity>{
    return this.repository.create(data)
  }
  async save(data: IPregnant): Promise<PregnantEntity>{
    return this.repository.save(data)
  }
}