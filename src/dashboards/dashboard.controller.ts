import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('total-farms')
  async getTotalFarms() {
    return this.dashboardService.getTotalFarms();
  }

  @Get('total-area')
  async getTotalHectares() {
    return this.dashboardService.getTotalHectares();
  }

  @Get('farms-by-state')
  async getFarmsByState() {
    return this.dashboardService.getFarmsByState();
  }

  @Get('farms-by-crop')
  async getFarmsByCrop() {
    return this.dashboardService.getFarmsByCrop();
  }

  @Get('land-use')
  async getLandUseDistribution() {
    return this.dashboardService.getLandUseDistribution();
  }
}
