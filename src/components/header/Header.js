import React from 'react'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/CartIcon'
import CartDropDown from '../cartDropDown/CartDropDown'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user-selectors'
import { selectCartHidden } from '../../redux/cart/cart-selectors'
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './Headerstyles'
import { signOutStart } from '../../redux/user/user-action'

const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>
          SHOP
        </OptionLink>
        <OptionLink to='/shop'>
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      { hidden ? null : (<CartDropDown />)}
    </HeaderContainer>
  );

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });
// const mapStateToProps = ({user : { currentUser }, cart : { hidden }}) => ({
//     currentUser,
//     hidden
//   });
// const mapStateToProps = ({state}) => ({
//     currentUser: state.user.currentUser
//   });
const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

  
export default connect(mapStateToProps, mapDispatchToProps)(Header);