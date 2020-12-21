package com.fabiosomaglia.backend.repository;

import com.fabiosomaglia.backend.model.Ranking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 * Created by Fabio Somaglia on 20/12/20.
 */

@Repository
public interface RankingRepository extends JpaRepository<Ranking, UUID> {

	Optional<List<Ranking>> findTop3ByOrderByWpmDesc();

	@Query(value = "SELECT rnum " +
			"FROM (SELECT id, row_number() over (order by wpm desc) as rnum FROM ranking) t " +
			"WHERE id = :id",
			nativeQuery = true)
	Optional<Integer> findPositionById(@Param("id") UUID id);

}
