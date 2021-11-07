package com.jcodepoint.bean;

import javax.enterprise.context.RequestScoped;
import javax.inject.Named;

@Named("bean")
@RequestScoped
public class ExampleBean {

	private String firstName;
	private String lastName;
	
	public String getFirstName() {
		return firstName;
	}
	
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String back() {
		this.firstName = "";
		this.lastName = "";
		return "inicio";
	}
	
}

