import fs from "fs"
import path from "path"
import { parse } from "csv-parse/sync"

// Define types for our data
export interface Province {
  id: string
  name: string
}

export interface City {
  id: string
  provinceId: string
  name: string
}

export interface District {
  id: string
  cityId: string
  name: string
}

export interface Village {
  id: string
  districtId: string
  name: string
}

// Function to read and parse CSV files
function readCSV<T>(filePath: string): T[] {
  const fullPath = path.join(process.cwd(), filePath)
  const fileContent = fs.readFileSync(fullPath, "utf8")
  return parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  }) as T[]
}

// Cache the data to avoid reading the files multiple times
let provincesCache: Province[] | null = null
let citiesCache: City[] | null = null
let districtsCache: District[] | null = null
let villagesCache: Village[] | null = null

// Get all provinces
export function getProvinces(): Province[] {
  if (!provincesCache) {
    provincesCache = readCSV<Province>("public/data/provinces.csv")
  }
  return provincesCache
}

// Get all cities
export function getCities(): City[] {
  if (!citiesCache) {
    citiesCache = readCSV<City>("public/data/cities.csv")
  }
  return citiesCache
}

// Get cities by province ID
export function getCitiesByProvinceId(provinceId: string): City[] {
  const cities = getCities()
  return cities.filter((city) => city.provinceId === provinceId)
}

// Get all districts
export function getDistricts(): District[] {
  if (!districtsCache) {
    districtsCache = readCSV<District>("public/data/districts.csv")
  }
  return districtsCache
}

// Get districts by city ID
export function getDistrictsByCityId(cityId: string): District[] {
  const districts = getDistricts()
  return districts.filter((district) => district.cityId === cityId)
}

// Get all villages
export function getVillages(): Village[] {
  if (!villagesCache) {
    villagesCache = readCSV<Village>("public/data/villages.csv")
  }
  return villagesCache
}

// Get villages by district ID
export function getVillagesByDistrictId(districtId: string): Village[] {
  const villages = getVillages()
  return villages.filter((village) => village.districtId === districtId)
}

// Get province by ID
export function getProvinceById(id: string): Province | undefined {
  const provinces = getProvinces()
  return provinces.find((province) => province.id === id)
}

// Get city by ID
export function getCityById(id: string): City | undefined {
  const cities = getCities()
  return cities.find((city) => city.id === id)
}

// Get district by ID
export function getDistrictById(id: string): District | undefined {
  const districts = getDistricts()
  return districts.find((district) => district.id === id)
}

// Get village by ID
export function getVillageById(id: string): Village | undefined {
  const villages = getVillages()
  return villages.find((village) => village.id === id)
}
