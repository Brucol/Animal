/**
 * Created by ASUS on 2017/4/10.
 */
function animal_identifier(r, f) {
    this.r = r;
    this.f = f;
}

    function Creat_Rules(){
        var r = new Object();
        r[0].Condition[0] = '有毛发';
        r[0].Cnum = 1;
        r[0].Result = '哺乳动物';
        r[0].used = false;

        r[1].Condition[0] = '有奶';
        r[1].Cnum = 1;
        r[1].Result = '哺乳动物';
        r[1].used = false;

        r[2].Condition[0] = '会飞';
        r[2].Cnum = 1;
        r[2].Result = '鸟';
        r[2].used = false;

        r[3].Condition[0] = '吃肉';
        r[3].Cnum = 1;
        r[3].Result = '食肉动物';
        r[3].used = false;

        r[4].Condition[0] = '有锋利的牙齿' ;
        r[4].Condition[1] = '有爪' ;
        r[4].Cnum = 2;
        r[4].Result = '食肉动物';
        r[4].used = false;

        r[5].Condition[0] = '哺乳动物';
        r[5].Condition[1] = '有蹄';
        r[5].Cnum = 2;
        r[5].Result = '有蹄类哺乳动物';
        r[5].used = false;

        r[6].Condition[0] = '哺乳动物';
        r[6].Condition[1] = '有蹄动物';
        r[6].Condition[2] = '长腿';
        r[6].Condition[3] = '长脖子';
        r[6].Condition[4] = '有暗斑点';
        r[6].Condition[5] = '黄褐色';
        r[6].Cnum = 6;
        r[6].Result = '长颈鹿';
        r[6].used = false;

        r[7].Condition[0] = '有羽毛';
        r[7].Cnum = 1;
        r[7].Result = '鸟';
        r[7].used = false;

        r[8].Condition[0] = '鸟';
        r[8].Condition[0] = '不怕风浪';
        r[8].Cnum = 2;
        r[8].Result = '海燕';
        r[8].used = false;

        r[9].Condition[0] = '有蹄动物';
        r[9].Condition[1] = '有黑白条纹';
        r[9].Cnum = 2;
        r[9].Result = '斑马';
        r[9].used = false;

        r[10].Condition[0] = '哺乳动物';
        r[10].Condition[1] = '食肉动物';
        r[10].Condition[2] = '黄褐色';
        r[10].Condition[3] = '头上有王字';
        r[10].Cnum = 4;
        r[10].Result = '老虎';
        r[10].used = false;

        r[11].Condition[0] = '哺乳动物';
        r[11].Condition[1] = '食肉动物';
        r[11].Condition[2] = '黄褐色';
        r[11].Condition[3] = '有斑点';
        r[11].Cnum = 4;
        r[11].Result = '金钱豹';
        r[11].used = false;

        r[12].Condition[0] = '鸟';
        r[12].Condition[1] = '不会飞';
        r[12].Condition[2] = '会游泳';
        r[12].Condition[3] = '生活在南极';
        r[12].Cnum = 4;
        r[12].Result = '企鹅';
        r[12].used = false;
        
        r[13].Condition[0] = '鸟';
        r[13].Condition[1] = '长脖子';
        r[13].Condition[2] = '长腿';
        r[13].Condition[3] = '不会飞';
        r[13].Cnum = 4;
        r[13].Result = '鸵鸟';
        r[13].used = false;
    }


//从输入框中获取输入的事实，构造事实集f
    function Creat_Fact(){
        var f1 = new Array;
        var f = new Array;
        var Fnum = 0;
        var i = 0;
        f1 = $('.fact');
        for(i = 0; i < f1.length; i++) {
            if (f1[i].value != ""){
                f[i] = f1[i].value;   //f为事实集
                Fnum++;
            }
            else
                break;
        }
    }

//
    function reason(r, f){
        var i = 0;
        var  FindFact = new Boolean();
        while(1){
            for(i = 0; i < f.Fnum; i++){
                if(r[i].used == false){
                    for(j = 0;　j < r[i].Cnum; j++){
                        if(FindFact(r[i].Condition[j])){
                            if(f[j] == r[i].Condition[j]){
                                continue;
                            }
                            else
                                break;  //跳出if(f[j])
                        }
                        else
                            break; //跳出FindFact()
                    }
                }

                if(j == r[i].Cnum - 1){   //如果所有的条件都满足
                    r[i].used = true;
                    if(!FindFact(r[i].Result)){
                        Insert_Fact(f, r[i].Result);  //插入新事实
                        if(i < 100){
                            var str = "<p>因为";
                            for(j = 0; j <　f.Fnum; j++){
                                str = str + f[j] +　',';
                            }
                            str = str + "所以是" + r[i].Result + "</p>";
                            $('#new_facts').html(str);
                            i = 0;
                        }
                    }
                    else i++; //查看下条规则

                    if(i == (Fnum - 1)){
                        var ans = prompt('没有你所找的符合要求的动物，你可以再增加事实来判断属于哪种动物。');
                        if (ans != null){
                            f.add(ans);
                            var f2 = new Array;
                            f2 = $('.fact');
                            for(var i = 0; i < f2.length - 1; i++){
                                if(f2[i].value == "")
                                    f2[i].value = ans;   //把新加入的事实显示在事实框中
                                else
                                    continue;
                            }
                        }
                        else
                            break;
                    }
                    else if (f[Fnum-1] == '长颈鹿'||f[Fnum-1] == '海燕'||f[Fnum-1] == '斑马'||f[Fnum-1] == '老虎'||f[Fnum-1] == '金钱豹'||f[Fnum-1] == '鸵鸟'||f[Fnum-1] == '企鹅'){
                        var str = "<p>你所描述的动物是" +　f[Fnum-1] +　"。";
                        $('#conclusion').html(str);
                    }
                }
            }
        }
    }

    function Insert_Fact(f, result){
        f.append('result');
        Fnum++;
    }


