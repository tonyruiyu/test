package com.tony.easymvc.po;

import java.util.ArrayList;
import java.util.List;

public class ProjectInfoExample {
    /**
     * project_info
     */
    protected String orderByClause;

    /**
     * project_info
     */
    protected boolean distinct;

    /**
     * project_info
     */
    protected List<Criteria> oredCriteria;

    private Integer limit;

    private Integer offset;

    public ProjectInfoExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    public void limit(Integer limit, Integer offset) {
        this.limit = limit;
        this.offset = offset;
    }

    public Integer getLimit() {
        return limit;
    }

    public void setOffset(Integer offset) {
        this.offset = offset;
    }

    public Integer getOffset() {
        return offset;
    }

    /**
     * project_info null
     */
    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andIdIsNull() {
            addCriterion("id is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("id is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(Integer value) {
            addCriterion("id =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(Integer value) {
            addCriterion("id <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(Integer value) {
            addCriterion("id >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("id >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(Integer value) {
            addCriterion("id <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(Integer value) {
            addCriterion("id <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<Integer> values) {
            addCriterion("id in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<Integer> values) {
            addCriterion("id not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(Integer value1, Integer value2) {
            addCriterion("id between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(Integer value1, Integer value2) {
            addCriterion("id not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andGroupIdIsNull() {
            addCriterion("group_id is null");
            return (Criteria) this;
        }

        public Criteria andGroupIdIsNotNull() {
            addCriterion("group_id is not null");
            return (Criteria) this;
        }

        public Criteria andGroupIdEqualTo(String value) {
            addCriterion("group_id =", value, "groupId");
            return (Criteria) this;
        }

        public Criteria andGroupIdNotEqualTo(String value) {
            addCriterion("group_id <>", value, "groupId");
            return (Criteria) this;
        }

        public Criteria andGroupIdGreaterThan(String value) {
            addCriterion("group_id >", value, "groupId");
            return (Criteria) this;
        }

        public Criteria andGroupIdGreaterThanOrEqualTo(String value) {
            addCriterion("group_id >=", value, "groupId");
            return (Criteria) this;
        }

        public Criteria andGroupIdLessThan(String value) {
            addCriterion("group_id <", value, "groupId");
            return (Criteria) this;
        }

        public Criteria andGroupIdLessThanOrEqualTo(String value) {
            addCriterion("group_id <=", value, "groupId");
            return (Criteria) this;
        }

        public Criteria andGroupIdLike(String value) {
            addCriterion("group_id like", value, "groupId");
            return (Criteria) this;
        }

        public Criteria andGroupIdNotLike(String value) {
            addCriterion("group_id not like", value, "groupId");
            return (Criteria) this;
        }

        public Criteria andGroupIdIn(List<String> values) {
            addCriterion("group_id in", values, "groupId");
            return (Criteria) this;
        }

        public Criteria andGroupIdNotIn(List<String> values) {
            addCriterion("group_id not in", values, "groupId");
            return (Criteria) this;
        }

        public Criteria andGroupIdBetween(String value1, String value2) {
            addCriterion("group_id between", value1, value2, "groupId");
            return (Criteria) this;
        }

        public Criteria andGroupIdNotBetween(String value1, String value2) {
            addCriterion("group_id not between", value1, value2, "groupId");
            return (Criteria) this;
        }

        public Criteria andArtifactIdIsNull() {
            addCriterion("artifact_id is null");
            return (Criteria) this;
        }

        public Criteria andArtifactIdIsNotNull() {
            addCriterion("artifact_id is not null");
            return (Criteria) this;
        }

        public Criteria andArtifactIdEqualTo(String value) {
            addCriterion("artifact_id =", value, "artifactId");
            return (Criteria) this;
        }

        public Criteria andArtifactIdNotEqualTo(String value) {
            addCriterion("artifact_id <>", value, "artifactId");
            return (Criteria) this;
        }

        public Criteria andArtifactIdGreaterThan(String value) {
            addCriterion("artifact_id >", value, "artifactId");
            return (Criteria) this;
        }

        public Criteria andArtifactIdGreaterThanOrEqualTo(String value) {
            addCriterion("artifact_id >=", value, "artifactId");
            return (Criteria) this;
        }

        public Criteria andArtifactIdLessThan(String value) {
            addCriterion("artifact_id <", value, "artifactId");
            return (Criteria) this;
        }

        public Criteria andArtifactIdLessThanOrEqualTo(String value) {
            addCriterion("artifact_id <=", value, "artifactId");
            return (Criteria) this;
        }

        public Criteria andArtifactIdLike(String value) {
            addCriterion("artifact_id like", value, "artifactId");
            return (Criteria) this;
        }

        public Criteria andArtifactIdNotLike(String value) {
            addCriterion("artifact_id not like", value, "artifactId");
            return (Criteria) this;
        }

        public Criteria andArtifactIdIn(List<String> values) {
            addCriterion("artifact_id in", values, "artifactId");
            return (Criteria) this;
        }

        public Criteria andArtifactIdNotIn(List<String> values) {
            addCriterion("artifact_id not in", values, "artifactId");
            return (Criteria) this;
        }

        public Criteria andArtifactIdBetween(String value1, String value2) {
            addCriterion("artifact_id between", value1, value2, "artifactId");
            return (Criteria) this;
        }

        public Criteria andArtifactIdNotBetween(String value1, String value2) {
            addCriterion("artifact_id not between", value1, value2, "artifactId");
            return (Criteria) this;
        }

        public Criteria andVersionIdIsNull() {
            addCriterion("version_id is null");
            return (Criteria) this;
        }

        public Criteria andVersionIdIsNotNull() {
            addCriterion("version_id is not null");
            return (Criteria) this;
        }

        public Criteria andVersionIdEqualTo(String value) {
            addCriterion("version_id =", value, "versionId");
            return (Criteria) this;
        }

        public Criteria andVersionIdNotEqualTo(String value) {
            addCriterion("version_id <>", value, "versionId");
            return (Criteria) this;
        }

        public Criteria andVersionIdGreaterThan(String value) {
            addCriterion("version_id >", value, "versionId");
            return (Criteria) this;
        }

        public Criteria andVersionIdGreaterThanOrEqualTo(String value) {
            addCriterion("version_id >=", value, "versionId");
            return (Criteria) this;
        }

        public Criteria andVersionIdLessThan(String value) {
            addCriterion("version_id <", value, "versionId");
            return (Criteria) this;
        }

        public Criteria andVersionIdLessThanOrEqualTo(String value) {
            addCriterion("version_id <=", value, "versionId");
            return (Criteria) this;
        }

        public Criteria andVersionIdLike(String value) {
            addCriterion("version_id like", value, "versionId");
            return (Criteria) this;
        }

        public Criteria andVersionIdNotLike(String value) {
            addCriterion("version_id not like", value, "versionId");
            return (Criteria) this;
        }

        public Criteria andVersionIdIn(List<String> values) {
            addCriterion("version_id in", values, "versionId");
            return (Criteria) this;
        }

        public Criteria andVersionIdNotIn(List<String> values) {
            addCriterion("version_id not in", values, "versionId");
            return (Criteria) this;
        }

        public Criteria andVersionIdBetween(String value1, String value2) {
            addCriterion("version_id between", value1, value2, "versionId");
            return (Criteria) this;
        }

        public Criteria andVersionIdNotBetween(String value1, String value2) {
            addCriterion("version_id not between", value1, value2, "versionId");
            return (Criteria) this;
        }

        public Criteria andDriverClassNameIsNull() {
            addCriterion("driver_class_name is null");
            return (Criteria) this;
        }

        public Criteria andDriverClassNameIsNotNull() {
            addCriterion("driver_class_name is not null");
            return (Criteria) this;
        }

        public Criteria andDriverClassNameEqualTo(String value) {
            addCriterion("driver_class_name =", value, "driverClassName");
            return (Criteria) this;
        }

        public Criteria andDriverClassNameNotEqualTo(String value) {
            addCriterion("driver_class_name <>", value, "driverClassName");
            return (Criteria) this;
        }

        public Criteria andDriverClassNameGreaterThan(String value) {
            addCriterion("driver_class_name >", value, "driverClassName");
            return (Criteria) this;
        }

        public Criteria andDriverClassNameGreaterThanOrEqualTo(String value) {
            addCriterion("driver_class_name >=", value, "driverClassName");
            return (Criteria) this;
        }

        public Criteria andDriverClassNameLessThan(String value) {
            addCriterion("driver_class_name <", value, "driverClassName");
            return (Criteria) this;
        }

        public Criteria andDriverClassNameLessThanOrEqualTo(String value) {
            addCriterion("driver_class_name <=", value, "driverClassName");
            return (Criteria) this;
        }

        public Criteria andDriverClassNameLike(String value) {
            addCriterion("driver_class_name like", value, "driverClassName");
            return (Criteria) this;
        }

        public Criteria andDriverClassNameNotLike(String value) {
            addCriterion("driver_class_name not like", value, "driverClassName");
            return (Criteria) this;
        }

        public Criteria andDriverClassNameIn(List<String> values) {
            addCriterion("driver_class_name in", values, "driverClassName");
            return (Criteria) this;
        }

        public Criteria andDriverClassNameNotIn(List<String> values) {
            addCriterion("driver_class_name not in", values, "driverClassName");
            return (Criteria) this;
        }

        public Criteria andDriverClassNameBetween(String value1, String value2) {
            addCriterion("driver_class_name between", value1, value2, "driverClassName");
            return (Criteria) this;
        }

        public Criteria andDriverClassNameNotBetween(String value1, String value2) {
            addCriterion("driver_class_name not between", value1, value2, "driverClassName");
            return (Criteria) this;
        }

        public Criteria andBasePathIsNull() {
            addCriterion("base_path is null");
            return (Criteria) this;
        }

        public Criteria andBasePathIsNotNull() {
            addCriterion("base_path is not null");
            return (Criteria) this;
        }

        public Criteria andBasePathEqualTo(String value) {
            addCriterion("base_path =", value, "basePath");
            return (Criteria) this;
        }

        public Criteria andBasePathNotEqualTo(String value) {
            addCriterion("base_path <>", value, "basePath");
            return (Criteria) this;
        }

        public Criteria andBasePathGreaterThan(String value) {
            addCriterion("base_path >", value, "basePath");
            return (Criteria) this;
        }

        public Criteria andBasePathGreaterThanOrEqualTo(String value) {
            addCriterion("base_path >=", value, "basePath");
            return (Criteria) this;
        }

        public Criteria andBasePathLessThan(String value) {
            addCriterion("base_path <", value, "basePath");
            return (Criteria) this;
        }

        public Criteria andBasePathLessThanOrEqualTo(String value) {
            addCriterion("base_path <=", value, "basePath");
            return (Criteria) this;
        }

        public Criteria andBasePathLike(String value) {
            addCriterion("base_path like", value, "basePath");
            return (Criteria) this;
        }

        public Criteria andBasePathNotLike(String value) {
            addCriterion("base_path not like", value, "basePath");
            return (Criteria) this;
        }

        public Criteria andBasePathIn(List<String> values) {
            addCriterion("base_path in", values, "basePath");
            return (Criteria) this;
        }

        public Criteria andBasePathNotIn(List<String> values) {
            addCriterion("base_path not in", values, "basePath");
            return (Criteria) this;
        }

        public Criteria andBasePathBetween(String value1, String value2) {
            addCriterion("base_path between", value1, value2, "basePath");
            return (Criteria) this;
        }

        public Criteria andBasePathNotBetween(String value1, String value2) {
            addCriterion("base_path not between", value1, value2, "basePath");
            return (Criteria) this;
        }

        public Criteria andPixIsNull() {
            addCriterion("pix is null");
            return (Criteria) this;
        }

        public Criteria andPixIsNotNull() {
            addCriterion("pix is not null");
            return (Criteria) this;
        }

        public Criteria andPixEqualTo(String value) {
            addCriterion("pix =", value, "pix");
            return (Criteria) this;
        }

        public Criteria andPixNotEqualTo(String value) {
            addCriterion("pix <>", value, "pix");
            return (Criteria) this;
        }

        public Criteria andPixGreaterThan(String value) {
            addCriterion("pix >", value, "pix");
            return (Criteria) this;
        }

        public Criteria andPixGreaterThanOrEqualTo(String value) {
            addCriterion("pix >=", value, "pix");
            return (Criteria) this;
        }

        public Criteria andPixLessThan(String value) {
            addCriterion("pix <", value, "pix");
            return (Criteria) this;
        }

        public Criteria andPixLessThanOrEqualTo(String value) {
            addCriterion("pix <=", value, "pix");
            return (Criteria) this;
        }

        public Criteria andPixLike(String value) {
            addCriterion("pix like", value, "pix");
            return (Criteria) this;
        }

        public Criteria andPixNotLike(String value) {
            addCriterion("pix not like", value, "pix");
            return (Criteria) this;
        }

        public Criteria andPixIn(List<String> values) {
            addCriterion("pix in", values, "pix");
            return (Criteria) this;
        }

        public Criteria andPixNotIn(List<String> values) {
            addCriterion("pix not in", values, "pix");
            return (Criteria) this;
        }

        public Criteria andPixBetween(String value1, String value2) {
            addCriterion("pix between", value1, value2, "pix");
            return (Criteria) this;
        }

        public Criteria andPixNotBetween(String value1, String value2) {
            addCriterion("pix not between", value1, value2, "pix");
            return (Criteria) this;
        }

        public Criteria andScanPackageIsNull() {
            addCriterion("scan_package is null");
            return (Criteria) this;
        }

        public Criteria andScanPackageIsNotNull() {
            addCriterion("scan_package is not null");
            return (Criteria) this;
        }

        public Criteria andScanPackageEqualTo(String value) {
            addCriterion("scan_package =", value, "scanPackage");
            return (Criteria) this;
        }

        public Criteria andScanPackageNotEqualTo(String value) {
            addCriterion("scan_package <>", value, "scanPackage");
            return (Criteria) this;
        }

        public Criteria andScanPackageGreaterThan(String value) {
            addCriterion("scan_package >", value, "scanPackage");
            return (Criteria) this;
        }

        public Criteria andScanPackageGreaterThanOrEqualTo(String value) {
            addCriterion("scan_package >=", value, "scanPackage");
            return (Criteria) this;
        }

        public Criteria andScanPackageLessThan(String value) {
            addCriterion("scan_package <", value, "scanPackage");
            return (Criteria) this;
        }

        public Criteria andScanPackageLessThanOrEqualTo(String value) {
            addCriterion("scan_package <=", value, "scanPackage");
            return (Criteria) this;
        }

        public Criteria andScanPackageLike(String value) {
            addCriterion("scan_package like", value, "scanPackage");
            return (Criteria) this;
        }

        public Criteria andScanPackageNotLike(String value) {
            addCriterion("scan_package not like", value, "scanPackage");
            return (Criteria) this;
        }

        public Criteria andScanPackageIn(List<String> values) {
            addCriterion("scan_package in", values, "scanPackage");
            return (Criteria) this;
        }

        public Criteria andScanPackageNotIn(List<String> values) {
            addCriterion("scan_package not in", values, "scanPackage");
            return (Criteria) this;
        }

        public Criteria andScanPackageBetween(String value1, String value2) {
            addCriterion("scan_package between", value1, value2, "scanPackage");
            return (Criteria) this;
        }

        public Criteria andScanPackageNotBetween(String value1, String value2) {
            addCriterion("scan_package not between", value1, value2, "scanPackage");
            return (Criteria) this;
        }

        public Criteria andMapperPackageIsNull() {
            addCriterion("mapper_package is null");
            return (Criteria) this;
        }

        public Criteria andMapperPackageIsNotNull() {
            addCriterion("mapper_package is not null");
            return (Criteria) this;
        }

        public Criteria andMapperPackageEqualTo(String value) {
            addCriterion("mapper_package =", value, "mapperPackage");
            return (Criteria) this;
        }

        public Criteria andMapperPackageNotEqualTo(String value) {
            addCriterion("mapper_package <>", value, "mapperPackage");
            return (Criteria) this;
        }

        public Criteria andMapperPackageGreaterThan(String value) {
            addCriterion("mapper_package >", value, "mapperPackage");
            return (Criteria) this;
        }

        public Criteria andMapperPackageGreaterThanOrEqualTo(String value) {
            addCriterion("mapper_package >=", value, "mapperPackage");
            return (Criteria) this;
        }

        public Criteria andMapperPackageLessThan(String value) {
            addCriterion("mapper_package <", value, "mapperPackage");
            return (Criteria) this;
        }

        public Criteria andMapperPackageLessThanOrEqualTo(String value) {
            addCriterion("mapper_package <=", value, "mapperPackage");
            return (Criteria) this;
        }

        public Criteria andMapperPackageLike(String value) {
            addCriterion("mapper_package like", value, "mapperPackage");
            return (Criteria) this;
        }

        public Criteria andMapperPackageNotLike(String value) {
            addCriterion("mapper_package not like", value, "mapperPackage");
            return (Criteria) this;
        }

        public Criteria andMapperPackageIn(List<String> values) {
            addCriterion("mapper_package in", values, "mapperPackage");
            return (Criteria) this;
        }

        public Criteria andMapperPackageNotIn(List<String> values) {
            addCriterion("mapper_package not in", values, "mapperPackage");
            return (Criteria) this;
        }

        public Criteria andMapperPackageBetween(String value1, String value2) {
            addCriterion("mapper_package between", value1, value2, "mapperPackage");
            return (Criteria) this;
        }

        public Criteria andMapperPackageNotBetween(String value1, String value2) {
            addCriterion("mapper_package not between", value1, value2, "mapperPackage");
            return (Criteria) this;
        }

        public Criteria andPoPackageIsNull() {
            addCriterion("po_package is null");
            return (Criteria) this;
        }

        public Criteria andPoPackageIsNotNull() {
            addCriterion("po_package is not null");
            return (Criteria) this;
        }

        public Criteria andPoPackageEqualTo(String value) {
            addCriterion("po_package =", value, "poPackage");
            return (Criteria) this;
        }

        public Criteria andPoPackageNotEqualTo(String value) {
            addCriterion("po_package <>", value, "poPackage");
            return (Criteria) this;
        }

        public Criteria andPoPackageGreaterThan(String value) {
            addCriterion("po_package >", value, "poPackage");
            return (Criteria) this;
        }

        public Criteria andPoPackageGreaterThanOrEqualTo(String value) {
            addCriterion("po_package >=", value, "poPackage");
            return (Criteria) this;
        }

        public Criteria andPoPackageLessThan(String value) {
            addCriterion("po_package <", value, "poPackage");
            return (Criteria) this;
        }

        public Criteria andPoPackageLessThanOrEqualTo(String value) {
            addCriterion("po_package <=", value, "poPackage");
            return (Criteria) this;
        }

        public Criteria andPoPackageLike(String value) {
            addCriterion("po_package like", value, "poPackage");
            return (Criteria) this;
        }

        public Criteria andPoPackageNotLike(String value) {
            addCriterion("po_package not like", value, "poPackage");
            return (Criteria) this;
        }

        public Criteria andPoPackageIn(List<String> values) {
            addCriterion("po_package in", values, "poPackage");
            return (Criteria) this;
        }

        public Criteria andPoPackageNotIn(List<String> values) {
            addCriterion("po_package not in", values, "poPackage");
            return (Criteria) this;
        }

        public Criteria andPoPackageBetween(String value1, String value2) {
            addCriterion("po_package between", value1, value2, "poPackage");
            return (Criteria) this;
        }

        public Criteria andPoPackageNotBetween(String value1, String value2) {
            addCriterion("po_package not between", value1, value2, "poPackage");
            return (Criteria) this;
        }

        public Criteria andControllerPackageIsNull() {
            addCriterion("controller_package is null");
            return (Criteria) this;
        }

        public Criteria andControllerPackageIsNotNull() {
            addCriterion("controller_package is not null");
            return (Criteria) this;
        }

        public Criteria andControllerPackageEqualTo(String value) {
            addCriterion("controller_package =", value, "controllerPackage");
            return (Criteria) this;
        }

        public Criteria andControllerPackageNotEqualTo(String value) {
            addCriterion("controller_package <>", value, "controllerPackage");
            return (Criteria) this;
        }

        public Criteria andControllerPackageGreaterThan(String value) {
            addCriterion("controller_package >", value, "controllerPackage");
            return (Criteria) this;
        }

        public Criteria andControllerPackageGreaterThanOrEqualTo(String value) {
            addCriterion("controller_package >=", value, "controllerPackage");
            return (Criteria) this;
        }

        public Criteria andControllerPackageLessThan(String value) {
            addCriterion("controller_package <", value, "controllerPackage");
            return (Criteria) this;
        }

        public Criteria andControllerPackageLessThanOrEqualTo(String value) {
            addCriterion("controller_package <=", value, "controllerPackage");
            return (Criteria) this;
        }

        public Criteria andControllerPackageLike(String value) {
            addCriterion("controller_package like", value, "controllerPackage");
            return (Criteria) this;
        }

        public Criteria andControllerPackageNotLike(String value) {
            addCriterion("controller_package not like", value, "controllerPackage");
            return (Criteria) this;
        }

        public Criteria andControllerPackageIn(List<String> values) {
            addCriterion("controller_package in", values, "controllerPackage");
            return (Criteria) this;
        }

        public Criteria andControllerPackageNotIn(List<String> values) {
            addCriterion("controller_package not in", values, "controllerPackage");
            return (Criteria) this;
        }

        public Criteria andControllerPackageBetween(String value1, String value2) {
            addCriterion("controller_package between", value1, value2, "controllerPackage");
            return (Criteria) this;
        }

        public Criteria andControllerPackageNotBetween(String value1, String value2) {
            addCriterion("controller_package not between", value1, value2, "controllerPackage");
            return (Criteria) this;
        }

        public Criteria andMasterDbIsNull() {
            addCriterion("master_db is null");
            return (Criteria) this;
        }

        public Criteria andMasterDbIsNotNull() {
            addCriterion("master_db is not null");
            return (Criteria) this;
        }

        public Criteria andMasterDbEqualTo(Integer value) {
            addCriterion("master_db =", value, "masterDb");
            return (Criteria) this;
        }

        public Criteria andMasterDbNotEqualTo(Integer value) {
            addCriterion("master_db <>", value, "masterDb");
            return (Criteria) this;
        }

        public Criteria andMasterDbGreaterThan(Integer value) {
            addCriterion("master_db >", value, "masterDb");
            return (Criteria) this;
        }

        public Criteria andMasterDbGreaterThanOrEqualTo(Integer value) {
            addCriterion("master_db >=", value, "masterDb");
            return (Criteria) this;
        }

        public Criteria andMasterDbLessThan(Integer value) {
            addCriterion("master_db <", value, "masterDb");
            return (Criteria) this;
        }

        public Criteria andMasterDbLessThanOrEqualTo(Integer value) {
            addCriterion("master_db <=", value, "masterDb");
            return (Criteria) this;
        }

        public Criteria andMasterDbIn(List<Integer> values) {
            addCriterion("master_db in", values, "masterDb");
            return (Criteria) this;
        }

        public Criteria andMasterDbNotIn(List<Integer> values) {
            addCriterion("master_db not in", values, "masterDb");
            return (Criteria) this;
        }

        public Criteria andMasterDbBetween(Integer value1, Integer value2) {
            addCriterion("master_db between", value1, value2, "masterDb");
            return (Criteria) this;
        }

        public Criteria andMasterDbNotBetween(Integer value1, Integer value2) {
            addCriterion("master_db not between", value1, value2, "masterDb");
            return (Criteria) this;
        }

        public Criteria andSlaverDbIsNull() {
            addCriterion("slaver_db is null");
            return (Criteria) this;
        }

        public Criteria andSlaverDbIsNotNull() {
            addCriterion("slaver_db is not null");
            return (Criteria) this;
        }

        public Criteria andSlaverDbEqualTo(Integer value) {
            addCriterion("slaver_db =", value, "slaverDb");
            return (Criteria) this;
        }

        public Criteria andSlaverDbNotEqualTo(Integer value) {
            addCriterion("slaver_db <>", value, "slaverDb");
            return (Criteria) this;
        }

        public Criteria andSlaverDbGreaterThan(Integer value) {
            addCriterion("slaver_db >", value, "slaverDb");
            return (Criteria) this;
        }

        public Criteria andSlaverDbGreaterThanOrEqualTo(Integer value) {
            addCriterion("slaver_db >=", value, "slaverDb");
            return (Criteria) this;
        }

        public Criteria andSlaverDbLessThan(Integer value) {
            addCriterion("slaver_db <", value, "slaverDb");
            return (Criteria) this;
        }

        public Criteria andSlaverDbLessThanOrEqualTo(Integer value) {
            addCriterion("slaver_db <=", value, "slaverDb");
            return (Criteria) this;
        }

        public Criteria andSlaverDbIn(List<Integer> values) {
            addCriterion("slaver_db in", values, "slaverDb");
            return (Criteria) this;
        }

        public Criteria andSlaverDbNotIn(List<Integer> values) {
            addCriterion("slaver_db not in", values, "slaverDb");
            return (Criteria) this;
        }

        public Criteria andSlaverDbBetween(Integer value1, Integer value2) {
            addCriterion("slaver_db between", value1, value2, "slaverDb");
            return (Criteria) this;
        }

        public Criteria andSlaverDbNotBetween(Integer value1, Integer value2) {
            addCriterion("slaver_db not between", value1, value2, "slaverDb");
            return (Criteria) this;
        }
    }

    /**
     * project_info
     */
    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    /**
     * project_info null
     */
    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}