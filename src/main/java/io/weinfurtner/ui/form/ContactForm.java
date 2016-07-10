package io.weinfurtner.ui.form;

import org.hibernate.validator.constraints.NotEmpty;

/**
 * Created by Jared on 7/10/2016.
 */
public class ContactForm {

    private String name;

    private String email;
    @NotEmpty
    private String message;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
