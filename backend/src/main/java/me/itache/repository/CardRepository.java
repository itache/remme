package me.itache.repository;

import me.itache.entity.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Set;

@Repository
@Transactional
public interface CardRepository extends JpaRepository<Card, Long> {
    Set<Card> getByDeckId(Long deckId);
}
