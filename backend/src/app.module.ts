import { Module } from '@nestjs/common';
import { ContactModule } from './contact/contact.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ContactModule],
  providers: [PrismaService],
})
export class AppModule { }
