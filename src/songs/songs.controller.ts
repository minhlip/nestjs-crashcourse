import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
  constructor(private songService: SongsService) {}
  @Post()
  create(@Body() createSongDTO: CreateSongDTO) {
    return this.songService.create(createSongDTO);
  }

  @Get()
  findAll() {
    return this.songService.findAll();
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
