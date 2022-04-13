import Loadable from "react-loadable";

function LoadingComponent() {
  return <div />;
}

const LoadableComponent = Loadable({
  loader: () => import("../components/home"),
  loading: LoadingComponent,
});

export default function Home() {
  return <LoadableComponent />;
}
