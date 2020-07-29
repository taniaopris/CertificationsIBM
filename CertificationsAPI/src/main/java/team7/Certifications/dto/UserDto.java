package team7.Certifications.dto;
import com.sun.istack.NotNull;
import team7.Certifications.entity.Request;
import java.util.List;

public class UserDto {

    private Integer id;
    @NotNull
    private String name;
    @NotNull
    private String role;
   @NotNull
    private List<Request> requests;


    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getRole() {
        return role;
    }

    public List<Request> getRequests() {
        return requests;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public void setRequests(List<Request> requests) {
        this.requests = requests;
    }
}

