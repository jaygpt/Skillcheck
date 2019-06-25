pragma solidity ^0.4.17;

contract College {
    address[] public students;
    mapping(address => string) names;
    mapping(address => address) wallet;
    mapping(address => bool) doyouhavewallet;
    function createwallet(string name) public{
        require(!doyouhavewallet[msg.sender]);
        address newwallet = new Wallet(msg.sender);
        wallet[msg.sender] = newwallet;
        students.push(newwallet);
        names[newwallet] = name;
        doyouhavewallet[msg.sender] = true;
    }
    
    function totalwallet() public view returns (address[]){
        return students;
    }
    function mywallet() public view returns (address){
        return wallet[msg.sender];
    }
    function myname(address name) public view returns (string){
        return names[name];
    }

}

contract Wallet {
    
    address public student;
    uint score;
    uint testevaluatingscore;
    address admin;
    
    function Wallet(address creator) public{
        student = creator;
    }
    
    function Setadmin(address examiner) public{
        admin = examiner;
    }
    
    function setscoretest(uint marks) public{
        require(msg.sender == admin);
        require(admin != student);
        score = (score + marks)/2;
    }
    function setscoreeval(uint marks, address wallet) public{
        require(wallet == admin);
        require(admin != student);
        testevaluatingscore = (testevaluatingscore + marks)/2;
    }
    
    function presentscore() public view returns(uint,uint){
        return (score,testevaluatingscore);
    }

    function myaddress() public view returns(address){
        return student;
    }
}


contract TestFactory{
    address[] myaddress;

    mapping(address => string) Instructions;
    function creatorTest(string Instruction) public{
        address newwalletaddress = new Test(msg.sender);
        myaddress.push(newwalletaddress);
        Instructions[newwalletaddress] = Instruction;
    }
    
    function totalwallet() public view returns (address[]){
        return myaddress;
    }
    
    function totalinstruction(address add) public view returns(string){
        return Instructions[add];
    }

}

contract Test {
    mapping(address => bool) public attende;
    // For Graders
    struct Marksbyme{
        address evaluator;
        int[] marksbyme;
    }
    mapping(address => Marksbyme[]) grading;
    // student to graders
    address[] studentswallet;
    address examiner;
    string[] public Questionset;
    struct questionanswer{
        string question;
        string answer;
        int marksbyevaluator;
    }
    
    mapping(address => questionanswer[]) public exam;
    uint questioncount = 0;
    
    modifier restricted() {
        require(msg.sender == examiner);
        _;
    }
    modifier restricted2(){
        require(!attende[msg.sender]);
        _;
    }
    function addProbe(address wallet, uint index, int marks) public restricted{
        exam[wallet][index].marksbyevaluator = marks;
    }
    
    function Test(address creator) public{
        examiner = creator;
    }

    function addQuestion(string question) public restricted{
        Questionset.push(question);
        questioncount++;
    }
    
    function enrollintest(address walletaddress) public {
        require(!attende[walletaddress]);
        attende[walletaddress] = true;
        studentswallet.push(walletaddress); 
        questionanswer[] storage mytest;
        for(uint i = 0; i<questioncount; i++){
            questionanswer memory newquestion = questionanswer({
                question: Questionset[i],
                answer: "",
                marksbyevaluator: -1
            });
            mytest.push(newquestion);
        }
        exam[walletaddress] = mytest;
    }
    
    function starteval(address walletaddress) public{
        Marksbyme[] storage mymarks;
        grading[walletaddress] = mymarks;
    }
    
    function answermytest(address walletaddress,uint index,string answer) public {
        require(attende[walletaddress]);
        questionanswer[] storage mytest = exam[walletaddress];
        mytest[index].answer = answer;
    }
    
    function becomegrader(address walletaddress, address roll) public {
        Marksbyme[] storage marks = grading[roll];
        uint j;
        bool flag = false;
        for(j=0;j<marks.length;j++){
            Marksbyme storage thism = marks[j];
                if(thism.evaluator == walletaddress){
                    flag = true;
                }
        }
        if(!flag){
            int[] memory newscore = new int[](questioncount);
            uint k;
            for(k = 0;k < questioncount;k++){
                newscore[k] = -1;
            }
            Marksbyme memory newe1 = Marksbyme({
                evaluator: walletaddress,
                marksbyme: newscore
            });
            marks.push(newe1);
            grading[roll] = marks;
        }
        
    }
    
    function givemarks(address roll, address Mywallet, int marks,uint index) restricted2  public {
        require(!(msg.sender == examiner));
        Marksbyme[] storage mymarks = grading[roll];
        uint i;
        for(i = 0;i< mymarks.length;i++){
            Marksbyme storage thism = mymarks[i];
            if(thism.evaluator == Mywallet){
                thism.marksbyme[index] = marks;
            }
        }
    }
    
    function examineradd() public view returns(address){
        return examiner;
    }
    
    function StudentsAddress() public view returns(address[]){
        return studentswallet;
    }
    
    function question(uint i) public view returns(string){
        return Questionset[i];
    }
    
    function numberofQ() public view returns(uint){
        return questioncount;
    }
    
    function sendresponse(address studentwallet,uint index) public view returns(string,string,int){
        return (exam[studentwallet][index].question , exam[studentwallet][index].answer, exam[studentwallet][index].marksbyevaluator);
    }
    
    function number_of_evaluator(address studentwallet) public view returns(uint length){
        return grading[studentwallet].length;
    }
    function sendmarks(address studentwallet, uint index) public view returns(address,int[]){
        return (grading[studentwallet][index].evaluator , grading[studentwallet][index].marksbyme);
    }
}