package team7.Certifications.entity;
import javax.persistence.*;

@Entity
@Table
public class Request {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer id;
    @Column(nullable = false)
    private Quarter quarter;
    @Column(nullable = false)
    private String participantName;
    @Column(nullable = false)
    private String certificationTitle;
    @Column(nullable = false)
    private String category;
    @Column(nullable = false)
    private  Status approvalStatus;
    @Column(nullable = false)
    private double cost;
    @Column(nullable = false)
    private String businessJustification;

    @ManyToOne
    @JoinColumn(nullable = false)
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
