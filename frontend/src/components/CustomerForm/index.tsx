"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { api } from "@/lib/api";
import {
  FormContainer,
  FormHeader,
  Title,
  Subtitle,
  Form,
  FormGrid,
  FormField,
  Label,
  Input,
  TextArea,
  Select,
  ImageUpload,
  ImagePreview,
  ButtonGroup,
  Button,
  ErrorText,
} from "./style";

interface CustomerFormData {
  name: string;
  phone: string;
  address: string;
  idType: string;
  idNumber: string;
}

interface CustomerFormProps {
  customer?: {
    id: string;
    name: string;
    phone: string;
    address: string;
    photoUrl?: string;
    idType: string;
    idNumber: string;
  };
  baseUrl?: string;
}

export default function CustomerForm({ customer, baseUrl }: CustomerFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(
    customer?.photoUrl ? `${baseUrl}${customer.photoUrl}` : null
  );
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerFormData>({
    defaultValues: customer,
  });

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: CustomerFormData) => {
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("phone", data.phone);
      formData.append("address", data.address);
      formData.append("idType", data.idType);
      formData.append("idNumber", data.idNumber);
      if (photo) {
        formData.append("photo", photo);
      }

      if (customer?.id) {
        await api.put(`/customers/${customer.id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await api.post("/customers/new", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      router.push("/customers");
    } catch (err: any) {
      setError(err?.response?.data?.message || "Failed to save customer");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <FormHeader>
        <Title>{customer ? "Edit Customer" : "Add New Customer"}</Title>
        <Subtitle>Enter customer details below</Subtitle>
      </FormHeader>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGrid>
          <FormField>
            <Label>Full Name</Label>
            <Input
              {...register("name", { required: "Name is required" })}
              placeholder="Enter customer's full name"
            />
            {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
          </FormField>

          <FormField>
            <Label>Phone Number</Label>
            <Input
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Please enter a valid 10-digit phone number",
                },
              })}
              placeholder="Enter 10-digit phone number"
            />
            {errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
          </FormField>

          <FormField>
            <Label>ID Type</Label>
            <Select
              {...register("idType", { required: "ID type is required" })}
            >
              <option value="">Select ID type</option>
              <option value="AADHAR">Aadhar Card</option>
              <option value="PAN">PAN Card</option>
              <option value="DRIVING_LICENSE">Driving License</option>
              <option value="VOTER_ID">Voter ID</option>
            </Select>
            {errors.idType && <ErrorText>{errors.idType.message}</ErrorText>}
          </FormField>

          <FormField>
            <Label>ID Number</Label>
            <Input
              {...register("idNumber", { required: "ID number is required" })}
              placeholder="Enter ID number"
            />
            {errors.idNumber && <ErrorText>{errors.idNumber.message}</ErrorText>}
          </FormField>
        </FormGrid>

        <FormField>
          <Label>Address</Label>
          <TextArea
            {...register("address", { required: "Address is required" })}
            placeholder="Enter complete address"
          />
          {errors.address && <ErrorText>{errors.address.message}</ErrorText>}
        </FormField>

        <FormField>
          <Label>Photo</Label>
          <ImageUpload>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              style={{ display: "none" }}
              id="photo-upload"
            />
            <label htmlFor="photo-upload" style={{ cursor: "pointer" }}>
              {photoPreview ? (
                <ImagePreview>
                  <img src={photoPreview} alt="Preview" />
                </ImagePreview>
              ) : (
                <div style={{ textAlign: "center" }}>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <p>Click to upload customer photo</p>
                </div>
              )}
            </label>
          </ImageUpload>
        </FormField>

        {error && <ErrorText>{error}</ErrorText>}

        <ButtonGroup>
          <Button
            type="button"
            onClick={() => router.back()}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button type="submit" variant="primary" disabled={loading}>
            {loading ? "Saving..." : customer ? "Update Customer" : "Add Customer"}
          </Button>
        </ButtonGroup>
      </Form>
    </FormContainer>
  );
}