const normalizeCreate = (dataFromServer) => {
  return {
    title: dataFromServer.title,
    subtitle: dataFromServer.subtitle,
    description: dataFromServer.description,
    phone: dataFromServer.phone,
    email: dataFromServer.email,
    web: dataFromServer.web,
    address: {
      state: dataFromServer.state,
      country: dataFromServer.country,
      city: dataFromServer.city,
      street: dataFromServer.street,
      houseNumber: dataFromServer.houseNumber,
      zip: dataFromServer.zip,
    },
    image: {
      url: dataFromServer.image.url,
      alt: dataFromServer.image.alt,
    },
  };
};
export default normalizeCreate;
