const normalizeEdit = (dataFromServer) => {
  return {
    title: dataFromServer.title,
    subtitle: dataFromServer.subtitle,
    description: dataFromServer.description,
    phone: dataFromServer.phone,
    email: dataFromServer.email,
    web: dataFromServer.web,
    address: dataFromServer.address,
    state: dataFromServer.address.state,
    country: dataFromServer.address.country,
    city: dataFromServer.address.city,
    street: dataFromServer.address.street,
    houseNumber: dataFromServer.address.houseNumber,
    zip: dataFromServer.address.zip,
    _id: dataFromServer.address._id,
    image: {
      url: dataFromServer.image.url,
      alt: dataFromServer.image.alt,
    },
  };
};

export default normalizeEdit;
// export { fromServer };
