import "./index.css";

const Table = (props) => {
  return (
    <div className="fee-cont">
      <h1 className="fee-heading">Fee Structure</h1>
      <hr />

      <table className="Table">
        <tr id="header">
          <th>Class</th>
          <th>Fee</th>
        </tr>
        <tr>
          <td>class-X</td>
          <td>5000/-</td>
        </tr>
        <tr>
          <td>class-IX</td>
          <td>5000/-</td>
        </tr>
        <tr>
          <td>class-VIII</td>
          <td>5000/-</td>
        </tr>
        <tr>
          <td>class-VII</td>
          <td>5000/-</td>
        </tr>
        <tr>
          <td>class-VI</td>
          <td>5000/-</td>
        </tr>

        <tr>
          <td>class-V</td>
          <td>5000/-</td>
        </tr>
        <tr>
          <td>class-IV</td>
          <td>5000/-</td>
        </tr>
        <tr>
          <td>class-III</td>
          <td>5000/-</td>
        </tr>
        <tr>
          <td>class-II</td>
          <td>5000/-</td>
        </tr>
        <tr>
          <td>class-I</td>
          <td>5000/-</td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
