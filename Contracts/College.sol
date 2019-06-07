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
