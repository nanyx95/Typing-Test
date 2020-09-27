package com.fabiosomaglia.backend.service;

import com.fabiosomaglia.backend.bean.Word;
import com.github.dhiraj072.randomwordgenerator.RandomWordGenerator;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Fabio Somaglia on 27/09/2020.
 */

@Service
public class WordService {

	public Word getRandomWord() {
		return new Word(RandomWordGenerator.getRandomWord());
	}

	public List<Word> getMultipleRandomWords(int numberOfWords) {
		List<Word> words = new ArrayList<>();
		for (int i = 0; i < numberOfWords; i++) {
			words.add(new Word(RandomWordGenerator.getRandomWord()));
		}
		return words;
	}

}
