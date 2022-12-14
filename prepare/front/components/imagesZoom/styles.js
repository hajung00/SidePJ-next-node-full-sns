import styled, { createGlobalStyle } from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';

// Global style로 className지정된 slick에 style을 줄 수 있음.
export const Global = createGlobalStyle`
    .slick-slide{
        display: inline-block;
    }
    .ant-card-cover{
        transform : none !important;
    }
`;
export const Overlay = styled.div`
  position: fixed;
  z-index: 5000;
  top: o;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Header = styled.header`
  height: 44px;
  background: white;
  position: relative;
  padding: 0;
  text-align: center;
  color: white;
  font-size: 1rem;
  & h1 {
    margin: 0;
    font-size: 1.2rem;
    color: black;
    line-height: 44px;
  }
`;

export const CloseBtn = styled(CloseOutlined)`
  position: absolute;
  right: 0;
  top: 0;
  padding: 15px;
  line-height: 14px;
  cursor: pointer;
  color: black;
`;

export const SlickWrapper = styled.div`
  height: calc(100%-44px);
  background: #090909;
`;

export const ImgWrapper = styled.div`
  padding: 32px;
  text-align: center;

  & img {
    height: 77vh;
    margin: 0 auto;
    max-height: 750px;
  }
`;

export const Indicator = styled.div`
  text-align: center;

  & > div {
    width: 75px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    background: #313131;
    display: inline-block;
    text-align: center;
    color: white;
    font-size: 15px;
  }
`;
