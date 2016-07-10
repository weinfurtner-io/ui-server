package io.weinfurtner.ui.controller;

import io.weinfurtner.ui.form.ContactForm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by Jared on 7/5/2016.
 */
@Controller
@RequestMapping("/")
public class HomeController {

    @RequestMapping(method = RequestMethod.GET)
    public String getHome(Model model)
    {
        model.addAttribute("contactForm", new ContactForm());

        return "index";
    }
}
