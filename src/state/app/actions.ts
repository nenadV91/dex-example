import { createAction } from "@reduxjs/toolkit";
import { ApplicationModal } from "./types";

export const setOpenModal = createAction<ApplicationModal | null>(
  "app/setOpenModal"
);
