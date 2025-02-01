export class TotalFarmsDto {
  totalFarms: number;
}

export class TotalHectaresDto {
  totalHectares: number;
}

export class FarmsByStateDto {
  state: string;
  count: number;
}

export class FarmsByCropDto {
  crop: string;
  count: number;
}

export class LandUseDistributionDto {
  agriculturalArea: number;
  vegetationArea: number;
}
