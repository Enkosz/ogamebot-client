
const endpointPage = '/';
const endpointView = 'pages';

export const getHomepage = (req, res) => {
  return res.render(`pages/home`, {title: 'Resources Overview'});
};
