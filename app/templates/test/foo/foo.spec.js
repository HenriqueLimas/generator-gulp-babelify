import * as foo from '../../public/src/foo/foo.js';

describe('First test', () => {
  it('append a child into container.', () => {
    let $container = document.createElement('div');

    expect($container.childNodes.length).toBe(0);

    foo.initModule($container);

    expect($container.childNodes.length).toBe(1);
  });
});