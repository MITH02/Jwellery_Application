"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import {
  LoginContainer,
  LoginCard,
  LoginHeader,
  Logo,
  Subtitle,
  LoginForm,
  FormField,
  Label,
  Input,
  SubmitButton,
  ErrorMessage,
} from "./style";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await api.post("/auth/login", { username, password });
      localStorage.setItem("auth_token", response.data.token);
      localStorage.setItem("auth_role", response.data.role);
      router.push("/customers");
    } catch (err: any) {
      setError(err?.response?.data?.message || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <LoginCard>
        <LoginHeader>
          <Logo>Gode Jewellers</Logo>
          <Subtitle>Admin Dashboard</Subtitle>
        </LoginHeader>
        <LoginForm onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoFocus
            />
          </FormField>
          <FormField>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormField>
          {error && (
            <ErrorMessage>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM7 3v6h2V3H7zm0 8v2h2v-2H7z"
                  fill="currentColor"
                />
              </svg>
              {error}
            </ErrorMessage>
          )}
          <SubmitButton type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </SubmitButton>
        </LoginForm>
      </LoginCard>
    </LoginContainer>
  );
}