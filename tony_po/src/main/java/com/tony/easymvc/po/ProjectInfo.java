package com.tony.easymvc.po;

public class ProjectInfo {
    /**
     * 
     */
    private Integer id;

    /**
     * 
     */
    private String groupId;

    /**
     * 
     */
    private String artifactId;

    /**
     * 
     */
    private String versionId;

    /**
     * 
     */
    private String driverClassName;

    /**
     * 输出路径
     */
    private String basePath;

    /**
     * 
     */
    private String pix;

    /**
     * 
     */
    private String scanPackage;

    /**
     * 
     */
    private String mapperPackage;

    /**
     * 
     */
    private String poPackage;

    /**
     * 
     */
    private String controllerPackage;

    /**
     * 
     */
    private Integer masterDb;

    /**
     * 
     */
    private Integer slaverDb;

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
     * @return group_id 
     */
    public String getGroupId() {
        return groupId;
    }

    /**
     * 
     * @param groupId 
     */
    public void setGroupId(String groupId) {
        this.groupId = groupId == null ? null : groupId.trim();
    }

    /**
     * 
     * @return artifact_id 
     */
    public String getArtifactId() {
        return artifactId;
    }

    /**
     * 
     * @param artifactId 
     */
    public void setArtifactId(String artifactId) {
        this.artifactId = artifactId == null ? null : artifactId.trim();
    }

    /**
     * 
     * @return version_id 
     */
    public String getVersionId() {
        return versionId;
    }

    /**
     * 
     * @param versionId 
     */
    public void setVersionId(String versionId) {
        this.versionId = versionId == null ? null : versionId.trim();
    }

    /**
     * 
     * @return driver_class_name 
     */
    public String getDriverClassName() {
        return driverClassName;
    }

    /**
     * 
     * @param driverClassName 
     */
    public void setDriverClassName(String driverClassName) {
        this.driverClassName = driverClassName == null ? null : driverClassName.trim();
    }

    /**
     * 输出路径
     * @return base_path 输出路径
     */
    public String getBasePath() {
        return basePath;
    }

    /**
     * 输出路径
     * @param basePath 输出路径
     */
    public void setBasePath(String basePath) {
        this.basePath = basePath == null ? null : basePath.trim();
    }

    /**
     * 
     * @return pix 
     */
    public String getPix() {
        return pix;
    }

    /**
     * 
     * @param pix 
     */
    public void setPix(String pix) {
        this.pix = pix == null ? null : pix.trim();
    }

    /**
     * 
     * @return scan_package 
     */
    public String getScanPackage() {
        return scanPackage;
    }

    /**
     * 
     * @param scanPackage 
     */
    public void setScanPackage(String scanPackage) {
        this.scanPackage = scanPackage == null ? null : scanPackage.trim();
    }

    /**
     * 
     * @return mapper_package 
     */
    public String getMapperPackage() {
        return mapperPackage;
    }

    /**
     * 
     * @param mapperPackage 
     */
    public void setMapperPackage(String mapperPackage) {
        this.mapperPackage = mapperPackage == null ? null : mapperPackage.trim();
    }

    /**
     * 
     * @return po_package 
     */
    public String getPoPackage() {
        return poPackage;
    }

    /**
     * 
     * @param poPackage 
     */
    public void setPoPackage(String poPackage) {
        this.poPackage = poPackage == null ? null : poPackage.trim();
    }

    /**
     * 
     * @return controller_package 
     */
    public String getControllerPackage() {
        return controllerPackage;
    }

    /**
     * 
     * @param controllerPackage 
     */
    public void setControllerPackage(String controllerPackage) {
        this.controllerPackage = controllerPackage == null ? null : controllerPackage.trim();
    }

    /**
     * 
     * @return master_db 
     */
    public Integer getMasterDb() {
        return masterDb;
    }

    /**
     * 
     * @param masterDb 
     */
    public void setMasterDb(Integer masterDb) {
        this.masterDb = masterDb;
    }

    /**
     * 
     * @return slaver_db 
     */
    public Integer getSlaverDb() {
        return slaverDb;
    }

    /**
     * 
     * @param slaverDb 
     */
    public void setSlaverDb(Integer slaverDb) {
        this.slaverDb = slaverDb;
    }
}