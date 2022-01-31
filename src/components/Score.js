import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: var(--black);
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  z-index: 100;
`;

const Scoreboard = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  flex: 1 1 auto;
  color: var(--white);
  &.visitors {
    border-left: 1px solid #999;
  }
  li {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    list-style-type: none;
    flex: 1 1 auto;
    padding: 10px;
    &:last-child {
      font-weight: bold;
      font-size: 1.1rem;
      padding: 6px 10px 4px 0px;
      text-align: right;
    }
  }
  &.loading {
    li {
      font-size: 0.9rem;
      padding: 10px;
      text-align: center;
    }
  }
`;

export default function DisplayScore(props) {
  const [data, setData] = useState(null);
  // const showScore = props.show;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://random-data-api.com/api/code/random_code"
      );
      const newData = await response.json();
      setData(newData);
    };

    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (data) {
    return (
      <>
        {props.show !== false && (
          <Container>
            <Scoreboard className="home">
              <li>Los Angeles</li>
              <li>{`${data.id}`.substring(0, 2)}</li>
            </Scoreboard>
            <Scoreboard className="visitors">
              <li>Cincinnati</li>
              <li>{`${data.imei}`.substring(0, 2)}</li>
            </Scoreboard>
          </Container>
        )}
      </>
    );
  } else {
    return (
      <>
        <Container>
          <Scoreboard className="loading">
            <li>Loading</li>
          </Scoreboard>
        </Container>
      </>
    );
  }
}
