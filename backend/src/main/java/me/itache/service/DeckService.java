package me.itache.service;

import me.itache.entity.Deck;
import me.itache.repository.DeckRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class DeckService {

    @Autowired
    private DeckRepository repository;

    public Set<Deck> getAll(String username) {
        return repository.getByUserId(username);
    }

    public Deck add(Deck deck, String username) {
        deck.setUserId(username);
        return repository.saveAndFlush(deck);
    }

    public Deck getByName(String name, String username) {
        return repository.getByNameAndUserId(name, username);
    }

    public void delete(Long id) {
        repository.delete(id);
    }

    public Deck update(Deck deck) {
        return repository.save(deck);
    }

    public Deck get(Long id) {
        return repository.getOne(id);
    }
}
