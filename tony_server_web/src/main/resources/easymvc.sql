/*
 Navicat Premium Data Transfer

 Source Server         : 10.100.28.184
 Source Server Type    : MySQL
 Source Server Version : 100114
 Source Host           : 10.100.28.184
 Source Database       : easymvc

 Target Server Type    : MySQL
 Target Server Version : 100114
 File Encoding         : utf-8

 Date: 07/14/2017 14:58:47 PM
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `db_info`
-- ----------------------------
DROP TABLE IF EXISTS `db_info`;
CREATE TABLE `db_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jdbc_url` varchar(1000) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `html_operation`
-- ----------------------------
DROP TABLE IF EXISTS `html_operation`;
CREATE TABLE `html_operation` (
  `id` int(11) NOT NULL,
  `project_id` int(11) DEFAULT NULL,
  `table_name` varchar(200) DEFAULT NULL,
  `column_name` varchar(200) DEFAULT NULL,
  `field_name` varchar(200) DEFAULT NULL,
  `title_name` varchar(200) DEFAULT NULL,
  `is_primary` char(1) DEFAULT NULL,
  `is_search` char(1) DEFAULT NULL,
  `is_update` char(50) DEFAULT NULL,
  `search_type` varchar(20) DEFAULT NULL,
  `select_operation` varchar(20) DEFAULT NULL,
  `field_type` varchar(20) DEFAULT NULL,
  `display_order` int(11) DEFAULT NULL,
  `field_width` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `project_config`
-- ----------------------------
DROP TABLE IF EXISTS `project_config`;
CREATE TABLE `project_config` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `key` varchar(500) DEFAULT NULL,
  `value` varchar(2000) DEFAULT NULL,
  `project_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `project_info`
-- ----------------------------
DROP TABLE IF EXISTS `project_info`;
CREATE TABLE `project_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` varchar(100) DEFAULT NULL,
  `artifact_id` varchar(100) DEFAULT NULL,
  `version_id` varchar(100) DEFAULT NULL,
  `driver_class_name` varchar(100) DEFAULT NULL,
  `base_path` varchar(1000) DEFAULT NULL COMMENT '输出路径',
  `pix` varchar(100) DEFAULT NULL,
  `scan_package` varchar(300) DEFAULT NULL,
  `mapper_package` varchar(300) DEFAULT NULL,
  `po_package` varchar(300) DEFAULT NULL,
  `controller_package` varchar(300) DEFAULT NULL,
  `master_db` int(11) DEFAULT NULL,
  `slaver_db` int(11) DEFAULT NULL,
  `menu_name` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `project_tables`
-- ----------------------------
DROP TABLE IF EXISTS `project_tables`;
CREATE TABLE `project_tables` (
  `id` int(11) NOT NULL,
  `project_id` int(11) DEFAULT NULL,
  `table_name` varchar(200) DEFAULT NULL,
  `object_name` varchar(255) DEFAULT NULL,
  `menu_name` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

SET FOREIGN_KEY_CHECKS = 1;
