package team7.Certifications.mapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import team7.Certifications.dto.RequestDto;
import team7.Certifications.dto.UserDto;
import team7.Certifications.entity.Request;
import team7.Certifications.entity.User;

import java.util.ArrayList;
import java.util.List;

@Component
public class UserMapper {


    @Autowired
    private RequestMapper requestMapper;

    public UserDto toDto(User userEntity)
    {
        UserDto dto =new UserDto();
        dto.setName(userEntity.getName());
        dto.setRole(userEntity.getRole());
        dto.setRequests(userEntity.getRequests());

        return dto;
    }

    public User toEntity(UserDto userDto)
    {
        User user=new User();
        user.setName(userDto.getName());
        user.setRole(userDto.getRole());
        user.setRequests(userDto.getRequests());

        return user;
    }


    @Autowired
    public void setRequestMapper(RequestMapper requestMapper) {
        this.requestMapper = requestMapper;
    }
}
