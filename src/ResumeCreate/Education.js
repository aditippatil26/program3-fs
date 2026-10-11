
import React from "react";

class EdTable extends React.Component {
  render() {
    const education = [
      {
        id: 1,
        name: "PRESENTATION GIRLS' HIGH SCHOOL, DHARWAD",
        place: "Dharwad",
        stddeg: "10th",
        grade: "A"
      },
      {
        id: 2,
        name: "JSS SMI UG & PG STUDIES, VIDYAGIRI",
        place: "Dharwad",
        stddeg: "Undergraduation",
        grade: "8.98"
      }
    ];

    const eddetails = education.map((educ) => (
      <EdRow
        key={educ.id}
        id={educ.id}
        name={educ.name}
        place={educ.place}
        stddeg={educ.stddeg}
        grade={educ.grade}
      />
    ));

    return (
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>place</th>
            <th>education</th>
            <th>grade</th>
          </tr>
        </thead>
        <tbody>
          {eddetails}
        </tbody>
      </table>
    );
  }
}

class EdRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.place}</td>
        <td>{this.props.stddeg}</td>
        <td>{this.props.grade}</td>
      </tr>
    );
  }
}

class Education extends React.Component {
  render() {
    return (
      <section>
        <EdTable />
      </section>
    );
  }
}

export default Education;
