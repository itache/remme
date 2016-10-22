package me.itache.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class PatternField {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long deckId;

    private int position;

    private String name;

    private Side side;

    private boolean isKey;

    private String style;

    public Side getSide() {
        return side;
    }
}
