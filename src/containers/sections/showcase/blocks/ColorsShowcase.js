import React from 'react';
import css from './colorsShowcase.css';

function ColorsShowcase () {
  return (
    <div>
      Colors:
      <div className={css.color}>
        <div className={css.black} />
        black
      </div>
      <div className={css.color}>
        <div className={css.lighterBlack} />
        lighterBlack
      </div>
      <div className={css.color}>
        <div className={css.dark} />
        dark
      </div>
      <div className={css.color}>
        <div className={css.gray} />
        gray
      </div>
      <div className={css.color}>
        <div className={css.grayHover} />
        grayHover
      </div>
      <div className={css.color}>
        <div className={css.lightGray} />
        lightGray
      </div>
      <div className={css.color}>
        <div className={css.lightHover} />
        lightHover
      </div>
      <div className={css.color}>
        <div className={css.lightGrayBorder} />
        lightGrayBorder
      </div>
      <div className={css.color}>
        <div className={css.white} />
        white
      </div>
      <div className={css.color}>
        <div className={css.orange} />
        orange
      </div>
      <div className={css.color}>
        <div className={css.blue} />
        blue
      </div>
      <div className={css.color}>
        <div className={css.buttonHover} />
        buttonHover
      </div>
      <div className={css.color}>
        <div className={css.red} />
        red
      </div>
      <div className={css.color}>
        <div className={css.green} />
        green
      </div>
    </div>
  );
}

export default ColorsShowcase;
