package team7.Certifications.entity;

import javax.persistence.*;
import java.util.List;
@Entity
@Table()

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer id;

    @Column(nullable = false)
    private String name;

    @Column( nullable = false)
    private String role;

    @OneToMany(orphanRemoval = true)
    private List<Request> requests;

    public Integer getId() {
        return id;
    }


    public String getName() {
        return name;
    }

    public List<Request> getRequests() {
        return requests;
    }

    public String getRole() {
        return role;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    public void setName(String name) {
        this.name = name;
    }

    public void setRequests(List<Request> requests) {
        this.requests = requests;
    }

    public void setRole(String role) {
        this.role = role;
    }
}

