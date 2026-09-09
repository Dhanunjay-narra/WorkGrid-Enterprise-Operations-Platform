export type SupportSurveysPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSurveysPolicyStateMachine {
  private allowedTransitions: Record<SupportSurveysPolicyState, SupportSurveysPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSurveysPolicyState, to: SupportSurveysPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSurveysPolicyState, to: SupportSurveysPolicyState): SupportSurveysPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSurveysPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
