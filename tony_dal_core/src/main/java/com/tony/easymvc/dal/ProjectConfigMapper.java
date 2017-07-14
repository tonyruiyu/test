package com.tony.easymvc.dal;

import com.tony.ReadOnly;
import com.tony.Writer;
import com.tony.easymvc.po.ProjectConfig;
import com.tony.easymvc.po.ProjectConfigExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ProjectConfigMapper {
    @ReadOnly
    long countByExample(ProjectConfigExample example);

    @Writer
    int deleteByExample(ProjectConfigExample example);

    @Writer
    int deleteByPrimaryKey(Integer id);

    @Writer
    int insert(ProjectConfig record);

    @Writer
    int insertSelective(ProjectConfig record);

    @ReadOnly
    List<ProjectConfig> selectByExample(ProjectConfigExample example);

    @ReadOnly
    ProjectConfig selectByPrimaryKey(Integer id);

    @Writer
    int updateByExampleSelective(@Param("record") ProjectConfig record, @Param("example") ProjectConfigExample example);

    @Writer
    int updateByExample(@Param("record") ProjectConfig record, @Param("example") ProjectConfigExample example);

    @Writer
    int updateByPrimaryKeySelective(ProjectConfig record);

    @Writer
    int updateByPrimaryKey(ProjectConfig record);


	@ReadOnly
    List<ProjectConfig> selectBySql(@Param("whereSql")String whereSql);
}
