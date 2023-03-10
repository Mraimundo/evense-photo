import { css } from "styled-components";

const Variables = ({ theme }) => css`
  :root {
    --white: #fff;

    --gray-50: #f7f8fa;
    --gray-100: #e6e8eb;
    --gray-200: #afb2b1;
    --gray-500: #808080;
    --gray-800: #494d4b;

    --green-500: #04d361;
    --purple-300: #9f75ff;
    --purple-400: #9164fa;
    --purple-500: #8257e5;
    --purple-800: #6f48c9;
    --be-base-primary-dark: #ececf5;
    --be-base-primary-light: #f6f6fa;
    --be-base-primary: #fdfdfd;
    --be-base-secondary-dark: #000;
    --be-base-secondary-light: #192742;
    --be-base-secondary: #dadae4;
    --be-base-tertiary-light: #dae5df;
    --be-base-tertiary: #ede6f2;
    --be-bg-primary: #f4f4f4;
    --be-bg-secondary: #fff;
    --be-bg-grey: #4d4d4d;
    --be-bg-header: #8fea9d;
    --be-bg-session: #efefef;
    --be-bg-tertiary: #1a202b;
    --be-tertiary: #1a202b;
    --be-border-primary: #f4f4f4;
    --be-box-shadow-flat: none;
    --be-box-shadow-hover: 0 4px 8px rgba(0, 0, 0, 0.2);
    --be-box-shadow-modal: 0 14px 20px rgba(0, 0, 0, 0.1);
    --be-box-shadow-raised: 0 2px 4px rgba(0, 0, 0, 0.15);
    --be-box-shadow-spotlight: 0 6px 12px 0 rgba(0, 0, 0, 0.1);
    --be-brand-highlight-dark: #0f9946;
    --be-brand-green-light: #00d318;
    --be-brand-highlight-gradient: linear-gradient(
      101.88deg,
      #0f9946 5.28%,
      #13bf58 94.72%
    );
    --be-brand-highlight-light: #dae6df;
    --be-brand-highlight: #fbd710;
    --be-brand-primary-dark: #6500b2;
    --be-brand-primary-gradient: linear-gradient(
      101.88deg,
      #6500b2 5.28%,
      #8b00f2 94.72%
    );
    --be-brand-primary-light: #9e30f2;
    --be-brand-primary: #0538d7;
    --be-brand-primary_new: #0538d7;
    --be-brand-secondary-dark: #7c05b2;
    --be-brand-secondary-gradient: linear-gradient(
      101.88deg,
      #7c05b2 5.28%,
      #b008ff 94.72%
    );
    --be-brand-secondary-light: #c13bff;
    --be-brand-secondary: #0538d7;
    --be-brand-secondary_new: #0538d7;
    --be-brand-button: #f6d866;
    --be-elevation-flat: none;
    --be-elevation-hover: 1100;
    --be-elevation-modal: 1300;
    --be-elevation-raised: 1000;
    --be-elevation-spotlight: 1200;
    --be-feedback-error: #d40d12;
    --be-feedback-success: #068320;
    --be-feedback-warning: #dc9a19;
    --be-font-body1: normal 400 16px/24px none;
    --be-font-body2: normal 400 14px/17px none;
    --be-font-body3: normal 600 16px/24px none;
    --be-font-body4: normal 600 14px/17px none;
    --be-font-caption1: normal 400 12px/18px none;
    --be-font-caption2: normal 400 10px/15px none;
    --be-font-display1: normal 400 96px/144px none;
    --be-font-display2: normal 400 64px/96px none;
    --be-font-link1: normal 400 16px/24px none;
    --be-font-link2: normal 400 14px/17px none;
    --be-font-link3: normal 600 16px/24px none;
    --be-font-link4: normal 600 14px/17px none;
    --be-font-overline: normal 400 10px/15px none;
    --be-font-size-body1: 16px;
    --be-font-size-body2: 14px;
    --be-font-size-body3: 16px;
    --be-font-size-body4: 14px;
    --be-font-size-caption1: 12px;
    --be-font-size-caption2: 10px;
    --be-font-size-display1: 90px;
    --be-font-size-display2: 64px;
    --be-font-size-link1: 16px;
    --be-font-size-link2: 14px;
    --be-font-size-link3: 16px;
    --be-font-size-link4: 14px;
    --be-font-size-overline: 10px;
    --be-font-size-subtitle1: 18px;
    --be-font-size-subtitle2: 16px;
    --be-font-size-title1: 48px;
    --be-font-size-title2: 36px;
    --be-font-size-title3: 28px;
    --be-font-size-title4: 22px;
    --be-font-size-title5: 20px;
    --be-font-subtitle1: normal 600 18px/27px none;
    --be-font-subtitle2: normal 400 16px/24px none;
    --be-font-title1: normal 700 48px/72px;
    --be-font-title2: normal 700 36px/54px none;
    --be-font-title3: normal 700 28px/42px none;
    --be-font-title4: normal 700 22px/32px none;
    --be-font-weight-bold: 700;
    --be-font-weight-regular: 400;
    --be-font-weight-semibold: 600;
    --be-grid-column-desktop: 12;
    --be-grid-column-mobile: 4;
    --be-grid-column-tablet: 8;
    --be-grid-gutter-desktop: 24px;
    --be-grid-gutter-mobile: 16px;
    --be-grid-gutter-tablet: 24px;
    --be-grid-margin-desktop: 24px;
    --be-grid-margin-mobile: 16px;
    --be-grid-margin-tablet: 24px;
    --be-line-height-body1: 24px;
    --be-line-height-body2: 17px;
    --be-line-height-body3: 24px;
    --be-line-height-body4: 22px;
    --be-line-height-caption1: 18px;
    --be-line-height-caption2: 15px;
    --be-line-height-display1: 144px;
    --be-line-height-display2: 96px;
    --be-line-height-link1: 24px;
    --be-line-height-link2: 17px;
    --be-line-height-link3: 28px;
    --be-line-height-link4: 17px;
    --be-line-height-overline: 15px;
    --be-line-height-subtitle1: 27px;
    --be-line-height-subtitle2: 24px;
    --be-line-height-title1: 72px;
    --be-line-height-title2: 54px;
    --be-line-height-title3: 42px;
    --be-line-height-title4: 29px;
    --be-line-height-title5: 70px;
    --be-shape-circle: 50%;
    --be-shape-line: 0;
    --be-shape-oval: 40px;
    --be-shape-rounded: 4px;
    --be-shape-straight: 0;
    --be-size-lg: 1280px;
    --be-size-md: 600px;
    --be-size-sm: 360px;
    --be-size-xl: 1332px;
    --be-size-xs: 0;
    --be-border-radius-sm: 8px;
    --be-spacing-internal-01: 2px;
    --be-spacing-internal-02: 4px;
    --be-spacing-internal-03: 8px;
    --be-spacing-internal-04: 12px;
    --be-spacing-internal-05: 16px;
    --be-spacing-internal-06: 24px;
    --be-spacing-internal-07: 32px;
    --be-spacing-internal-08: 48px;
    --be-spacing-layout-01: 16px;
    --be-spacing-layout-02: 24px;
    --be-spacing-layout-03: 32px;
    --be-spacing-layout-04: 48px;
    --be-spacing-layout-05: 64px;
    --be-spacing-layout-06: 80px;
    --be-spacing-layout-07: 96px;
    --be-spacing-layout-08: 112px;
    --be-text-breadcrumb: #337ab7;
    --be-text-primary-dark: #192742;
    --be-text-primary-footer: #777;
    --be-text-primary-light: #777;
    --be-text-primary: #414141;
    --be-text-secondary-dark: #ececf5;
    --be-text-secondary-light: #f6f6fa;
    --be-text-secondary: #fff;
    --be-brand-tertiary: #0538d7;
  }

  .empresarial {
    --be-brand-green-light: #fbd84b;
    --be-text-secondary: #000;
    --be-brand-primary: #fbd84b;
  }
`;

export default Variables;
