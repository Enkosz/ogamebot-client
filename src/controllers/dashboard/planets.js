
const endpointPage = '/';
const endpointView = 'pages/planets';

export const getPlanetsList = (req, res) => {
  return res.render(`${endpointView}/list`, {title: 'Planets List'});
};
