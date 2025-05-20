"use client"

import { useState, useEffect } from "react"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

type Region = {
  id: string
  name: string
  [key: string]: string
}

export function RegionSelector() {
  const [provinces, setProvinces] = useState<Region[]>([])
  const [cities, setCities] = useState<Region[]>([])
  const [districts, setDistricts] = useState<Region[]>([])
  const [villages, setVillages] = useState<Region[]>([])
  
  const [selectedProvince, setSelectedProvince] = useState<string>("")
  const [selectedCity, setSelectedCity] = useState<string>("")
  const [selectedDistrict, setSelectedDistrict] = useState<string>("")
  const [selectedVillage, setSelectedVillage] = useState<string>("")
  
  const [isLoading, setIsLoading] = useState({
    provinces: false,
    cities: false,
    districts: false,
    villages: false
  })

  // Fetch provinces on component mount
  useEffect(() => {
    const fetchProvinces = async () => {
      setIsLoading(prev => ({ ...prev, provinces: true }))
      try {
        const response = await fetch('/api/provinces')
        const result = await response.json()
        if (result.status) {
          setProvinces(result.data)
        }
      } catch (error) {
        console.error('Error fetching provinces:', error)
      } finally {
        setIsLoading(prev => ({ ...prev, provinces: false }))
      }
    }
    
    fetchProvinces()
  }, [])
  
  // Fetch cities when province is selected
  useEffect(() => {
    if (!selectedProvince) {
      setCities([])
      return
    }
    
    const fetchCities = async () => {
      setIsLoading(prev => ({ ...prev, cities: true }))
      try {
        const response = await fetch(`/api/cities/${selectedProvince}`)
        const result = await response.json()
        if (result.status) {
          setCities(result.data)
        }
      } catch (error) {
        console.error('Error fetching cities:', error)
      } finally {
        setIsLoading(prev => ({ ...prev, cities: false }))
      }
    }
    
    fetchCities()
    setSelectedCity("")
    setSelectedDistrict("")
    setSelectedVillage("")
  }, [selectedProvince])
  
  // Fetch districts when city is selected
  useEffect(() => {
    if (!selectedCity) {
      setDistricts([])
      return
    }
    
    const fetchDistricts = async () => {
      setIsLoading(prev => ({ ...prev, districts: true }))
      try {
        const response = await fetch(`/api/districts/${selectedCity}`)
        const result = await response.json()
        if (result.status) {
          setDistricts(result.data)
        }
      } catch (error) {
        console.error('Error fetching districts:', error)
      } finally {
        setIsLoading(prev => ({ ...prev, districts: false }))
      }
    }
    
    fetchDistricts()
    setSelectedDistrict("")
    setSelectedVillage("")
  }, [selectedCity])
  
  // Fetch villages when district is selected
  useEffect(() => {
    if (!selectedDistrict) {
      setVillages([])
      return
    }
    
    const fetchVillages = async () => {
      setIsLoading(prev => ({ ...prev, villages: true }))
      try {
        const response = await fetch(`/api/villages/${selectedDistrict}`)
        const result = await response.json()
        if (result.status) {
          setVillages(result.data)
        }
      } catch (error) {
        console.error('Error fetching villages:', error)
      } finally {
        setIsLoading(prev => ({ ...prev, villages: false }))
      }
    }
    
    fetchVillages()
    setSelectedVillage("")
  }, [selectedDistrict])

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="province">Provinsi</Label>
        <Select 
          value={selectedProvince} 
          onValueChange={setSelectedProvince}
          disabled={isLoading.provinces}
        >
          <SelectTrigger id="province">
            <SelectValue placeholder="Pilih Provinsi" />
          </SelectTrigger>
          <SelectContent>
            {provinces.map(province => (
              <SelectItem key={province.id} value={province.id}>
                {province.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="city">Kabupaten/Kota</Label>
        <Select 
          value={selectedCity} 
          onValueChange={setSelectedCity}
          disabled={!selectedProvince || isLoading.cities}
        >
          <SelectTrigger id="city">
            <SelectValue placeholder="Pilih Kabupaten/Kota" />
          </SelectTrigger>
          <SelectContent>
            {cities.map(city => (
              <SelectItem key={city.id} value={city.id}>
                {city.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="district">Kecamatan</Label>
        <Select 
          value={selectedDistrict} 
          onValueChange={setSelectedDistrict}
          disabled={!selectedCity || isLoading.districts}
        >
          <SelectTrigger id="district">
            <SelectValue placeholder="Pilih Kecamatan" />
          </SelectTrigger>
          <SelectContent>
            {districts.map(district => (
              <SelectItem key={district.id} value={district.id}>
                {district.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="village">Desa/Kelurahan</Label>
        <Select 
          value={selectedVillage} 
          onValueChange={setSelectedVillage}
          disabled={!selectedDistrict || isLoading.villages}
        >
          <SelectTrigger id="village">
            <SelectValue placeholder="Pilih Desa/Kelurahan" />
          </SelectTrigger>
          <SelectContent>
            {villages.map(village => (
              <SelectItem key={village.id} value={village.id}>
                {village.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      {selectedVillage && (
        <div className="p-4 mt-4 bg-primary/10 rounded-md">
          <p className="font-medium">Selected Region:</p>
          <p>     
            {"Kelurahan/Desa "}
            {villages.find(v => v.id === selectedVillage)?.name}, {" "}
            {"Kecamatan "}
            {districts.find(d => d.id === selectedDistrict)?.name}, {" "}
            {"Kabupaten/Kota "}
            {cities.find(c => c.id === selectedCity)?.name}, {""}
            {"Provinsi "}
            {provinces.find(p => p.id === selectedProvince)?.name} {" "}
          </p>
        </div>
      )}
    </div>
  )
}