import { Injectable } from '@nestjs/common';

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
}
