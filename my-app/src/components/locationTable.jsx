import React from "react";

function Table(props) {
  const array = props.array;

  return (
    <table>
      <thead>
        <tr>
          <th>Adresse lieu</th>
          <th>Annee tournage</th>
          <th>ARDT lieu</th>
          <th>Coord x</th>
          <th>Coord y</th>
          <th>Date debut</th>
          <th>Date fin</th>
          <th>Geo point 2d</th>
          <th>Geo shape</th>
          <th>Geolocation</th>
          <th>Id lieu</th>
          <th>Nom producteur</th>
          <th>Nom realisateur</th>
          <th>Nom tournage</th>
          <th>Type tournage</th>
          <th>_id</th>
        </tr>
      </thead>
      <tbody>
        {array.map((item) => (
          <tr key={item._id}>
            <td>{item.adresse_lieu}</td>
            <td>{item.annee_tournage}</td>
            <td>{item.ardt_lieu}</td>
            <td>{item.coord_x}</td>
            <td>{item.coord_y}</td>
            <td>{item.date_debut}</td>
            <td>{item.date_fin}</td>
            <td>{JSON.stringify(item.geo_point_2d)}</td>
            <td>{JSON.stringify(item.geo_shape)}</td>
            <td>{JSON.stringify(item.geolocation)}</td>
            <td>{item.id_lieu}</td>
            <td>{item.nom_producteur}</td>
            <td>{item.nom_realisateur}</td>
            <td>{item.nom_tournage}</td>
            <td>{item.type_tournage}</td>
            <td>{item._id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;