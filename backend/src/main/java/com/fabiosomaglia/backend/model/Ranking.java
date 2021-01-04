package com.fabiosomaglia.backend.model;

import javax.persistence.*;
import java.util.UUID;

/**
 * Created by Fabio Somaglia on 20/12/20.
 */

@Entity
@Table(name = "RANKING")
public class Ranking {

	@Id
	private UUID id;

	@Column(name = "USERNAME", nullable = false, length = 8)
	private String user;

	@Column(name = "WPM", nullable = false)
	private Integer wpm;

	@Column(name = "TEST_DATE", nullable = false)
	private Long testDate;

	public Ranking(UUID id, String user, Integer wpm, Long testDate) {
		this.id = id;
		this.user = user;
		this.wpm = wpm;
		this.testDate = testDate;
	}

	public Ranking() { }

	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public Integer getWpm() {
		return wpm;
	}

	public void setWpm(Integer wpm) {
		this.wpm = wpm;
	}

	public Long getTestDate() {
		return testDate;
	}

	public void setTestDate(Long testDate) {
		this.testDate = testDate;
	}

}
