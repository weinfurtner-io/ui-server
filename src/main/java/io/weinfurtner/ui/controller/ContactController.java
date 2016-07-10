package io.weinfurtner.ui.controller;

import io.weinfurtner.ui.channel.ContactChannel;
import io.weinfurtner.ui.form.ContactForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

/**
 * Created by Jared on 7/10/2016.
 */
@RestController
@RequestMapping("/contact")
public class ContactController {

    private final MessageChannel contactService;

    @Autowired
    public ContactController(ContactChannel contactChannel) {
        this.contactService = contactChannel.contact();
    }

    @RequestMapping(method = RequestMethod.POST)
    public void sendContact(@Valid ContactForm contactForm, BindingResult bindingResult) {
        if(!bindingResult.hasErrors()) {
            contactService.send(MessageBuilder.withPayload(contactForm).build());
        }
    }
}
