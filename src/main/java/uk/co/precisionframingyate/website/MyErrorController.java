package uk.co.precisionframingyate.website;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyErrorController implements ErrorController {

    @Autowired
    ResourceLoader loader;

    @GetMapping("/error")
    public ResponseEntity<Resource> errorPage() {
        Resource htmlFile = loader.getResource("classpath:static/error.html");
        return ResponseEntity
                .status(404)
                .header(HttpHeaders.CONTENT_TYPE, "text/html")
                .body(htmlFile);
    }
}
