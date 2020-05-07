pragma solidity ^0.6.0;

import "@hq20/contracts/contracts/access/AuthorizedAccess.sol";
import "@hq20/contracts/contracts/math/DecimalMath.sol";
import "@openzeppelin/contracts/math/Math.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./interfaces/IPot.sol";
import "./interfaces/IVat.sol";
import "./Constants.sol";


///@dev yDai is a yToken targeting Dai
contract YDai is AuthorizedAccess, ERC20, Constants  {
    using DecimalMath for uint256;
    using DecimalMath for uint8;

    event Matured(uint256 rate, uint256 chi);

    IVat internal _vat;
    IPot internal _pot; // Can we get this from Chai.sol?

    bool internal _isMature;
    uint256 internal _maturity;
    uint256 internal _chi;
    uint256 internal _rate;

    constructor(
        string memory name,
        string memory symbol,
        address vat_,
        address pot_,
        uint256 maturity_
    ) public AuthorizedAccess() ERC20(name, symbol) {
        _vat = IVat(vat_);
        _pot = IPot(pot_);
        _maturity = maturity_;
    }

    /// @dev Whether the yDai has matured or not
    function isMature() public returns(bool){
        return _isMature;
    }

    /// @dev Programmed time for yDai maturity
    function maturity() public returns(uint256){
        return _maturity;
    }
    
    /// @dev accumulator (for dsr) at maturity in RAY units
    function chi() public returns(uint256){
        return _chi;
    }
    
    /// @dev accumulator (for stability fee) at maturity in RAY units
    function rate() public returns(uint256){
        return _rate;
    }

    /// @dev Mature yDai and capture maturity data
    function mature() public {
        require(
            // solium-disable-next-line security/no-block-members
            now > _maturity,
            "YDai: Too early to mature"
        );
        (, _rate,,,) = _vat.ilks("ETH-A"); // Retrieve the MakerDAO DSR
        _rate = Math.max(_rate, RAY.unit()); // Floor it at 1.0
        _chi = (now > _pot.rho()) ? _pot.drip() : _pot.chi();
        _isMature = true;
        emit Matured(_rate, _chi);
    }

    /// @dev Mint yDai. Only callable by Controller contracts.
    function mint(address to, uint256 yDai) public onlyAuthorized("YDai: Not Authorized") {
        _mint(to, yDai);
    }

    /// @dev Burn yDai. Only callable by Controller contracts.
    function burn(address from, uint256 yDai) public onlyAuthorized("YDai: Not Authorized") {
        _burn(from, yDai);
    }
}