package com.fabiosomaglia.backend.service;

import com.fabiosomaglia.backend.model.Word;
import com.github.dhiraj072.randomwordgenerator.RandomWordGenerator;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Fabio Somaglia on 27/09/2020.
 */

@Service
public class DataMuseServiceImpl implements WordService {

	@Override
	public Word getRandomWord() {
		return new Word(RandomWordGenerator.getRandomWord());
	}

	@Override
	public List<Word> getMultipleRandomWords(int numberOfWords) {
		List<Word> words = new ArrayList<>();
		for (int i = 0; i < numberOfWords; i++) {
			Word word = new Word(RandomWordGenerator.getRandomWord());
			if (!word.getWord().contains(" ") && !word.getWord().contains("-"))
				words.add(word);
			else
				i--;
		}
		return words;
	}

}
