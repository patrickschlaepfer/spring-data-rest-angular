package com.schlaepfer.springservice.repo;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.schlaepfer.springservice.entity.BinaryData;

@RepositoryRestResource(collectionResourceRel = "binarydata", path = "binarydata")
public interface BinaryDataRepository extends PagingAndSortingRepository<BinaryData, Integer> {

	List<BinaryData> findByLangId(@Param("langid") int langId);
}
