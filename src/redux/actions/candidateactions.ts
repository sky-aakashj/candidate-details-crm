import {
  FETCH_CANDIDATES_REQUEST,
  FETCH_CANDIDATES_SUCCESS,
  FETCH_CANDIDATES_FAILURE,
  SET_IS_EDITING,
} from "../actionTypes";
import { mockCandidateState } from "../../types/candidate";
import { mockFetchCandidate } from "../../services/mockData/mockCandidateApi";

export const fetchCondidateRequest = () => ({
  type: FETCH_CANDIDATES_REQUEST,
});

export const fetchCondidateSuccess = (
  candidateDetails: mockCandidateState
) => ({
  type: FETCH_CANDIDATES_SUCCESS,
  payload: candidateDetails,
});

export const fetchCondidateFailure = (error: string) => ({
  type: FETCH_CANDIDATES_FAILURE,
  payload: error,
});

export const setIsEditing = () => ({
  type: SET_IS_EDITING,
});

export const fetchCandidate = (candidateId: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return async (dispatch: any) => {
    dispatch(fetchCondidateRequest());
    try {
      const candidateDetails: mockCandidateState = (await mockFetchCandidate(
        candidateId
      )) as mockCandidateState;
      dispatch(fetchCondidateSuccess(candidateDetails));
    } catch (error) {
      const errorMessage =
        typeof error === "object" && error !== null && "message" in error
          ? (error as { message: string }).message
          : String(error);
      dispatch(fetchCondidateFailure(errorMessage));
    }
  };
};
