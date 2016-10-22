package me.itache.controller;

import me.itache.entity.Card;
import me.itache.service.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Set;

@RestController
@Controller
@RequestMapping("/decks/{deckId}/cards")
public class CardController {
    @Autowired
    private CardService service;

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public Set<Card> getAll(@PathVariable Long deckId){
        return service.getAll(deckId);
    }

    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public Card add(@RequestBody @Valid Card card) {
        return service.add(card);
    }

    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    @ResponseBody
    public Card delete(@PathVariable Long id) {
        Card card = service.get(id);
        service.delete(id);
        return card;
    }

    @RequestMapping(value = "/{id}",method = RequestMethod.GET)
    @ResponseBody
    public Card get(@PathVariable Long id) {
        return service.get(id);
    }

    @RequestMapping(method = RequestMethod.PUT)
    @ResponseBody
    public Card update(@RequestBody Card card) {
        return service.update(card);
    }
}
