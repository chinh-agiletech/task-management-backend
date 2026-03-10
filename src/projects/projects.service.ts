import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

export interface FillerRequestProject {
  title?: string;
  ownerId?: string;
}

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  create(createProjectDto: CreateProjectDto) {
    const newProject = this.projectRepository.create(createProjectDto);
    return this.projectRepository.save(newProject);
  }

  findAll(fillerRequest: FillerRequestProject) {
    const query = this.projectRepository.createQueryBuilder('project');

    if (fillerRequest.title) {
      query.andWhere('project.title ILIKE :title', {
        title: `%${fillerRequest.title}%`,
      });
    }
    if (fillerRequest.ownerId) {
      query.andWhere('project.ownerId = :ownerId', {
        ownerId: fillerRequest.ownerId,
      });
    }
    return query.getMany();
  }

  findOne(id: string) {
    const project = this.projectRepository.findOne({
      where: { id },
    });

    return project;
  }

  async update(id: string, updateProjectDto: UpdateProjectDto) {
    const project = await this.findOne(id);

    if (!project) {
      throw new NotFoundException(`Project with id ${id} not found`);
    }

    Object.assign(project, updateProjectDto);

    return this.projectRepository.save(project);
  }

  async remove(id: string) {
    const project = await this.findOne(id);

    if (!project) {
      throw new NotFoundException(`Project with id ${id} not found`);
    }

    return this.projectRepository.remove(project);
  }
}
