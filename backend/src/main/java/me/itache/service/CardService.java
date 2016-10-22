package me.itache.service;

import me.itache.entity.Card;
import me.itache.repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class CardService {

    @Autowired
    private CardRepository repository;

    public Set<Card> getAll(Long deckId) {
        return repository.getByDeckId(deckId);
    }

    public Card add(Card card) {
        return repository.saveAndFlush(card);
    }

    public void delete(Long id) {
        repository.delete(id);
    }

    public Card get(Long id) {
        return repository.getOne(id);
    }

    public Card update(Card card) {
        return repository.save(card);
    }
}
