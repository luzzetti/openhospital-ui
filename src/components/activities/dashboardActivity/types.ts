import { TUserCredentials } from "../../../state/main/types";

export interface IOwnProps {
  newPatientRoute: string;
  searchPatientRoute: string;
}

export interface IStateProps {
  userCredentials: TUserCredentials;
}

export type TProps = IOwnProps & IStateProps;

export type TRouteActionState = "IDLE" | "TO_NEW_PATIENT" | "TO_SEARCH_PATIENT";
