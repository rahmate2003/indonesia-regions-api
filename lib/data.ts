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

// Get sorted provinces by name
export function getSortedProvincesByName(): Province[] {
  const provinces = getProvinces()
  return [...provinces].sort((a, b) => 
    a.name.toLowerCase().localeCompare(b.name.toLowerCase(), 'id')
  )
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

// Get sorted cities by province ID and name
export function getSortedCitiesByProvinceId(provinceId: string): City[] {
  const cities = getCitiesByProvinceId(provinceId)
  return [...cities].sort((a, b) => 
    a.name.toLowerCase().localeCompare(b.name.toLowerCase(), 'id')
  )
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

// Get sorted districts by city ID and name
export function getSortedDistrictsByCityId(cityId: string): District[] {
  const districts = getDistrictsByCityId(cityId)
  return [...districts].sort((a, b) => 
    a.name.toLowerCase().localeCompare(b.name.toLowerCase(), 'id')
  )
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

// Get sorted villages by district ID and name
export function getSortedVillagesByDistrictId(districtId: string): Village[] {
  const villages = getVillagesByDistrictId(districtId)
  return [...villages].sort((a, b) => 
    a.name.toLowerCase().localeCompare(b.name.toLowerCase(), 'id')
  )
}

// Get province by ID
export function getProvinceById(id: string): Province | undefined {
  const provinces = getProvinces()
  return provinces.find((province) => province.id === id)
}

// Get city by ID
export function getCityById(cityId: string): City | undefined {
  const cities = getCities()
  return cities.find((city) => city.id === cityId)
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



