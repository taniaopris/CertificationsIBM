package team7.Certifications.service;

import org.springframework.stereotype.Service;
import team7.Certifications.dto.RequestDto;
import team7.Certifications.mapper.RequestMapper;
import team7.Certifications.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;
    private  final RequestMapper requestMapper;

    public UserService(UserRepository userRepository, RequestMapper requestMapper) {
        this.userRepository = userRepository;
        this.requestMapper=requestMapper;
    }


}
