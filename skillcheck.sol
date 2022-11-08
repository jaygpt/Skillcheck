// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract SKILLCHECK is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("SKILLCHECK", "skc") {}
      mapping (string=>address) public student;
      mapping (address=>string) public appliedcourse; 
      mapping (address=>string) public testurl;
      mapping (address=>bool) public testdone;
      mapping (address=>uint) public testmarks;
    address[] public Teachers=[0x5B38Da6a701c568545dCfcB03FcB875f56beddC4,0x5B38Da6a701c568545dCfcB03FcB875f56beddC4,0x5B38Da6a701c568545dCfcB03FcB875f56beddC4];
    //replace these with the address of the teachers
    string[] public courses=["javascript","java","rust"];
    //change according your need
    function safeMint(address to, string memory uri) internal {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
 
    function givetest(string memory name,string memory course) public {
    require(testdone[msg.sender]==false,"Test already taken");
     student[name]=msg.sender;
     appliedcourse[msg.sender]=course;
     if(keccak256(abi.encodePacked(course)) ==keccak256(abi.encodePacked("javascript"))){
     testdone[msg.sender]=false;
     string memory testur=string(abi.encodePacked("https://yourbaseurl/",course,"/",name,"/",msg.sender));
     //like https://skilltest.com/javascript/pranjal/0x65564684684dsjbfedy
     testurl[msg.sender]=testur;

     
     }
     else if(keccak256(abi.encodePacked(course)) ==keccak256(abi.encodePacked("java"))){
   student[name]=msg.sender;
     appliedcourse[msg.sender]=course;
     if(keccak256(abi.encodePacked(course)) ==keccak256(abi.encodePacked("java"))){
     testdone[msg.sender]=false;
     string memory testur=string(abi.encodePacked("https://yourbaseurl/",course,"/",name,"/",msg.sender));
     //like https://skilltest.com/javascript/pranjal/0x65564684684dsjbfedy
     testurl[msg.sender]=testur;

     
     }
     else if(keccak256(abi.encodePacked(course)) ==keccak256(abi.encodePacked("rust"))){
   student[name]=msg.sender;
     appliedcourse[msg.sender]=course;
     if(keccak256(abi.encodePacked(course)) ==keccak256(abi.encodePacked("rust"))){
     testdone[msg.sender]=false;
     string memory testur=string(abi.encodePacked("https://yourbaseurl/",course,"/",name,"/",msg.sender));
     //like https://skilltest.com/javascript/pranjal/0x65564684684dsjbfedy
     testurl[msg.sender]=testur;

     
     }
     else{
         revert();
     }
    }
     }
}
function teachersign(address _student,address course,uint marks) external{
require(msg.sender==Teachers[0]||msg.sender==Teachers[1]||msg.sender==Teachers[2],"you are not a authorised");
testmarks[_student]=marks;
string memory testur=string(abi.encodePacked("https://yourbaseurl/",course,"/",_student));
safeMint(_student,testur);
testdone[_student]=true;

}
}
