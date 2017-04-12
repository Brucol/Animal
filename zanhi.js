
/*Created by Brucol on 2017/4/10.*/

var f;
var F;
var Str_newfact;

//规则集的对象
function Rules(){
    this.Condition = new Array;
    this.Cnum = 0;
    this.Result = '';
    this.used = new Boolean();
}


//事实集的对象
function Facts(){
    this.facts = new Array;
    this.Fnum = 0;
}


function Create_Rules(){
    //创建静态规则集
    var r = new Array;
    var r0 = new Rules();
    var r1 = new Rules();
    var r2 = new Rules();
    var r3 = new Rules();
    var r4 = new Rules();
    var r5 = new Rules();
    var r6 = new Rules();
    var r7 = new Rules();
    var r8 = new Rules();
    var r9 = new Rules();
    var r10 = new Rules();
    var r11 = new Rules();
    var r12 = new Rules();
    var r13 = new Rules();
    var r14 = new Rules();


    r0.Condition[0] = '有毛发';
    r0.Cnum = 1;
    r0.Result = '哺乳动物';
    r0.used = false;
    r.push(r0);

    r1.Condition[0] = '有奶';
    r1.Cnum = 1;
    r1.Result = '哺乳动物';
    r1.used = false;
    r.push(r1);

    r2.Condition[0] = '会飞';
    r2.Cnum = 1;
    r2.Result = '鸟';
    r2.used = false;
    r.push(r2);

    r3.Condition[0] = '吃肉';
    r3.Cnum = 1;
    r3.Result = '食肉动物';
    r3.used = false;
    r.push(r3);

    r4.Condition[0] = '有锋利的牙齿' ;
    r4.Condition[1] = '有爪' ;
    r4.Cnum = 2;
    r4.Result = '食肉动物';
    r4.used = false;
    r.push(r4);

    r5.Condition[0] = '哺乳动物';
    r5.Condition[1] = '有蹄';
    r5.Cnum = 2;
    r5.Result = '有蹄类哺乳动物';
    r5.used = false;
    r.push(r5);

    r6.Condition[0] = '哺乳动物';
    r6.Condition[1] = '有蹄动物';
    r6.Condition[2] = '长腿';
    r6.Condition[3] = '长脖子';
    r6.Condition[4] = '有暗斑点';
    r6.Condition[5] = '黄褐色';
    r6.Cnum = 6;
    r6.Result = '长颈鹿';
    r6.used = false;
    r.push(r6);

    r7.Condition[0] = '有羽毛';
    r7.Cnum = 1;
    r7.Result = '鸟';
    r7.used = false;
    r.push(r7);

    r8.Condition[0] = '鸟';
    r8.Condition[1] = '不怕风浪';
    r8.Cnum = 2;
    r8.Result = '海燕';
    r8.used = false;
    r.push(r8);

    r9.Condition[0] = '有蹄动物';
    r9.Condition[1] = '有黑白条纹';
    r9.Cnum = 2;
    r9.Result = '斑马';
    r9.used = false;
    r.push(r9);

    r10.Condition[0] = '哺乳动物';
    r10.Condition[1] = '食肉动物';
    r10.Condition[2] = '黄褐色';
    r10.Condition[3] = '头上有王字';
    r10.Cnum = 4;
    r10.Result = '老虎';
    r10.used = false;
    r.push(r10);

    r11.Condition[0] = '哺乳动物';
    r11.Condition[1] = '食肉动物';
    r11.Condition[2] = '黄褐色';
    r11.Condition[3] = '有斑点';
    r11.Cnum = 4;
    r11.Result = '金钱豹';
    r11.used = false;
    r.push(r11);

    r12.Condition[0] = '鸟';
    r12.Condition[1] = '不会飞';
    r12.Condition[2] = '会游泳';
    r12.Condition[3] = '生活在南极';
    r12.Cnum = 4;
    r12.Result = '企鹅';
    r12.used = false;
    r.push(r12);

    r13.Condition[0] = '鸟';
    r13.Condition[1] = '长脖子';
    r13.Condition[2] = '长腿';
    r13.Condition[3] = '不会飞';
    r13.Cnum = 4;
    r13.Result = '鸵鸟';
    r13.used = false;
    r.push(r13);

    r14.Condition[0] = '有蹄';
    r14.Cnum = 1;
    r14.Result = '有蹄动物';
    r14.used = false;
    r.push(r14);

    return r;
}


//从输入框中获取输入的事实，构造事实集f
function Create_Fact(){
    var f = new Facts();

    var f1 = $('.fact');
    for(var i = 0; i < f1.length; i++) {
        if (f1[i].value != ""){
            f.facts.push(f1[i].value);   //f为事实集
            f.Fnum++;
        }
    }
    return f;
}

//创建控制策略
function reason(r, f){
    while(1){
        var temp = false;

        for (var i = 0; i < r.length; i++){
            temp1 = R_F(r[i], f);
            temp = temp || temp1;
        }
        if(!temp){
            console.log(f);
            return f;
        }
    }
    console.log(f);
}


function R_F(r, f){
    var i, j, k = 0, flag = false;
    var g = [];
    for(i = 0; i < r.Cnum; i++){
        for(j = 0; j < f.facts.length; j++){
            if(r.Condition[i] == f.facts[j])
            {
                k++;
                g.push(j);
            }
        }
    }
    if(k==r.Cnum){
        Str_newfact = new Array;
        Str_newfact.push(r.Result);
        console.log('新事实：' + Str_newfact);
        for(var i = 0; i < g.length; i++){
            f.facts[g[i]] = '';
        }
        f.facts.push(r.Result);
        flag = true;
    }
    return flag;
}


//插入事实函数
function Insert_Fact(f, result){
    f.facts.push('result');
    f.Fnum++;
}

//清除按钮的事件
function Clear_all(){
    var f3 = new Array;
    f3 = $('.fact');
    for(var i = 0; i < f3.length; i++){
        f3[i].value = '';     //清除事实框
    }

    //清除结论框的语句
    $('#new_facts').children().remove();
    $('#conclusion').children().remove();
    $('#error').children().remove();
    f = null;
    F = null;
    Str_newfact = '';
}



function Identify() {
    var r = Create_Rules();
    f = Create_Fact();
    F = new Array();
    F = F.concat(f.facts);
    final = reason(r, f);


    if (final.facts[final.facts.length - 1] == '长颈鹿' ||
        final.facts[final.facts.length - 1] == '海燕' ||
        final.facts[final.facts.length - 1] == '斑马' ||
        final.facts[final.facts.length - 1] == '老虎' ||
        final.facts[final.facts.length - 1] == '金钱豹' ||
        final.facts[final.facts.length - 1] == '鸵鸟' ||
        final.facts[final.facts.length - 1] == '企鹅')
    {
        var str = "<p>你所描述的动物是" + final.facts[final.facts.length - 1] + "。</p>";
        $('#conclusion').html(str);
    }
    else{
        var ans = prompt('没有你所找的符合要求的动物，你可以再增加事实来判断属于哪种动物。');
        if (ans != null) {
            Insert_Fact(f, ans);    //插入新输入的事实
            f2 = $('.fact');
            for (var i = 0; i < f2.length; i++) {
                if (f2[i].value == ""){
                    f2[i].value = ans;
                    break; //把新加入的事实显示在事实框中
                }
                else
                    continue;
            }
        }
    }
}

