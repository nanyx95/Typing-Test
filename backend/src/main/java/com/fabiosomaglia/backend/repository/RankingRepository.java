package com.fabiosomaglia.backend.repository;

import com.fabiosomaglia.backend.model.Ranking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * Created by Fabio Somaglia on 20/12/20.
 */

@Repository
public interface RankingRepository extends JpaRepository<Ranking, UUID> {
}
