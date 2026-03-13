import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
  ) {}
  create(createCommentDto: CreateCommentDto) {
    const newComment = this.commentsRepository.create(createCommentDto);
    return this.commentsRepository.save(newComment);
  }

  findAll() {
    return this.commentsRepository.find();
  }

  findOne(id: string) {
    return this.commentsRepository.findOneBy({ id });
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    const comment = await this.commentsRepository.findOneBy({ id });
    if (!comment) {
      throw new Error('Comment not found');
    }
    Object.assign(comment, updateCommentDto);
    return this.commentsRepository.save(comment);
  }

  async remove(id: string) {
    const comment = await this.commentsRepository.findOneBy({ id });
    if (!comment) {
      throw new Error('Comment not found');
    }
    return this.commentsRepository.remove(comment);
  }
}
