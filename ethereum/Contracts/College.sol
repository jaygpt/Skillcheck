pragma solidity ^0.4.17;

contract College{
    address[] public students;
    mapping(address => string) names;
    function createwallet(string name) public{
        address newwallet = new Wallet(msg.sender);
        students.push(newwallet);
        names[newwallet] = name;
    }
    
    function totalwallet() public view returns (address[]){
        return students;
    }
    function myname(address name) public view returns (string){
        return names[name];
    }

}

contract Wallet{
    
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
        score = (score + marks)/2;
    }
    function setscoreeval(uint marks) public{
        testevaluatingscore = (testevaluatingscore + marks)/2;
    }
    
    function presentscore() public view returns(uint){
        return score;
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
    address[] studentswallet;
    address examiner;
    string[] public Questionset;
    struct questionanswer{
        string question;
        string answer;
    }
    mapping(address => questionanswer[]) public exam;
    uint questioncount = 0;
    
    modifier restricted() {
        require(msg.sender == examiner);
        _;
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
                answer: ""
            });
            mytest.push(newquestion);
        }
        exam[walletaddress] = mytest;
    }
    
    function answermytest(address walletaddress,uint index,string answer) public {
        require(attende[walletaddress]);
        questionanswer[] storage mytest = exam[walletaddress];
        mytest[index].answer = answer;
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
    
    function sendresponse(address studentwallet,uint index) public view returns(string,string){
        return (exam[studentwallet][index].question , exam[studentwallet][index].answer);
    }
}
