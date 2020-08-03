package team7.Certifications.dto;
import com.sun.istack.NotNull;


public class UserDto {

    private Integer id;
    @NotNull
    private String name;



    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }



    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

}

