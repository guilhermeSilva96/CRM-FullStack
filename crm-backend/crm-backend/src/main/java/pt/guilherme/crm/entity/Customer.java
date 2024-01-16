package pt.guilherme.crm.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "customers")
public class Customer {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
@Column(name = "name")
    private String name;
@Column(name ="nif")
    private String financesNumber;
@Column(name = "email")
    private String email;
    @Column(name = "phone_number")
    private String phoneNumber;
    @Column(name = "city")
    private String city;
}
