package pl.training;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("test")
    public Message test() {
        return new Message("Jest Ok");
    }

    @GetMapping("user")
    public String getUser(Authentication authentication) {
        var context = SecurityContextHolder.getContext();
        return "Test";
    }

}
