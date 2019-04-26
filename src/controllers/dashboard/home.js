
const endpointPage = '/';
const endpointView = 'pages';

export const getHomepage = (req, res) => {
  return res.render(`${endpointView}/home`, {title: 'Resources Overview'});
};
