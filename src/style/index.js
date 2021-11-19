import styled, { css } from 'styled-components';

const font = {
  noto: `'Noto Sans KR', sans-serif`,
  notoSf: `'Noto Serif KR', serif`,
};

const color = {
  info: '#88E0EF',
  dark: '#161E54',
  danger: '#FF5151',
  secondary: '#FF9B6A',
  light: '#f7f7f7',
  black: '#222',
  success: '#34BE82',
  primary: '#396EB0',
};

const size = {
  xl: '1399px',
  lg: '1199px',
  md: '991px',
  sm: '767px',
  xs: '575px',
};

const media = {
  xl: ` (max-width: ${size.xl})`,
  lg: ` (max-width: ${size.lg})`,
  md: ` (max-width: ${size.md})`,
  sm: ` (max-width: ${size.sm})`,
  xs: ` (max-width: ${size.xs})`,
};

const flex = (h = 'flex-start', v = 'stretch', w = 'nowrap') => {
  return css`
    display: flex;
    flex-wrap: ${w};
    justify-content: ${h};
    align-items: ${v};
  `;
};

export { styled, font, color, size, media, flex };
