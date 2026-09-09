export type SupportSurveysThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSurveysThresholdStateMachine {
  private allowedTransitions: Record<SupportSurveysThresholdState, SupportSurveysThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSurveysThresholdState, to: SupportSurveysThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSurveysThresholdState, to: SupportSurveysThresholdState): SupportSurveysThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSurveysThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
