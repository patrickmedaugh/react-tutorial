var LikeArticle = React.createClass({
  render: function() {
    if (this.state.isLiked) {
      return React.createElement('div', {onClick: this.handleClick}, "Unlike this article")
    } else {
      return React.createElement('div', {onClick: this.handleClick}, "Like this article")
    }
  },
  getInitialState: function() {
    return {isLiked: this.props.initialIsLiked}
  },
  handleClick: function() {
    this.setState({isLiked: !this.state.isLiked});
  }
});

$(document).ready(function() {
  $(".like-article").each(function(index, element) {
    var props = {
      initialIsLiked: $(element).data('initial-is-liked')
    }
    React.render(
      React.createElement(LikeArticle, props),
      element
    )
  });
});
