package com.fabiosomaglia.backend.controller;

import com.fabiosomaglia.backend.bean.Word;
import com.fabiosomaglia.backend.service.WordService;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Fabio Somaglia on 27/09/2020.
 */

@RestController
@RequestMapping("api/v1")
public class WordController {

	private final WordService wordService;

	public WordController(@Qualifier("jsonWordServiceImpl") WordService wordService) {
		this.wordService = wordService;
	}

	@GetMapping(path = "word")
	public Word getWord() {
		return wordService.getRandomWord();
	}

	@GetMapping(path = "words/{num}")
	public List<Word> getWords(@PathVariable("num") int numberOfWords) {
		return wordService.getMultipleRandomWords(numberOfWords);
	}

}
