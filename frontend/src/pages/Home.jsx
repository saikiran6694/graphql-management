import React from "react";
import AddClientModal from "../components/AddClientModal";
import Clients from "../components/Clients";
import Projects from "../components/Projects";
import AddProjectModal from "../components/AddProjectModal";

const Home = () => {
  return (
    <>
      <div className="d-flex mb-4 gap-4">
        <AddClientModal />
        <AddProjectModal />
      </div>
      <Projects />
      <Clients />
    </>
  );
};

export default Home;
