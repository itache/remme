package me.itache.repository;

import me.itache.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    User findByUsername(String login);

    User findByEmail(String email);
}
