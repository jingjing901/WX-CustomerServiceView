/**
 * Created by Administrator on 16-1-15.
 */
extra.getAllDataOrPaging = function* (doc,model,param){
    var begin = 0
        ,limit = 10
        ,currentPage = 1;
    if(doc.limit){
        limit = parseInt(doc.limit);
    }
    if(doc.currentPage){
        currentPage = parseInt(doc.currentPage);
    }
    begin = (parseInt(currentPage) - 1) * parseInt(limit);
    //搜索条件
    var conditions = {};
    if(doc.interface && doc.interface == "all"){
        //获取全部数据
        const result = yield model.count();
        limit = result;
        begin = 0;
    }else{
        if(doc.text){
            //来处理是搜索还是检索
            const isSearch = doc.type.split('|');
            const _text = doc.text.split('|');
            //记录所有的类型
            if(isSearch.indexOf('staffName') != -1){
                //员工名称搜索
                conditions.name = new RegExp("^.*" + doc.text + ".*$");
            }
            if(isSearch.indexOf('staffCellphone') != -1){
                //员工电话搜索
                conditions.cellphone = new RegExp("^.*" + doc.text + ".*$");
            }
            if(isSearch.indexOf('staffId') != -1){
                //员工id搜索
                conditions.staffId = new RegExp("^.*" + doc.text + ".*$");
            }
            if(isSearch.indexOf('staffRole') != -1){
                //员工角色筛选
                if(_text[0] != "''"){
                    conditions = {"staffRole.staffType":_text[0]};
                }
                if(_text[1] != "''"){
                    conditions = {"staffRole.level":_text[1]};
                }
            }
            if(isSearch.indexOf('staffJobStatus') != -1){
                //员工工作状态筛选
                if(_text[2] != "''"){
                    conditions.jobStatus = _text[2];
                }
            }
            if(isSearch.indexOf('staffOffice') != -1){
                //员工职务筛选
                if(_text[3] != "''"){
                    conditions.office = _text[3];
                }
            }
            if (doc.type == "goodsName") {
                conditions.name = new RegExp("^.*" + doc.text + ".*$");
            }
            if (doc.type == "goodsType") {
                conditions.goodsType = new RegExp("^.*" + doc.text + ".*$");
            }
            if (doc.type == "serviceName") {
                conditions.name = new RegExp("^.*" + doc.text + ".*$");
            }
            if (doc.type == "serviceType") {
                conditions.serviceType = new RegExp("^.*" + doc.text + ".*$");
            }
            if(isSearch.indexOf('branchName') != -1){
                //门店名称搜索
                conditions.name = new RegExp("^.*" + doc.text + ".*$");
            }
            if(isSearch.indexOf('branchId') != -1){
                //门店id都多
                conditions.branchId = new RegExp("^.*" + doc.text + ".*$");
            }
            if(isSearch.indexOf('branchManagePer') != -1){
                //门店管理员搜索
                conditions = {"managePer.name":new RegExp("^.*" + doc.text + ".*$")};
            }
            if(isSearch.indexOf('branchStatus') != -1){
                //门店状态检索
                if(_text[0]){
                    conditions.status = _text[0];
                }
            }
            if(isSearch.indexOf('branchType') != -1){
                //门店类型检索
                console.log('_text[1]--->>',_text[1]);
                if(_text[1] != "''"){
                    conditions.branchType = _text[1];
                }
            }
            if (doc.type == "wpname") {
                conditions = {name: new RegExp("^.*" + doc.text + ".*$")};
            }
            if (doc.type == "wpstorename") {
                conditions = {"store_info.name": new RegExp("^.*" + doc.text + ".*$")};
            }
            if (doc.type == "wpstaffstatus") {
                conditions = {status: new RegExp("^.*" + doc.text + ".*$")};
            }
            if(doc.type == "operation"){
                conditions = {"staff.name":new RegExp("^.*" + data.text + ".*$")};
            }
            if(doc.type == "property"){
                conditions.name = new RegExp("^.*" + data.text + ".*$");
            }
        }else{
            conditions = {};
        }
    }
    conditions.isDelete = false;
    console.log('begin--->>>',begin);
    console.log('limit--->>>',limit);
    console.log('conditions--->>',conditions);
    try{
        const result = yield model.find(conditions,param).skip(begin).limit(limit).exec();
        if(result == ""){
            //数据为空
            return {res:true,message:'数据为空'};
        }else{
            return {res:true,data:result,message:'成功'};
        }
    } catch (err){
        return {res:false,error:{code:20008,message:err}};
        throw err;
    }
};