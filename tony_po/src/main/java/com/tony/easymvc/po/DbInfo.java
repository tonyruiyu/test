package com.tony.easymvc.po;

public class DbInfo {
    /**
     * 
     */
    private Integer id;

    /**
     * 
     */
    private String jdbcUrl;

    /**
     * 
     */
    private String username;

    /**
     * 
     */
    private String password;

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
     * @return jdbc_url 
     */
    public String getJdbcUrl() {
        return jdbcUrl;
    }

    /**
     * 
     * @param jdbcUrl 
     */
    public void setJdbcUrl(String jdbcUrl) {
        this.jdbcUrl = jdbcUrl == null ? null : jdbcUrl.trim();
    }

    /**
     * 
     * @return username 
     */
    public String getUsername() {
        return username;
    }

    /**
     * 
     * @param username 
     */
    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    /**
     * 
     * @return password 
     */
    public String getPassword() {
        return password;
    }

    /**
     * 
     * @param password 
     */
    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }
}