package com.familypharmacy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@SpringBootApplication
public class FamilyPharmacyApplication {

	public static void main(String[] args) {
		SpringApplication.run(FamilyPharmacyApplication.class, args);
	}


//	@Bean
//	public PasswordEncoder passwordEncoder() {
//		return new BCryptPasswordEncoder();
//	}

//	@Bean
//	public PasswordEncoder passwordEncoder(){
//		return new BCryptPasswordEncoder();
//	}
//
//	@Bean
//	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//		http
//				.csrf(csrf -> csrf.disable())
//				.authorizeHttpRequests(auth -> auth
//						.requestMatchers("/family/**").permitAll()   // public, no login needed
//						.requestMatchers("/admin/**").authenticated() // secure, requires login
//						.anyRequest().permitAll()  // everything else open
//				)
//				.formLogin(Customizer.withDefaults())   // default login page
//				.logout(Customizer.withDefaults());     // logout enabled
//
//		return http.build();
//	}




}
