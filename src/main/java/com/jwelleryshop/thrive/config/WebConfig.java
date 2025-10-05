package com.jwelleryshop.thrive.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer
{
	@Override
	public void addResourceHandlers(final ResourceHandlerRegistry registry)
	{
		registry.addResourceHandler("/uploads/**")
				.addResourceLocations("file:D:/Jwellery_Application/uploads/")
				.setCachePeriod(3600)
				.resourceChain(true);
	}
}
