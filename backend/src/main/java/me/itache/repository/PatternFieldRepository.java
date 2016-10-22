package me.itache.repository;

import me.itache.entity.PatternField;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Set;

@Repository
@Transactional
public interface PatternFieldRepository extends JpaRepository<PatternField, Long> {
    Set<PatternField> getByDeckId(Long deckId);
}
