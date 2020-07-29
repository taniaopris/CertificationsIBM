package team7.Certifications.service;

import org.springframework.stereotype.Service;
import team7.Certifications.dto.RequestDto;
import team7.Certifications.entity.Quarter;
import team7.Certifications.entity.Request;
import team7.Certifications.entity.Status;
import team7.Certifications.mapper.RequestMapper;
import team7.Certifications.repository.RequestRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RequestService {


    private final RequestRepository requestRepository;
    private final RequestMapper requestMapper;

    public RequestService(RequestRepository requestRepository,RequestMapper requestMapper) {
        this.requestRepository = requestRepository;
        this.requestMapper=requestMapper;
    }

    public RequestDto submitRequest(RequestDto dtoRequest)
    {
        Request entityRequest =this.requestMapper.toEntity(dtoRequest);
        Request savedEntityRequest=this.requestRepository.save(entityRequest);
        RequestDto dto=this.requestMapper.toDto(savedEntityRequest);

        return dto;

    }

    public RequestDto updateRequest(RequestDto dtoRequest)
    {
        Optional<Request> existingRequest =this.requestRepository.findById(dtoRequest.getId());
        existingRequest.orElseThrow(() ->new IllegalArgumentException("there is no such request"));

        Request entityRequest =this.requestMapper.toEntity(dtoRequest);
        Request updatedEntityRequest=this.requestRepository.save(entityRequest);
        RequestDto dto=this.requestMapper.toDto(updatedEntityRequest);
        return  dto;

    }

    public void deleteRequest(int id)
    {
        Optional<Request> existingRequest =this.requestRepository.findById(id);
        existingRequest.orElseThrow(() ->new IllegalArgumentException("there is no such request"));
        this.requestRepository.deleteById(id);
    }

    public List<RequestDto> getAllRequests()
    {
      List<Request> requests=requestRepository.findAll();
      List<RequestDto> dtoRequests =this.requestMapper.toDtoList(requests);

      return dtoRequests;
    }

    public List<RequestDto> filterByQuarterAndOrApprovalStatus(Quarter quarter, Status status)
    {
        List<Request> requests=new ArrayList<>();
        if(quarter!=null && status==null)requests=this.requestRepository.findAllByQuarter(quarter);
        else if(quarter==null && status!=null) requests=this.requestRepository.findAllByApprovalStatus(status);
        else if(quarter!=null && status!=null) requests=this.requestRepository.findAllByQuarterAndApprovalStatus(quarter,status);

        List<RequestDto> dtoRequests=this.requestMapper.toDtoList(requests);

        return  dtoRequests;
    }

    public List<RequestDto> getRequestsByUserId(int id)
    {
        List<Request> requests=this.requestRepository.findAllByUserId(id);
        List<RequestDto> dtoRequests=this.requestMapper.toDtoList(requests);
        return  dtoRequests;
    }





}
