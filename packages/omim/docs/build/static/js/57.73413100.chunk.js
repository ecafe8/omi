webpackJsonp([57],{105:function(n,e){n.exports="## Bottom Nav\n\n\u5e95\u90e8\u5bfc\u822a\u680f\n\n## \u4f7f\u7528\n\n```html\n<m-bottom-nav selected-color='red' id='myNav' items=\"[\n    { icon: 'favorite', label: 'Favorites', selected: true },\n    { icon: 'location_on', label: 'Nearby' },\n    { icon: 'restore', label: 'Recents' }\n  ]\">\n</m-bottom-nav>\n\n<script>\n  document.querySelector('#myNav').addEventListener('change', function (evt) {\n    console.log(evt.detail)\n  })\n<\/script>\n```\n\n\u5176\u4e2d icon \u4e5f\u652f\u6301 svg\uff1a\n\n```jsx\n{ \n  icon:{ \n    path : 'M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z'\n  }, \n  label: 'Arrow' \n}\n```\n\n\u5177\u4f53\u7684\u914d\u7f6e\u53ef\u4ee5\u53c2\u8003 m-icon\u3002\n\n## API\n\n### Props\n\n```jsx\n{\n  selectedColor?: string,\n  items: array\n}\n```\n\n\n"}});
//# sourceMappingURL=57.73413100.chunk.js.map