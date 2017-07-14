package com.tony.easymvc.dal;

import com.tony.ReadOnly;
import com.tony.Writer;
import com.tony.easymvc.po.DbInfo;
import com.tony.easymvc.po.DbInfoExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface DbInfoMapper {
    @ReadOnly
    long countByExample(DbInfoExample example);

    @Writer
    int deleteByExample(DbInfoExample example);

    @Writer
    int deleteByPrimaryKey(Integer id);

    @Writer
    int insert(DbInfo record);

    @Writer
    int insertSelective(DbInfo record);

    @ReadOnly
    List<DbInfo> selectByExample(DbInfoExample example);

    @ReadOnly
    DbInfo selectByPrimaryKey(Integer id);

    @Writer
    int updateByExampleSelective(@Param("record") DbInfo record, @Param("example") DbInfoExample example);

    @Writer
    int updateByExample(@Param("record") DbInfo record, @Param("example") DbInfoExample example);

    @Writer
    int updateByPrimaryKeySelective(DbInfo record);

    @Writer
    int updateByPrimaryKey(DbInfo record);


	@ReadOnly
    List<DbInfo> selectBySql(@Param("whereSql")String whereSql);
}
