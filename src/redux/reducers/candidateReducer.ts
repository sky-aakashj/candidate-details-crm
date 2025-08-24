import {
  FETCH_CANDIDATES_REQUEST,
  FETCH_CANDIDATES_SUCCESS,
  FETCH_CANDIDATES_FAILURE,
  SET_IS_EDITING,
} from "../actionTypes";
import type {
  Candidate,
  AssignedJob,
  AllTabsDataObj,
  mockCandidateState,
} from "../../types/candidate";

export interface CandidateState {
  candidate: Candidate | null;
  assignedJobs: AssignedJob[];
  allTabsData: AllTabsDataObj[];
  isEditing: boolean;
  loading: boolean;
  error: string | null;
}
const initialState: CandidateState = {
  candidate: null, // Original value from API
  assignedJobs: [],
  allTabsData: [],
  loading: false,
  error: null,
  isEditing: false,
};

interface FetchCandidatesRequestAction {
  type: typeof FETCH_CANDIDATES_REQUEST;
}

interface FetchCandidatesSuccessAction {
  type: typeof FETCH_CANDIDATES_SUCCESS;
  payload: mockCandidateState;
}

interface FetchCandidatesFailureAction {
  type: typeof FETCH_CANDIDATES_FAILURE;
  payload: string;
}

interface SetIsEditingAction {
  type: typeof SET_IS_EDITING;
}

type CandidateActionTypes =
  | FetchCandidatesRequestAction
  | FetchCandidatesSuccessAction
  | FetchCandidatesFailureAction
  | SetIsEditingAction;

export default function candidateReducer(
  state: CandidateState = initialState,
  action: CandidateActionTypes
): CandidateState {
  switch (action.type) {
    case FETCH_CANDIDATES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_CANDIDATES_SUCCESS:
      return {
        ...state,
        candidate: action.payload.candidate,
        assignedJobs: action.payload.assignedJobs,
        allTabsData: action.payload.allTabsData,
        loading: false,
      };

    case FETCH_CANDIDATES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SET_IS_EDITING:
      return {
        ...state,
        isEditing: !state.isEditing,
      };

    default:
      return state;
  }
}
