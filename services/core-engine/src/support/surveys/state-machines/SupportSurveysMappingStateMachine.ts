export type SupportSurveysMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSurveysMappingStateMachine {
  private allowedTransitions: Record<SupportSurveysMappingState, SupportSurveysMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSurveysMappingState, to: SupportSurveysMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSurveysMappingState, to: SupportSurveysMappingState): SupportSurveysMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSurveysMapping: " + from + " -> " + to);
    }
    return to;
  }
}
