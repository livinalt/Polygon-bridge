// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity 0.8.20;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MetaToken is ERC721A, Ownable {
    mapping(uint256 => string) private _prompts;
    mapping(uint256 => string) private _uris;

    constructor() ERC721A("MetaToken", "MTK") Ownable() {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://ipfs.filebase.io/ipfs/";
    }

    function safeMint(address to, uint256 quantity, string[] memory prompts, string[] memory uris) public onlyOwner {
        require(quantity == prompts.length, "Mismatched quantity and prompts lengths");
        require(quantity == uris.length, "Mismatched quantity and uris lengths");
        
        uint256 startTokenId = _nextTokenId();
        _safeMint(to, quantity); // Minting 'quantity' tokens

        for (uint256 i = 0; i < quantity; i++) {
            _prompts[startTokenId + i] = prompts[i];
            _uris[startTokenId + i] = uris[i];
        }
    }

    function promptDescription(uint256 tokenId) external view returns (string memory) {
        require(_exists(tokenId), "Token doesn't exist");
        return _prompts[tokenId];
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "Token doesn't exist");
        return _uris[tokenId];
    }
}
