package me.itache.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import me.itache.entity.User;
import me.itache.service.UserService;
import me.itache.util.JWTUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.IOException;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private UserService service;

    @RequestMapping(value="/me", method = RequestMethod.GET)
    @ResponseBody
    public Object getCurrent() {
        return SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

    @RequestMapping(value = "/{login}", method = RequestMethod.GET)
    @ResponseBody
    public User get(@PathVariable String login, HttpServletResponse response) throws IOException {
        User user = service.getUser(login);
        if(user == null) {
            response.sendError(404);
            return null;
        }
        user.setPassword(null);
        return user;
    }

    @RequestMapping(method = RequestMethod.PUT)
    @ResponseBody
    public String add(@Valid @RequestBody User user, HttpServletRequest httpRequest) throws JsonProcessingException {
        user = service.add(user);
        UserDetails userDetails = this.userDetailsService.loadUserByUsername(user.getUsername());
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
        authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(httpRequest));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        ObjectMapper objectMapper = new ObjectMapper();
        StringBuilder sb = new StringBuilder();
        sb.append("{\"token\": \"" +  JWTUtils.generateToken(userDetails)+"\",");
        sb.append("\"user\": " + objectMapper.writeValueAsString(userDetails) + "}");
        return sb.toString();
    }
}
