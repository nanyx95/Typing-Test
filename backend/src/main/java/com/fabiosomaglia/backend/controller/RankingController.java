package com.fabiosomaglia.backend.controller;

import com.fabiosomaglia.backend.model.Ranking;
import com.fabiosomaglia.backend.repository.RankingRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
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

	@GetMapping(path = "top")
	public List<Ranking> getTopThree() {
		return rankingRepository.findTop3ByOrderByWpmDesc().orElse(null);
	}

	@GetMapping(path = "pos/{uuid}")
	public Integer getPositionById(@PathVariable("uuid") UUID id) {
		return rankingRepository.findPositionById(id).orElse(null);
	}

}
