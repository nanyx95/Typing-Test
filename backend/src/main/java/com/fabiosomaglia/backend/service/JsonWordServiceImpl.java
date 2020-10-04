package com.fabiosomaglia.backend.service;

import com.fabiosomaglia.backend.bean.JsonWord;
import com.fabiosomaglia.backend.bean.Word;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 * Created by Fabio Somaglia on 02/10/2020.
 */

@Service
public class JsonWordServiceImpl implements WordService {

	private final JsonWord words;

	public JsonWordServiceImpl() throws IOException {
		words = parseJsonFile();
	}

	@Override
	public Word getRandomWord() {
		Word word;
		do {
			word = new Word(words.getWords()[new Random().nextInt(words.getWords().length)]);
		} while (word.getWord().contains(" ") || word.getWord().contains("-"));

		return word;
	}

	@Override
	public List<Word> getMultipleRandomWords(int numberOfWords) {
		List<Word> wordList = new ArrayList<>(numberOfWords);
		for (int i = 0; i < numberOfWords; i++) {
			Word word = new Word(words.getWords()[new Random().nextInt(words.getWords().length)]);
			if (!word.getWord().contains(" ") && !word.getWord().contains("-"))
				wordList.add(word);
			else
				i--;
		}
		return wordList;
	}

	private JsonWord parseJsonFile() throws IOException {
		Resource resourceFile = new ClassPathResource("words.json");
		ObjectMapper objectMapper = new ObjectMapper();
		return objectMapper.readValue(resourceFile.getFile(), JsonWord.class);
	}

}
