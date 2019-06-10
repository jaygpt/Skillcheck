pragma solidity ^0.4.17;

contract College {
    address[] public students;
    
    function createwallet() public{
        address newwallet = new Wallet(msg.sender);
        students.push(newwallet);
        
    }
    
    function totalwallet() public view returns (address[]){
        return students;
    }
}

contract Wallet {
    
    address public student;
    uint score;
    address admin;
    
    function Wallet(address creator) public{
        student = creator;
    }
    
    function Setadmin(address examiner) public{
        admin = examiner;
    }
    
    function setscore(uint marks) public{
        require(msg.sender == admin);
        require(admin != student);
        score = (score + marks)/2;
    }
    
    function presentscore() public view returns(uint){
        return score;
    }
}

contract createTest {
    mapping(address => bool) public attende;
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
    function examineradd() public view returns(address){
        return examiner;
    }
    function createTest() public{
        examiner = msg.sender;
    }

    function addQuestion(string question) public restricted{
        Questionset.push(question);
        questioncount++;
    }
    
    function enrollintest(address walletaddress) public {
        
        attende[walletaddress] = true;
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
}


