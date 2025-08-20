package com.familypharmacy.entities;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long pId;
	private String productBatch;
	private String productName;
	private String productDesc;



//	@ManyToOne
//	@JoinColumn(name = "category_id") // foreign key in product table
//	@JsonBackReference
//	private Category category;
@ManyToOne
@JoinColumn(name = "category_id")
private Category category;

	
	
}
