import { useRouteError } from 'react-router-dom';
import { MainNavigation } from '../components/MainNavigation';
import { PageContent } from '../components/PageContent';

export function ErrorPage() {
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = 'Not Found!';
    message = 'Could not find the page you are looking for.';
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
