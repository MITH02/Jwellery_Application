package com.jwelleryshop.thrive.service;

import com.jwelleryshop.thrive.dto.LoginRequest;
import com.jwelleryshop.thrive.dto.LoginResponse;
import com.jwelleryshop.thrive.model.User;
import com.jwelleryshop.thrive.repository.UserRepository;
import com.jwelleryshop.thrive.security.JwtUtil;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService
{
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthService(final UserRepository userRepository, final PasswordEncoder passwordEncoder, final JwtUtil jwtUtil)
	{
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    public LoginResponse login(final LoginRequest request)
	{
        final User user = this.userRepository.findByUsername(request.getUsername())
									   .orElseThrow(() -> new RuntimeException("Invalid username or password"));

        if (!this.passwordEncoder.matches(request.getPassword(), user.getPassword()))
		{
            throw new RuntimeException("Invalid username or password");
        }

        final String token = this.jwtUtil.generateToken(user.getUsername(), user.getRole().name());

        return new LoginResponse(token, user.getRole().name());
    }
}
