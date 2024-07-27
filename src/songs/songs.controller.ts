import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Post()
  create() {
    return 'This is a create song method';
  }

  @Get()
  findAll() {
    return 'This will find all songs';
  }

  @Get(':id')
  findOne() {
    return `This will find specific song based on Id`;
  }

  @Put(':id')
  updateOne() {
    return `This will update specific song based on Id`;
  }

  @Delete(':id')
  deleteOne() {
    return 'This will delete specific song based on Id';
  }
}
