import React, { useState, useEffect } from 'react';
import connection from '../aws/bd';

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    connection.query('SELECT * FROM mytable', function(err, results, fields) {
      if (err) throw err;
      setData(results);
    });
  }, []);

  return (
    <div>
      <ul>
        {data.map(row => (
          <li key={row.id}>{row.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;