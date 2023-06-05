package uk.co.precisionframingyate.website;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @Autowired
    ResourceLoader loader;

    @GetMapping("/")
    public ResponseEntity<Resource> homePage() {
        Resource htmlFile = loader.getResource("classpath:static/home.html");
        return ResponseEntity
                .status(200)
                .header(HttpHeaders.CONTENT_TYPE, "text/html")
                .body(htmlFile);
    }

    @GetMapping("/about")
    public ResponseEntity<Resource> aboutPage() {
        Resource htmlFile = loader.getResource("classpath:static/about.html");
        return ResponseEntity
                .status(200)
                .header(HttpHeaders.CONTENT_TYPE, "text/html")
                .body(htmlFile);
    }

    @GetMapping("/contact")
    public ResponseEntity<Resource> contactPage() {
        Resource htmlFile = loader.getResource("classpath:static/contact.html");
        return ResponseEntity
                .status(200)
                .header(HttpHeaders.CONTENT_TYPE, "text/html")
                .body(htmlFile);
    }

}
