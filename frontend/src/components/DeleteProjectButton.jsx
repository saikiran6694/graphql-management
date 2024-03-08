import { useMutation } from "@apollo/client";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { GET_PROJECTS } from "../queries/projectQueries";
import { DELETE_PROJECT } from "../mutations/projectMutation";

const DeleteProjectButton = ({ id }) => {
  const navigate = useNavigate();
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id },
    onCompleted: () => {
      navigate("/");
    },
    refetchQueries: [{ query: GET_PROJECTS }],
  });
  return (
    <div className="d-flex mt-5 ms-auto">
      <button onClick={deleteProject} className="btn btn-danger m-2">
        <FaTrash className="icon" /> Delete Project
      </button>
    </div>
  );
};

export default DeleteProjectButton;
