import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
    constructor(private prisma: PrismaService) { }

    async createContact(data: CreateContactDto) {
        return this.prisma.contact.create({ data })
    }
}
