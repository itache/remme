package me.itache.entity;

import javax.persistence.*;

@Entity
public class CardField {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long cardId;

    @ManyToOne
    private PatternField patternField;

    private String content;

    public PatternField getPatternField() {
        return patternField;
    }

    public void setPatternField(PatternField patternField) {
        this.patternField = patternField;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
