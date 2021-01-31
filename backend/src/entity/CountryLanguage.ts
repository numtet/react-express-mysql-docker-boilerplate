import { Entity, Column, PrimaryColumn } from "typeorm";
import { Country } from "./Country";

@Entity("countrylanguage")
export class CountryLanguage {
  @PrimaryColumn({ length: 3, name: "countryCode" })
  countryCode: string;

  @PrimaryColumn({ length: 35 })
  language: string;

  @Column()
  isOfficial: boolean;

  @Column({ type: "decimal", precision: 4, scale: 1 })
  percentage: number;

  constructor(
    language: string,
    country_code: string,
    isOfficial: boolean,
    percentage: number
  ) {
    this.language = language;
    this.countryCode = country_code;
    this.isOfficial = isOfficial;
    this.percentage = percentage;
  }
}
