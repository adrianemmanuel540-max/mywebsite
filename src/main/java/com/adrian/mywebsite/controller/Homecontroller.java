package com.adrian.mywebsite.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Homecontroller {


    // ==================================================
    // HOME
    // ==================================================

    @GetMapping("/")
    public String home() {
        return "home";
    }


    // ==================================================
    // SERVICES
    // ==================================================

    @GetMapping("/website-development")
    public String websiteDevelopment() {
        return "website-development";
    }


    @GetMapping("/software-development")
    public String softwareDevelopment() {
        return "software-development";
    }


    @GetMapping("/graphic-design")
    public String graphicDesign() {
        return "graphic-design";
    }


    // ==================================================
    // SKILLS
    // ==================================================

    @GetMapping("/skills/java")
    public String javaSkill() {
        return "java";
    }


    @GetMapping("/skills/python")
    public String pythonSkill() {
        return "python";
    }


    @GetMapping("/skills/html")
    public String htmlSkill() {
        return "html";
    }


    @GetMapping("/skills/css")
    public String cssSkill() {
        return "css";
    }


    @GetMapping("/skills/javascript")
    public String javascriptSkill() {
        return "javascript";
    }


    @GetMapping("/skills/spring-boot")
    public String springBootSkill() {
        return "spring-boot";
    }


    @GetMapping("/skills/mysql")
    public String mysqlSkill() {
        return "mysql";
    }


    @GetMapping("/skills/git")
    public String gitSkill() {
        return "git";
    }

}