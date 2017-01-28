// import routes from './routes.js'
class MenuItem extends React.Component{
  render() {
    var pageName = this.props.pageName;
    var link = 'www.google.com';//routes.pageName;
    var handleClick = this.props.handleClick;
    return (
      <li className="menu_li">
        <a href={link}> {pageName} </a>
      </li>
    );
  }
}
export default MenuItem;