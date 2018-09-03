package br.com.usjt.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class TelefoneController {
	
	public TelefoneController() {
	}

	/**
	 * 
	 * @return
	 */
	@RequestMapping("index")
	public String inicio(HttpSession session, Model model) {
		return "index";
	}
}