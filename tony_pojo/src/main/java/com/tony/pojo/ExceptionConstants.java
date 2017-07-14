package com.tony.pojo;

import java.util.LinkedHashMap;
import java.util.Map;

public class ExceptionConstants {

    public static final Map<String, String> ERRORMAPS = new LinkedHashMap<String, String>();

    static {
        ERRORMAPS.put(ExceptionCode.DUPLICATION_ERROR_CODE, "已经存在该数据!");
        ERRORMAPS.put(ExceptionCode.FILEUPDATE_ERROR_CODE, "文件上传处理错误!");
        ERRORMAPS.put(ExceptionCode.TIMEREPEATED_ERRO_CODE, "同一渠道的相同sku的预售时间不能有交集!");
        ERRORMAPS.put(ExceptionCode.FILE_IS_NULL, "导入预售明细数据时候文件不能为空!");
        ERRORMAPS.put(ExceptionCode.DUPLICATION_RECODE, "文件中含有重复的数据!");
        ERRORMAPS.put(ExceptionCode.CHECK_NOTIN_PRESALE_RECODE, "预售单中不存在该数据");
    }

    public static final class ExceptionCode {
        /** 重复新增时 错误代码 */
        public final static String DUPLICATION_ERROR_CODE     = "11000";

        /** 文件上传时 错误代码 */
        public final static String FILEUPDATE_ERROR_CODE      = "99000";

        // 预售单，同一渠道的相同sku的预售时间不能有交集
        public final static String TIMEREPEATED_ERRO_CODE     = "10001";

        // 导入预售明细数据时候文件为空错误
        public final static String FILE_IS_NULL               = "10002";

        // 文件中含有重复的数据
        public static final String DUPLICATION_RECODE         = "10003";

        // 预售单中不存在的数据
        public static final String CHECK_NOTIN_PRESALE_RECODE = "10004";
    }

    public final static String SUCCESS_CODE    = "success";

    public final static String ERROR_CODE      = "error";

    public final static String SUCCESS_MESSAGE = "操作成功！";

    public final static String ERROR_MESSAGE   = "操作失败，请联系相关人员查询日志！";

}
