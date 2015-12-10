let config = {
  html: `
    <div class="foo">
      <p>
       <img alt="gulp" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png" width="60">
       <img alt="babel" src="https://raw.githubusercontent.com/babel/logo/master/babel.png" width="250">
       <img alt="browserify" src="http://browserify.org/images/wizard_hat_blue.png" width="150">
      </p>
    </div>
  `
};

export function initModule($container) {
  let element = document.createElement('div');
  element.innerHTML = config.html;

  $container.appendChild(element);
}
