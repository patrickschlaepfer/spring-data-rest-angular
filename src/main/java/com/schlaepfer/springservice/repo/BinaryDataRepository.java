package com.schlaepfer.springservice.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.schlaepfer.springservice.entity.BinaryData;

@RepositoryRestResource
public interface BinaryDataRepository extends CrudRepository<BinaryData, Integer> {

    List<BinaryData> findByLangId(@Param("langid") int langId);
}
