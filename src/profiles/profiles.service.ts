import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: crypto.randomUUID(),
      name: 'Alice Johnson',
      description:
        'Frontend developer focused on building accessible web applications.',
    },
    {
      id: crypto.randomUUID(),
      name: 'Brian Mwangi',
      description: 'Backend engineer specializing in APIs and database design.',
    },
    {
      id: crypto.randomUUID(),
      name: 'Cynthia Patel',
      description:
        'UI/UX designer creating intuitive and user-centered experiences.',
    },
  ];

  findAll() {
    return this.profiles;
  }

  findOne(id: string) {
    return this.profiles.find((p) => p.id === id);
  }
  createOne(data: CreateProfileDto) {
    this.profiles.push({
      id: crypto.randomUUID(),
      ...data,
    });
    return this.profiles.find((p) => p.name === data.name);
  }
  update(id: string, data: UpdateProfileDto) {
    const match = this.profiles.find((p) => p.id === id);

    if (!match) return {};
    match.name = data.name;
    match.description = data.description;

    return match;
  }
}
