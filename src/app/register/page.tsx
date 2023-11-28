"use client";
import { useState, Fragment } from "react";
import api from "@/config";
import PersonalInformation from "@/components/PersonalInformation";
import AddressInformation from "@/components/AddressInformation";
import AccountInformation from "@/components/AccountInformation";
import FormSubmission from "@/components/FormSubmission";
import PopUp from "@/components/PopUp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormInfo from "@/components/FormInfo";
import FormDanger from "@/components/FormDanger";

export default function RegisterPage() {
  const [file, setFile] = useState<File>();
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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
        try {
          const data = new FormData();
          if (file) {
            const doc = new File([file], `${formData.nik}.png`, {
              type: file.type,
            });
            data.append("file", doc);
          }
          const uploadResponse = await api.post("/upload", data, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          if (uploadResponse.status === 201) {
            setIsSuccess(true);
            setLoading(false);
            window.scrollTo(0, 0);
          }
        } catch (uploadError) {
          console.error("Error uploading file:", uploadError);
        }
      }
    } catch (memberError) {
      console.error("Error creating member:", memberError);
      handleSubmissionError();
    } finally {
      setLoading(false);
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
        </div>
      </main>
      <PopUp isOpen={isSuccess} id={id} />
      <Footer />
    </Fragment>
  );
}
