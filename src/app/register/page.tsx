"use client";
import { useState, Fragment } from "react";
import api from "@/config";
import PersonalInformation from "@/components/PersonalInformation";
import AddressInformation from "@/components/AddressInformation";
import AccountInformation from "@/components/AccountInformation";
import FormSubmission from "@/components/FormSubmission";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormInfo from "@/components/FormInfo";
import FormDanger from "@/components/FormDanger";
import Stepper from "@/components/Stepper";
import UploadForm from "@/components/UploadForm";
import Success from "@/components/Success";

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [file, setFile] = useState<File>();
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [isError, setIsError] = useState(false);
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const memberResponse = await api.post("/members", {
        nik: formData.nik,
        full_name: formData.fullName,
        place_of_birth: formData.placeOfBirth,
        date_of_birth: formData.dateOfBirth,
        gender: formData.gender,
        province: formData.province,
        regency: formData.regency,
        district: formData.district,
        village: formData.village,
        address: formData.address,
        marital_status: formData.maritalStatus,
        phone_number: formData.phoneNumber,
        email: formData.email,
        password: formData.password,
      });
      if (memberResponse.status === 201) {
        const memberId = memberResponse.data.id;
        setId(memberId);
        setLoading(false);
        setCurrentStep(2);
      }
    } catch (memberError) {
      console.error("Error creating member:", memberError);
      handleSubmissionError();
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (file) {
        const data = new FormData();
        const doc = new File([file], `${formData.nik}.png`, {
          type: file.type,
        });
        data.append("file", doc);

        const uploadResponse = await api.post("/upload", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (uploadResponse.status === 201) {
          setLoading(false);
          setCurrentStep(3);
        } else {
          console.error("Upload failed with status:", uploadResponse.status);
        }
      } else {
        console.error("No file selected for upload.");
      }
    } catch (uploadError) {
      console.error("Error uploading file:", uploadError);
    }
  };

  const handleSubmissionError = () => {
    setIsError(true);
    setLoading(false);
    window.scrollTo(0, 0);
  };

  return (
    <Fragment>
      <Header />
      <main className="sm:py-8 bg-white mb-6">
        <div className="container mx-auto">
          <Stepper currentStep={currentStep} />
          {currentStep === 1 && (
            <div className="mx-auto bg-white p-6 rounded-lg shadow-xl">
              {isError ? <FormDanger /> : <FormInfo />}
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <form onSubmit={handleSubmit}>
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
                  <FormSubmission setKtpFile={setFile} loading={loading} />
                </form>
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div className="mx-auto bg-white p-6 rounded-lg shadow-xl">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <form onSubmit={handleUpload}>
                  <UploadForm
                    ktpFile={file}
                    setKtpFile={setFile}
                    loading={loading}
                  />
                </form>
              </div>
            </div>
          )}
          {currentStep === 3 && <Success id={id} />}
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
