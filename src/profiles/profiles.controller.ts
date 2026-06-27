import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profiles')
export class ProfilesController {
  // GET /profiles/
  @Get()
  findAll(@Query('location') location: string) {
    return [{ location }];
  }
  // GET /profiles/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }
  // POST /profile
  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return {
      name: createProfileDto.name,
      description: createProfileDto.description,
    };
  }

  // PUT /profile/:id
  @Put(':id')
  updateProfile(
    @Param('id') id: string,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    return {
      id: id,
      name: updateProfileDto.name,
      description: updateProfileDto.description,
    };
  }

  // DELETE /profiles/:id
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return { id };
  }
}
