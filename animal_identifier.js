/**
 * Created by ASUS on 2017/4/10.
 */
function animal_identifier(r, f){
    this.rules = r;
    this.facts = f;

    function Creat_Rules(){
        var r = new Object();
        r[0].Condition[0] = '有羽毛';
        r[0].Cnum = 1;
        r[0].Result = '鸟';
        r[0].used = false;

        r[1].Condition[0] = '有奶';
        r[1].Cnum = 1;
        r[1].Result = '哺乳动物';
        r[1].used = false;

        r[2].Condition[0] = '会飞';
        r[2].Condition[1] = '下蛋';
        r[2].Cnum = 2;
        r[2].Result = '鸟';
        r[2].used = false;

        r[3].Condition[0] = '吃肉';
        r[3].Cnum = 1;
        r[3].Result = '食肉动物';
        r[3].used = false;

        r[4].Condition[0] = '有锋利的牙齿' ;
        r[4].Condition[1] = '有爪' ;
        r[4].Condition[2] = '眼睛盯着前方';
        r[4].Cnum = 3;
        r[4].Result = '食肉动物';
        r[4].used = false;

        r[5].Condition[0] = '哺乳动物';
        r[5].Condition[1] = '有蹄';
        r[5].Cnum = 2;
        r[5].Result = '有蹄类哺乳动物';
        r[5].used = false;

    }

    function Creat_Fact(){
        var facts_input = $('.input-group input').value();
    }

    function reason(){

    }
}

