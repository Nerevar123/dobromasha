import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import styled from 'styled-components';

export const ErrorPage = () => {
  const error = useRouteError() as Error;
  console.error(error);

  const Root = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  `;

  return (
    <Root>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{isRouteErrorResponse(error) && (error.statusText || error.message)}</i>
      </p>
    </Root>
  );
};
