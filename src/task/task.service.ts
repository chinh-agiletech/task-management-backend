import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { StatusTask, Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  create(createTaskDto: CreateTaskDto) {
    const task = this.taskRepository.create(createTaskDto);
    return this.taskRepository.save(task);
  }

  findAll() {
    return this.taskRepository.find();
  }

  async findOne(id: string) {
    const task = await this.taskRepository.findOne({ where: { id } });

    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    return task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const task = await this.findOne(id);
    Object.assign(task, updateTaskDto);
    return this.taskRepository.save(task);
  }

  async remove(id: string) {
    const task = await this.findOne(id);
    return this.taskRepository.remove(task);
  }

  async updatedStatus(id: string, status: StatusTask) {
    const task = await this.findOne(id);
    task.statusTask = status;
    return this.taskRepository.save(task);
  }
  async assginTask(id: string, userId: string) {
    const task = await this.findOne(id);
    task.userId = userId;

    Object.assign(task, userId);
    return this.taskRepository.save(task);
  }
}
