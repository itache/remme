package me.itache.controller;

import me.itache.entity.PatternField;
import me.itache.service.PatternFieldService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Set;

@RestController
@Controller
@RequestMapping("/decks/{deckId}/patterns")
public class PatternFieldController {
    @Autowired
    private PatternFieldService service;

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public Set<PatternField> get(@PathVariable Long deckId){
        return service.getAll(deckId);
    }

    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public PatternField add(@RequestBody @Valid PatternField field) {
        return service.add(field);
    }

    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    @ResponseBody
    public PatternField delete(@PathVariable Long id) {
        PatternField field = service.get(id);
        service.delete(id);
        return field;
    }

    @RequestMapping(method = RequestMethod.PUT)
    @ResponseBody
    public PatternField update(@RequestBody PatternField field) {
        return service.update(field);
    }
}
