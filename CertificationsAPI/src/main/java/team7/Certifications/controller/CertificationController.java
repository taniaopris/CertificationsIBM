package team7.Certifications.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import team7.Certifications.dto.CertificationDto;
import team7.Certifications.service.CertificationService;

import java.util.List;
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CertificationController {

    @Autowired
    private CertificationService certificationService;

    @GetMapping("")
    public List<CertificationDto> getAllCertifications()
    {
        return this.certificationService.getAllCertifications();
    }
}

