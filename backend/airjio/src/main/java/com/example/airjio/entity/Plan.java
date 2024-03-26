package com.example.airjio.entity;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Plan {
    @Id
    private String name;
    private int rupees;
    private String type;
    private int validity;
    private String desc;
}
