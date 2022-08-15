import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import "./App.css";
import { publishRouter } from "~/router";
import { DefaultLayout } from "~/component/Layout/DefaultLayout";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publishRouter.map((route) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout === null) {
              Layout = Fragment;
            } else if (route.layout) {
              Layout = route.layout;
            }
            return (
              <Route
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
