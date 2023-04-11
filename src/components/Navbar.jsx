import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, useNavigate } from "react-router-dom";
import Search from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/userRedux";
import axios from "axios";
import { addProduct } from "../redux/cartRedux";

const Container = styled.div`
  height: 60px;
  margin-bottom: 20px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  let navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);
  const cart = useSelector((state) => state.cart);
  console.log("cart", cart);
  const dispatch = useDispatch();
  const handleLogOut = (params) => {
    navigate("/login");
    dispatch(logOut());
  };

  return (
    <Container>
      <Wrapper>
        {/* left */}
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        {/* center */}
        <Center onClick={() => navigate("/")}>
          <Logo>SHOPX</Logo>
        </Center>
        {/* right */}
        <Right>
          <MenuItem>
            {user.username[0].toUpperCase() + user.username.slice(1)}
          </MenuItem>
          {user.isAdmin && (
            <MenuItem onClick={() => navigate("/admin/productlist")}>
              PRODUCTS
            </MenuItem>
          )}
          {user ? (
            <MenuItem onClick={handleLogOut}>LOGOUT</MenuItem>
          ) : (
            <>
              <MenuItem onClick={() => navigate("/register")}>
                REGISTER
              </MenuItem>
              <MenuItem onClick={() => navigate("/login")}>SIGN IN</MenuItem>
            </>
          )}

          <MenuItem onClick={() => navigate("/cart")}>
            <Badge badgeContent={cart.products.length} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
