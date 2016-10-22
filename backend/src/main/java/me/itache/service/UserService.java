package me.itache.service;

import me.itache.entity.User;
import me.itache.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.encoding.ShaPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private ShaPasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository repo;

    public User getUser(String login) {
        return repo.findByUsername(login);
    }

    public User add(User user) {
        user.setPassword(passwordEncoder.encodePassword(user.getPassword(),null));
        return repo.saveAndFlush(user);
    }

    public void update(User user) {
        repo.save(user);
    }

    private boolean emailExist(String email) {
        return repo.findByEmail(email) != null;
    }
}
