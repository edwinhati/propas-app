/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, Fragment } from "react";

export default function AddressInformation({ formData, handleInputChange }: any) {
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [regencies, setRegencies] = useState([]);
  const [selectedRegency, setSelectedRegency] = useState("");
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [villages, setVillages] = useState([]);
  const [selectedVillage, setSelectedVillage] = useState("");

  const SelectInput = ({ id, label, options, onChange, value }: any) => (
    <div className="mb-6">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label} <span className="text-red-500">*</span>
      </label>
      <select
        id={id}
        required
        onChange={(e) => onChange(e.target.value)}
        value={value}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
      >
        <option>Pilih {label}</option>
        {options.map((option: any) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );

  const fetchData = async (
    url: string,
    errorMessage: string,
    setter: Function
  ) => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch ${errorMessage}`);
      }

      const data = await response.json();
      setter(data);
    } catch (error) {
      console.error(`Error fetching ${errorMessage}:`);
    }
  };

  useEffect(() => {
    handleInputChange({
      target: {
        id: "province",
        value: selectedProvince,
      },
    });
  }, [selectedProvince]);

  useEffect(() => {
    handleInputChange({
      target: {
        id: "regency",
        value: selectedRegency,
      },
    });
  }, [selectedRegency]);

  useEffect(() => {
    handleInputChange({
      target: {
        id: "district",
        value: selectedDistrict,
      },
    });
  }, [selectedDistrict]);

  useEffect(() => {
    handleInputChange({
      target: {
        id: "village",
        value: selectedVillage,
      },
    });
  }, [selectedVillage]);

  useEffect(() => {
    fetchData(
      "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json",
      "provinces",
      setProvinces
    );
  }, []);

  useEffect(() => {
    if (selectedProvince) {
      const province: any = provinces.find(
        (item: any) => item.name === selectedProvince
      );
      fetchData(
        `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${province.id}.json`,
        "regencies",
        setRegencies
      );
    } else {
      setRegencies([]);
    }
  }, [selectedProvince, provinces]);

  useEffect(() => {
    if (selectedRegency) {
      const regency: any = regencies.find(
        (item: any) => item.name === selectedRegency
      );
      fetchData(
        `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${regency.id}.json`,
        "districts",
        setDistricts
      );
    } else {
      setDistricts([]);
    }
  }, [selectedRegency, regencies]);

  useEffect(() => {
    if (selectedDistrict) {
      const district: any = districts.find(
        (item: any) => item.name === selectedDistrict
      );
      fetchData(
        `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${district.id}.json`,
        "villages",
        setVillages
      );
    }
  }, [selectedDistrict, districts]);

  return (
    <Fragment>
      <SelectInput
        id="province"
        label="Provinsi"
        options={provinces}
        onChange={setSelectedProvince}
        value={selectedProvince}
      />
      <SelectInput
        id="regency"
        label="Kabupaten/Kota"
        options={regencies}
        onChange={setSelectedRegency}
        value={selectedRegency}
      />
      <SelectInput
        id="district"
        label="Kecamatan"
        options={districts}
        onChange={setSelectedDistrict}
        value={selectedDistrict}
      />
      <SelectInput
        id="village"
        label="Kelurahan/Desa"
        options={villages}
        onChange={setSelectedVillage}
        value={selectedVillage}
      />
      <div className="mb-6">
        <label
          htmlFor="address"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Alamat<span className="text-red-500">*</span>
        </label>
        <textarea
          id="address"
          className="block p-2.5 h-32 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
          placeholder="Masukkan alamat"
          required
          value={formData.address}
          onChange={handleInputChange}
        ></textarea>
      </div>
    </Fragment>
  );
}
