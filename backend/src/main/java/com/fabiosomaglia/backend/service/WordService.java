package com.fabiosomaglia.backend.service;

import com.fabiosomaglia.backend.bean.Word;

import java.util.List;

/**
 * Created by Fabio Somaglia on 02/10/2020.
 */

public interface WordService {
	Word getRandomWord();
	List<Word> getMultipleRandomWords(int numberOfWords);
}
