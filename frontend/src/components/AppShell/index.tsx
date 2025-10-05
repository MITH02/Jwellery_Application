"use client";

import { useRouter, usePathname } from "next/navigation";
import { HeaderBar, HeaderContent, Logo, Navigation, NavLink, MainContent } from "./style";
import { PropsWithChildren } from "react";

export default function AppShell({ children }: PropsWithChildren) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    router.push("/login");
  };

  return (
    <>
      <HeaderBar>
        <HeaderContent>
          <Logo onClick={() => router.push("/")}>Gode Jewellers</Logo>
          <Navigation>
            <NavLink 
              href="/customers" 
              active={pathname?.startsWith("/customers")}
              onClick={(e) => {
                e.preventDefault();
                router.push("/customers");
              }}
            >
              Customers
            </NavLink>
            <NavLink 
              href="/pledges" 
              active={pathname?.startsWith("/pledges")}
              onClick={(e) => {
                e.preventDefault();
                router.push("/pledges");
              }}
            >
              Pledges
            </NavLink>
            <NavLink 
              href="/login" 
              onClick={(e) => {
                e.preventDefault();
                handleLogout();
              }}
            >
              Logout
            </NavLink>
          </Navigation>
        </HeaderContent>
      </HeaderBar>
      <MainContent>{children}</MainContent>
    </>
  );
}