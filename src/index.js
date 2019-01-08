import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

const ErrorBox = ({ children }) => {
  return (
      <div className="warning">
        <div className="container">
          <i className="fas fa-exclamation-triangle"></i>
          <span>{children}</span>
        </div>
      </div>
  );
};




const FirstChildOnly = ({ children }) => {
  let onlyfirst = React.Children.toArray(children)[0];
  console.log(onlyfirst);
  return (
    <div className="a">
      {onlyfirst}
    </div>
  );
};

const LastChildOnly = ({ children }) => {
  let onlyLast =  React.Children.toArray(children)[children.length-1];
  return (
    <div className="b">
      {onlyLast}
    </div>
  );
};

const  Title = ({ children }) => {
  return (
    <h2>{children}</h2>
  );
};
Title.proptypes = {
  title: PropTypes.string
}

const Body = ({ children }) => {
  return (
    <h3>{children}</h3>
  );
};
Body.proptypes = {
  title: PropTypes.string
}

const  Footer2 = ({ children }) => {
  return (
    <button className="footer">
      {children}
    </button>
 
  )
};
Footer2.proptypes = {
  title: PropTypes.element
}



const Dialog = ({ children }) => {
  let arrChildren = React.Children.toArray(children);
  console.log(arrChildren);
  return (
    <div className="parent-body">
      {arrChildren[0]}
      <hr />
      {arrChildren[1]}
      <hr />
      <div className="footerD">
      {arrChildren[2]}
      </div>
  
    </div>
  );
};
Dialog.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ])
};







const Head = ({ number, children }) => {
   
    let arrChildren = React.Children.toArray(children);
    const calculated = () => {
      return arrChildren.slice(0, number)
    }

    const calculateLast = () => {
      return arrChildren.slice(-3);
    }

    return (
      <div>
        <ErrorBox>Something has gone wrong</ErrorBox>, 
        <FirstChildOnly >
          <h1>first Hello 1</h1>
          <h2>last Hello 2</h2>
        </FirstChildOnly>
        <LastChildOnly >
          <h1>first Hello 1</h1>
          <h2>last Hello 2</h2>
        </LastChildOnly>
        <div className="c">
            {calculated()}
        </div>
        <div className="d">
            {calculateLast()}
        </div>
        <Dialog>
          <Title>
            This is very important
          </Title>
          <Body>
            Here will be place some important text
          </Body>
          <Footer2>
            SUBMIT ALL
          </Footer2> 
  
        </Dialog>
      </div>
    );
  };




ReactDOM.render(

  
  <Head number={3}>
    <h2>num1</h2>
    <h2>num2</h2>
    <h2>num3</h2>
    <h2>num4</h2>
    <h2>num5</h2>
    <h2>num6</h2>
    <h2>num7</h2>
  </Head>,
  document.getElementById('root')
);


