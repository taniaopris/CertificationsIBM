package team7.Certifications.dto;

import com.sun.istack.NotNull;
import team7.Certifications.entity.Quarter;
import team7.Certifications.entity.Status;
import team7.Certifications.entity.User;


public class RequestDto {

    @NotNull
    private Integer id;
    @NotNull
    private Quarter quarter;
    @NotNull
    private String participantName;
    @NotNull
    private String certificationTitle;
    @NotNull
    private String category;
    @NotNull
    private Status approvalStatus;
    @NotNull
    private double cost;
    @NotNull
    private String businessJustification;
    @NotNull
    private User user;

    public Integer getId() {
        return id;
    }

    public String getParticipantName() {
        return participantName;
    }

    public String getCertificationTitle() {
        return certificationTitle;
    }

    public String getCategory() {
        return category;
    }

    public double getCost() {
        return cost;
    }

    public String getBusinessJustification() {
        return businessJustification;
    }

    public User getUser() {
        return user;
    }

    public Quarter getQuarter() {
        return quarter;
    }

    public Status getApprovalStatus() {
        return approvalStatus;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setParticipantName(String participantName) {
        this.participantName = participantName;
    }

    public void setCertificationTitle(String certificationTitle) {
        this.certificationTitle = certificationTitle;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public void setBusinessJustification(String bussinessJustification) {
        this.businessJustification = bussinessJustification;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setQuarter(Quarter quarter) {
        this.quarter = quarter;
    }

    public void setApprovalStatus(Status approvalStatus) {
        this.approvalStatus = approvalStatus;
    }
}

