package uk.co.precisionframingyate.website;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebsiteController {

    @GetMapping("/")
    public String homePage() {
        return "index.html";
    }

    @GetMapping("/about")
    public String aboutPage() {
        return "about.html";
    }

    @GetMapping("/gallery")
    public String galleryPage() {
        return "gallery.html";
    }

    @GetMapping("/contact")
    public String contactPage() {
        return "contact.html";
    }
}
