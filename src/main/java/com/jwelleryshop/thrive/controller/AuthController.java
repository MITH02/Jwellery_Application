package com.jwelleryshop.thrive.controller;


import com.jwelleryshop.thrive.dto.LoginRequest;
import com.jwelleryshop.thrive.dto.LoginResponse;
import com.jwelleryshop.thrive.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/auth")
public class AuthController
{
    private final AuthService authService;

	@Autowired
	public AuthController(final AuthService authService)
	{
		this.authService = authService;
	}

    @PostMapping(value = "/login")
    public LoginResponse login(@RequestBody final LoginRequest request)
	{
        return this.authService.login(request);
    }
}
