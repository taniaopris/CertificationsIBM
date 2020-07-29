package team7.Certifications.service;


import org.springframework.stereotype.Service;
import team7.Certifications.dto.CertificationDto;
import team7.Certifications.entity.Certification;
import team7.Certifications.mapper.CertificationMapper;
import team7.Certifications.repository.CertificationRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CertificationService {

    private final CertificationRepository certificationRepository;
    private final CertificationMapper certificationMapper;

    public CertificationService(CertificationRepository certificationRepository,CertificationMapper certificationMapper) {
        this.certificationRepository = certificationRepository;
        this.certificationMapper=certificationMapper;
    }

    public List<CertificationDto> getAllCertifications()
    {
        List<Certification> certifications= certificationRepository.findAll();
        List<CertificationDto> dtoCertifications=certificationMapper.toDtoList(certifications);
        return  dtoCertifications;
    }

    public CertificationDto addCertification(CertificationDto certificationDto)
    {
        Certification certification=certificationMapper.toEntity(certificationDto);
        Certification savedCertification=certificationRepository.save(certification);
        CertificationDto dtoCertification=certificationMapper.toDto(savedCertification);

        return  dtoCertification;
    }

    public CertificationDto updateCertification(CertificationDto certificationDto)
    {
        Optional<Certification> existingCertification=certificationRepository.findById(certificationDto.getId());
        existingCertification.orElseThrow(()->new IllegalArgumentException("there is no such certification"));
        Certification certification=certificationMapper.toEntity(certificationDto);
        Certification updatedCertification=certificationRepository.save(certification);
        CertificationDto dtoCertification=certificationMapper.toDto(updatedCertification);

        return  dtoCertification;
    }
    public void deleteCertification (int id)
    {
        Optional<Certification> existingCertification=certificationRepository.findById(id);
        existingCertification.orElseThrow(()->new IllegalArgumentException("there is no such certification"));
        this.certificationRepository.deleteById(id);
    }


}
