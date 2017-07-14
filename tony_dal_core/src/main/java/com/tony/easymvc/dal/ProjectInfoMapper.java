package com.tony.easymvc.dal;

import com.tony.ReadOnly;
import com.tony.Writer;
import com.tony.easymvc.po.ProjectInfo;
import com.tony.easymvc.po.ProjectInfoExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ProjectInfoMapper {
    @ReadOnly
    long countByExample(ProjectInfoExample example);

    @Writer
    int deleteByExample(ProjectInfoExample example);

    @Writer
    int deleteByPrimaryKey(Integer id);

    @Writer
    int insert(ProjectInfo record);

    @Writer
    int insertSelective(ProjectInfo record);

    @ReadOnly
    List<ProjectInfo> selectByExample(ProjectInfoExample example);

    @ReadOnly
    ProjectInfo selectByPrimaryKey(Integer id);

    @Writer
    int updateByExampleSelective(@Param("record") ProjectInfo record, @Param("example") ProjectInfoExample example);

    @Writer
    int updateByExample(@Param("record") ProjectInfo record, @Param("example") ProjectInfoExample example);

    @Writer
    int updateByPrimaryKeySelective(ProjectInfo record);

    @Writer
    int updateByPrimaryKey(ProjectInfo record);


	@ReadOnly
    List<ProjectInfo> selectBySql(@Param("whereSql")String whereSql);
}
