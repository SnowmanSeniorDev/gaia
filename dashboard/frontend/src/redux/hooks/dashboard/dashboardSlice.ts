import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Configuration, {
  ConfigurationFormat,
} from "configuration/Configuration";
import { Module } from "forms/types/FormFieldProps";
import type { RootState } from "redux/store";

// Define a type for the slice state
interface DashboardState {
  module: Module;
  configuration: Configuration | Object | undefined;
  format: ConfigurationFormat;
  currentSection: number;
}

// Define the initial state using that type
const initialState: DashboardState = {
  module: Module.HUB,
  configuration: undefined,
  format: ConfigurationFormat.TOML,
  currentSection: 0,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setModule: (state, action: PayloadAction<Module>) => {
      state.module = action.payload;
    },
    setConfiguration: (state, action: PayloadAction<any>) => {
      if (action.payload) {
        state.configuration = Object.assign(
          action.payload,
          state.configuration
        );
      } else {
        state.configuration = undefined;
      }
    },
    setFileFormat: (state, action: PayloadAction<ConfigurationFormat>) => {
      state.format = action.payload;
    },
    setCurrentSection: (state, action: PayloadAction<number>) => {
      state.currentSection += action.payload;
    },
  },
});

export const { setModule, setConfiguration, setFileFormat, setCurrentSection } =
  dashboardSlice.actions;

export const selectModule = (state: RootState) => state.dashboard.module;
export const selectConfiguration = (state: RootState) =>
  state.dashboard.configuration;

export default dashboardSlice.reducer;
