import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HealthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async check() {
    const start = Date.now();

    await this.prisma.$queryRaw`SELECT 1`;

    const latency = Date.now() - start;

    return {
      status: 'UP',

      application: {
        name: this.configService.get('app.name') as string,
        environment: this.configService.get('app.env') as string,
        uptime: process.uptime(),
      },

      database: {
        status: 'CONNECTED',
        latency: `${latency} ms`,
      },

      timestamp: new Date().toISOString(),
    };
  }
}
