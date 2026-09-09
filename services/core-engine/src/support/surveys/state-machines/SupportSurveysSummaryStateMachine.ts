export type SupportSurveysSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSurveysSummaryStateMachine {
  private allowedTransitions: Record<SupportSurveysSummaryState, SupportSurveysSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSurveysSummaryState, to: SupportSurveysSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSurveysSummaryState, to: SupportSurveysSummaryState): SupportSurveysSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSurveysSummary: " + from + " -> " + to);
    }
    return to;
  }
}
