package com.tony.easymvc.po;

public class ProjectConfig {
    /**
     * 
     */
    private Integer id;

    /**
     * 
     */
    private String key;

    /**
     * 
     */
    private String value;

    /**
     * 
     */
    private Integer projectId;

    /**
     * 
     * @return id 
     */
    public Integer getId() {
        return id;
    }

    /**
     * 
     * @param id 
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * 
     * @return key 
     */
    public String getKey() {
        return key;
    }

    /**
     * 
     * @param key 
     */
    public void setKey(String key) {
        this.key = key == null ? null : key.trim();
    }

    /**
     * 
     * @return value 
     */
    public String getValue() {
        return value;
    }

    /**
     * 
     * @param value 
     */
    public void setValue(String value) {
        this.value = value == null ? null : value.trim();
    }

    /**
     * 
     * @return project_id 
     */
    public Integer getProjectId() {
        return projectId;
    }

    /**
     * 
     * @param projectId 
     */
    public void setProjectId(Integer projectId) {
        this.projectId = projectId;
    }
}