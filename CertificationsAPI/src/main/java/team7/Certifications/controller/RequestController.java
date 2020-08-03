package team7.Certifications.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import team7.Certifications.dto.RequestDto;
import team7.Certifications.dto.StatusDto;
import team7.Certifications.service.RequestService;

import java.util.List;



@RestController
@RequestMapping("/api/requests")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class RequestController {

    @Autowired
    private RequestService requestService;

    @PostMapping(value = "/addRequest/{userId}/{certificationId}",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<RequestDto> createRequest(@PathVariable("userId") int userId,@PathVariable("certificationId") int certificationId,@RequestBody RequestDto requestDto)
    {
        RequestDto newRequest=requestService.addRequest(requestDto,userId,certificationId);
        return  ResponseEntity.status(HttpStatus.CREATED).body(newRequest);
    }

    @GetMapping(value="/allRequests/{userId}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<RequestDto>> getAllRequests(@PathVariable("userId") int userId)
    {
        List<RequestDto> requestsDto=requestService.getRequestsByUserId(userId);
        return ResponseEntity.ok().body(requestsDto);
    }

    @GetMapping(value="/allRequestsByCertification/{certificationId}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<RequestDto>> getAllRequestsByCertification(@PathVariable("certificationId") int certificationId)
    {
        List<RequestDto> requestsDto=requestService.getRequestsByCertificationId(certificationId);
        return ResponseEntity.ok().body(requestsDto);
    }


    @GetMapping(value="/allRequests",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<RequestDto>> getAllRequests()
    {
        List<RequestDto> requestsDto=requestService.getAllRequests();
        return ResponseEntity.ok().body(requestsDto);
    }

    @DeleteMapping(value = "/deleteRequest/{requestId}")
    public ResponseEntity<String> deleteRequest(@PathVariable("requestId") int id)
    {
        requestService.deleteRequest(id);
        return ResponseEntity.ok().body("Request-ul cu id :"+id+"a fost sters");
    }
    @GetMapping(value="/filterByQuarter",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<RequestDto>> getRequestsByQuarter(@RequestParam("quarter") String quarter)
    {
        List<RequestDto> requestsDto=requestService.getRequestByQuarter(quarter);
        if(requestsDto==null) return ResponseEntity.notFound().build();
        else return ResponseEntity.ok().body(requestsDto);
    }

    @GetMapping(value="/filterByStatus",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<RequestDto>> getRequestsByStatus(@RequestParam("status") String status)
    {
        List<RequestDto> requestsDto=requestService.getRequestByApprovalStatus(status);
        if(requestsDto==null) return ResponseEntity.notFound().build();
        else return ResponseEntity.ok().body(requestsDto);
    }

    @GetMapping(value="/filterByStatusAndQuarter",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<RequestDto>> getRequestsByStatus(@RequestParam("status") String status,@RequestParam("quarter") String quarter)
    {
        List<RequestDto> requestsDto=requestService.getRequestByQuarterAndApprovalStatus(quarter,status);
        if(requestsDto==null) return ResponseEntity.notFound().build();
        else return ResponseEntity.ok().body(requestsDto);
    }

    @PutMapping(value = "/updateRequest/{requestId}",produces = MediaType.APPLICATION_JSON_VALUE,consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<RequestDto> editRequest(@RequestBody RequestDto requestDto,@PathVariable("requestId") Integer requestId)
    {
         RequestDto updatedRequest=requestService.updateRequest(requestDto,requestId);
         return ResponseEntity.ok().body(updatedRequest);
    }

    @PatchMapping(value="/approveRequest/{id}",produces = MediaType.APPLICATION_JSON_VALUE,consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<RequestDto> approveRequest(@PathVariable("id") Integer id, @RequestBody StatusDto statusDto)
    {
        String status=statusDto.getStatus();
      RequestDto updatedRequestDto=requestService.updateStatus(status,id);
      return ResponseEntity.ok().body(updatedRequestDto);
    }


}
