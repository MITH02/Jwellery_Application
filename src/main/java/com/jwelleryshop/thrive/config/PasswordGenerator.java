package com.jwelleryshop.thrive.config;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

// Important file if we forget the password

public class PasswordGenerator
{
    public static void main(final String[] args)
	{
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String hashed = encoder.encode("admin123");
        System.out.println(hashed);
    }
}
