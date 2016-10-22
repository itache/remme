package me.itache.controller;

import me.itache.entity.Deck;
import me.itache.service.DeckService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Set;

@RestController
@Controller
@RequestMapping("/decks")
public class DeckController {
    private static Logger LOG = Logger.getLogger(DeckController.class);
    @Autowired
    private DeckService service;

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public Set<Deck> get(@AuthenticationPrincipal User activeUser){
        return service.getAll(activeUser.getUsername());
    }

    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public Deck add(@RequestBody @Valid Deck deck, @AuthenticationPrincipal User activeUser) {
        LOG.info(deck);
        return service.add(deck, activeUser.getUsername());
    }

    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    @ResponseBody
    public Deck delete(@PathVariable Long id, @AuthenticationPrincipal User activeUser) {
        Deck deck = service.get(id);
        service.delete(deck.getId());
        return deck;
    }

    @RequestMapping(method = RequestMethod.PUT)
    @ResponseBody
    public Deck update(@RequestBody Deck deck) { return service.update(deck);}
}