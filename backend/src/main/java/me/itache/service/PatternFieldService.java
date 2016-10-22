package me.itache.service;

import me.itache.entity.PatternField;
import me.itache.repository.PatternFieldRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class PatternFieldService {

    @Autowired
    private PatternFieldRepository repository;

    public Set<PatternField> getAll(Long deckId) {
        return repository.getByDeckId(deckId);
    }

    public PatternField add(PatternField field) {
        return repository.saveAndFlush(field);
    }

    public PatternField get(Long id) {
        return repository.getOne(id);
    }

    public void delete(Long id) {
        repository.delete(id);
    }

    public PatternField update(PatternField field) {
        return repository.save(field);
    }

}

