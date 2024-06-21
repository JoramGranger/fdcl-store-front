import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import styled from 'styled-components';

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  flex: 1;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  margin: 20px;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 1;
  transition: all 0.5s ease;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #fff1f1;
    transform: scale(1.1);
  }
`;

const Extra = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  z-index: 2;
`;

const Price = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Tag = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #f50057;
  color: white;
  padding: 5px 10px;
  font-weight: bold;
  border-radius: 5px;
  text-transform: uppercase;
  z-index: 2;
  opacity: 1;
`;

const ProductName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Tile = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
      <Tag>NEW</Tag>
      <Extra>
        <ProductName>{item.name}</ProductName>
        <Price>{item.price} UGX</Price>
      </Extra>
    </Container>
  );
};

export default Tile;
