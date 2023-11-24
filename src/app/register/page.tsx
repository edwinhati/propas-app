"use client";
import { useState, Fragment } from "react";
import PersonalInformation from "@/components/PersonalInformation";
import AddressInformation from "@/components/AddressInformation";
import AccountInformation from "@/components/AccountInformation";
import FormSubmission from "@/components/FormSubmission";

export default function RegisterPage() {
  const [file, setFile] = useState<File>();
  const [formData, setFormData] = useState({
    nik: "",
    fullName: "",
    placeOfBirth: "",
    dateOfBirth: "",
    gender: "M",
    province: "",
    regency: "",
    district: "",
    village: "",
    address: "",
    maritalStatus: "Belum Menikah",
    phoneNumber: "",
    email: "",
    password: null,
  });

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleRadioChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Fragment>
      <main className="sm:py-8 bg-white mb-6">
        <div className="container mx-auto">
          <div className="mx-auto bg-white p-6 rounded-lg shadow-xl">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md -mt-5 md:-mt-10">
              <form>
                <PersonalInformation
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleRadioChange={handleRadioChange}
                />
                <AddressInformation
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
                <AccountInformation
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
                <FormSubmission setKtpFile={setFile} />
              </form>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}
