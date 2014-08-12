import DS from 'ember-data';

var Post = DS.Model.extend({
  title: DS.attr(),
  body: DS.attr()  
});

Post.reopenClass({
  FIXTURES: [{
    id: 1,
    title: 'Post 1',
    body: 'Lectus in pellentesque lorem. Phasellus turpis, auctor nascetur, lorem est enim adipiscing, quis. Integer non pulvinar turpis dis? Duis hac, placerat est nisi porttitor. Dapibus! Amet ridiculus placerat, adipiscing? Nisi enim vel, in turpis porttitor cras a turpis pulvinar dolor. Placerat cursus, eros cras in risus sed vel, sit auctor a ultrices. Enim a, pellentesque tincidunt et rhoncus dis turpis ultrices dapibus? Et eros hac porta! Et mauris tempor nisi ridiculus placerat, turpis, porta et natoque non mus cursus amet ut enim velit magna. Elementum vel auctor in? Cursus odio rhoncus tincidunt a ut arcu cras. Pid adipiscing mattis, tincidunt cursus placerat? Adipiscing tincidunt lorem! Cum ultricies pid, augue quis! Sed. Mid, ac mid, magna dignissim! Aliquet aenean ac in.'
  }, {
    id: 2,
    title: 'Post 2',
    body: 'Porttitor facilisis ac aenean amet cum a, nunc vel magnis nascetur lectus? Placerat enim placerat. Enim turpis magna tincidunt. Odio pid ac adipiscing. Sagittis integer nunc amet vel a est eu? Cursus. Dictumst scelerisque nascetur et sed cras mus eu a? Dignissim placerat tincidunt. In lectus vel. Dolor? Ultricies, sed nisi, urna? Sagittis sociis. Penatibus! Nascetur pellentesque nec nec! Turpis dis, eros nisi integer duis risus vel purus aliquet! Duis velit, facilisis elit placerat ac mid elementum. Lacus tortor dignissim aliquet aliquet tortor lundium scelerisque tincidunt, enim vel dis platea in magna duis mauris vel, porttitor placerat ut urna integer tristique eu mid cursus. Magna odio integer! Sed lacus. Vel tortor, porttitor a. In, rhoncus? Et dapibus enim sit.'
  }]
});

export default Post;