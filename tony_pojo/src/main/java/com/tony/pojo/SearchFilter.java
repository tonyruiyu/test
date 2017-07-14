package com.tony.pojo;



public class SearchFilter {

    private String groupOp;
    private SearchRule[] rules;
    
    public String getGroupOp() {
        return groupOp;
    }
    public void setGroupOp(String groupOp) {
        this.groupOp = groupOp;
    }
    public SearchRule[] getRules() {
        return rules;
    }
    public void setRules(SearchRule[] rules) {
        this.rules = rules;
    }
    
}
