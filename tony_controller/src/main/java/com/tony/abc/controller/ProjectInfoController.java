package com.tony.abc.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.tony.easymvc.dal.*;
import com.tony.easymvc.po.*;

@Controller() @RequestMapping("projectinfo") public class ProjectInfoController {

    @Resource ProjectInfoMapper projectInfoMapper;

    @ResponseBody
    @RequestMapping("select")
    public String select(@RequestParam("token") String token) {
        List<ProjectInfo> item = projectInfoMapper.selectBySql(token);
        return JSON.toJSONString(item);
    }

    @ResponseBody
    @RequestMapping("update")
    public String update(@RequestParam("token") String token) {
        ProjectInfo bean = JSON.parseObject(token, ProjectInfo.class);
        int i = projectInfoMapper.updateByPrimaryKeySelective(bean);
        return i + "";
    }

    @ResponseBody
    @RequestMapping("delete")
    public String delete(@RequestParam("token") String token) {
        int i = projectInfoMapper.deleteByPrimaryKey(Integer.parseInt(token));
        return i + "";
    }

    @ResponseBody
    @RequestMapping("add")
    public String add(@RequestParam("token") String token) {
        ProjectInfo bean = JSON.parseObject(token, ProjectInfo.class);
        int i = projectInfoMapper.insertSelective(bean);
        return i + "";
    }

}
