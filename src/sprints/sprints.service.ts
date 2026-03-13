import { Injectable } from '@nestjs/common';
import { CreateSprintDto } from './dto/create-sprint.dto';
import { UpdateSprintDto } from './dto/update-sprint.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sprint } from './entities/sprint.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SprintsService {
  constructor(
    @InjectRepository(Sprint)
    private sprintsRepository: Repository<Sprint>,
  ) {}
  create(createSprintDto: CreateSprintDto) {
    const newSprint = this.sprintsRepository.create(createSprintDto);
    return this.sprintsRepository.save(newSprint);
  }

  findAll() {
    return this.sprintsRepository.find();
  }

  findOne(id: string) {
    return this.sprintsRepository.findOneBy({ id });
  }

  async update(id: string, updateSprintDto: UpdateSprintDto) {
    const sprint = await this.sprintsRepository.findOneBy({ id });
    if (!sprint) {
      throw new Error('Sprint not found');
    }
    Object.assign(sprint, updateSprintDto);
    return this.sprintsRepository.save(sprint);
  }

  async remove(id: string) {
    const sprint = await this.sprintsRepository.findOneBy({ id });
    if (!sprint) {
      throw new Error('Sprint not found');
    }
    return this.sprintsRepository.remove(sprint);
  }
}
