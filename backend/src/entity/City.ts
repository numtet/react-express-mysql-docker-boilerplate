import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 35 })
  name: string;

  @Column({ length: 3, name: "countryCode" })
  country_code: string;

  @Column({ length: 20 })
  district: string;

  @Column({ type: "int", width: 11 })
  population: number;

  constructor(
    name: string,
    country_code: string,
    district: string,
    population: number
  ) {
    this.name = name;
    this.country_code = country_code;
    this.district = district;
    this.population = population;
  }
}
