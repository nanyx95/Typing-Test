package com.fabiosomaglia.backend.controller;

import com.fabiosomaglia.backend.model.Ranking;
import com.fabiosomaglia.backend.repository.RankingRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

/**
 * Created by Fabio Somaglia on 20/12/20.
 */

@RestController
@RequestMapping("api/v1/ranking")
public class RankingController {

	private final RankingRepository rankingRepository;

	public RankingController(RankingRepository rankingRepository) {
		this.rankingRepository = rankingRepository;
	}

	@GetMapping(path = "info/{uuid}")
	public Ranking getRankingById(@PathVariable("uuid") UUID id) {
		Optional<Ranking> ranking = rankingRepository.findById(id);
		return ranking.orElse(null);
	}

	@PostMapping(path = "save")
	public void saveRanking(@RequestBody Ranking ranking) {
		rankingRepository.save(ranking);
	}

}
