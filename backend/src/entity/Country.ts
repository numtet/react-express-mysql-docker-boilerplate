import { Entity, Column, PrimaryColumn } from "typeorm";

enum Continent {
  ASIA = "Asia",
  EUROPE = "Europe",
  NORTH_AMERICA = "North America",
  AFRICA = "Africa",
  OCEANIA = "Oceania",
  ANTARCTICA = "Antarctica",
  SOUTH_AMERICA = "South America",
}

@Entity()
export class Country {
  @PrimaryColumn({ length: 3 })
  code!: string;

  @Column({ length: 52 })
  name!: string;

  @Column({
    type: "enum",
    enum: Continent,
    default: Continent.ASIA,
  })
  continent!: Continent;

  @Column({ length: 26 })
  region!: string;

  @Column({ type: "decimal", precision: 10, scale: 2, name: "surfaceArea" })
  surface_area!: number;

  @Column({ type: "smallint", width: 6, name: "indepYear" })
  indep_year!: number;

  @Column({ type: "int", width: 11 })
  population!: number;

  @Column({ type: "decimal", precision: 3, scale: 1, name: "lifeExpectancy" })
  life_expectancy!: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  gnp!: number;

  @Column({ type: "decimal", precision: 10, scale: 2, name: "gnpOld" })
  gnp_old!: number;

  @Column({ length: 45, name: "localName" })
  local_name!: string;

  @Column({ length: 45, name: "governmentForm" })
  government_form!: string;

  @Column({ length: 60, name: "headOfState" })
  head_of_state!: string;

  @Column({ type: "int", width: 11 })
  capital!: string;

  @Column({ length: 2 })
  code2!: string;

  constructor(
    code: string,
    name: string,
    continent: Continent,
    region: string,
    surface_area: number,
    indep_year: number,
    population: number,
    life_expectancy: number,
    gnp: number,
    gnp_old: number,
    local_name: string,
    government_form: string,
    head_of_state: string,
    capital: string,
    code2: string
  ) {
    this.code = code;
    this.name = name;
    this.continent = continent;
    this.region = region;
    this.surface_area = surface_area;
    this.indep_year = indep_year;
    this.population = population;
    this.life_expectancy = life_expectancy;
    this.gnp = gnp;
    this.gnp_old = gnp_old;
    this.local_name = local_name;
    this.government_form = government_form;
    this.head_of_state = head_of_state;
    this.capital = capital;
    this.code2 = code2;
  }
}
