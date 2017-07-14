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

@Controller() @RequestMapping("projectconfig") public class ProjectConfigController {

    @Resource ProjectConfigMapper projectConfigMapper;

    @ResponseBody
    @RequestMapping("select")
    public String select(@RequestParam("token") String token) {
        List<ProjectConfig> item = projectConfigMapper.selectBySql(token);
        return JSON.toJSONString(item);
    }

    @ResponseBody
    @RequestMapping("update")
    public String update(@RequestParam("token") String token) {
        ProjectConfig bean = JSON.parseObject(token, ProjectConfig.class);
        int i = projectConfigMapper.updateByPrimaryKeySelective(bean);
        return i + "";
    }

    @ResponseBody
    @RequestMapping("delete")
    public String delete(@RequestParam("token") String token) {
        int i = projectConfigMapper.deleteByPrimaryKey(Integer.parseInt(token));
        return i + "";
    }

    @ResponseBody
    @RequestMapping("add")
    public String add(@RequestParam("token") String token) {
        ProjectConfig bean = JSON.parseObject(token, ProjectConfig.class);
        int i = projectConfigMapper.insertSelective(bean);
        return i + "";
    }

}
