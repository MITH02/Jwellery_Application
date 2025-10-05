package com.jwelleryshop.thrive.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Base64;
import java.util.Date;

@Component
public class JwtUtil
{
	@Value("${jwt.secret}")
	private String secret;

	private Key key;

	@PostConstruct
	public void init()
	{
		final String base64Secret = Base64.getEncoder().encodeToString(this.secret.getBytes());

		this.key = Keys.hmacShaKeyFor(base64Secret.getBytes());
	}

	public String generateToken(final String username, final String role)
	{
		long EXPIRATION_MS = 24 * 60 * 60 * 1000;

		return Jwts.builder()
				   .setSubject(username)
				   .claim("role", role)
				   .setIssuedAt(new Date())
				   .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_MS))
				   .signWith(this.key, SignatureAlgorithm.HS256)
				   .compact();
	}

	public Claims validateToken(final String token)
	{
		return Jwts.parserBuilder()
				   .setSigningKey(this.key)
				   .build()
				   .parseClaimsJws(token)
				   .getBody();
	}
}
