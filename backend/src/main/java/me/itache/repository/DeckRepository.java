package me.itache.repository;

import me.itache.entity.Deck;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Set;

@Repository
@Transactional
public interface DeckRepository extends JpaRepository<Deck, Long> {
    Set<Deck> getByUserId(String username);
    Deck getByNameAndUserId(String name, String username);
}
