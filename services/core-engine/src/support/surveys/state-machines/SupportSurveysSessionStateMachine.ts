export type SupportSurveysSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSurveysSessionStateMachine {
  private allowedTransitions: Record<SupportSurveysSessionState, SupportSurveysSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSurveysSessionState, to: SupportSurveysSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSurveysSessionState, to: SupportSurveysSessionState): SupportSurveysSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSurveysSession: " + from + " -> " + to);
    }
    return to;
  }
}
