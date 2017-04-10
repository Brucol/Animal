/**
 * Created by ASUS on 2017/4/10.
 */
function animal_identifier(r, f){
    this.rules = r;
    this.facts = f;

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

    function Creat_Fact(){
        var f = $('.input-group input').value();
        var Cnum = f.length;

    }

    function reason(){
        var i = 0;
        var  FindFact = new Boolean();
        while(1){
            for(i = 0; i < f.Cnum; i++){
                if(r[i].used == false){
                    for(j = 0;　j < r[i].Cnum; j++){
                        if(FindFact(r[i].Condition[j])){
                            if(f[j] == r[i].Condition[j]){
                                continue;
                            }
                            else
                                break;
                        }
                        else
                            break;
                    }
                }
            }
            if(j == r[i].Cnum){   //如果所有的条件都满足
                r[i].used = true;
                if(!FindFact(r[i].Result)){
                    Insert_Fact(r[i].Result);  //查出事实
                }
            }
        }
    }
}

