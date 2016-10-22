package me.itache.entity;

import javax.persistence.*;
import java.time.LocalTime;
import java.util.Set;
import java.util.stream.Collectors;

@Entity
public class Card {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long deckId;

    @OneToMany
    private Set<CardField> fields;

    private LocalTime created;

    private LocalTime changed;

    public Set<CardField> getFrontFields(){
        return fields.stream()
                .filter((cf) -> cf.getPatternField().getSide() == Side.FRONT)
                .collect(Collectors.toSet());
    }

    public Set<CardField> getBackFields(){
        return fields.stream()
                .filter((cf) -> cf.getPatternField().getSide() == Side.BACK)
                .collect(Collectors.toSet());
    }

}
