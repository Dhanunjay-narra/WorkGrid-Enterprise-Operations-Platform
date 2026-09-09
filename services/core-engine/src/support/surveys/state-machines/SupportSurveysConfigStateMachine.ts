export type SupportSurveysConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSurveysConfigStateMachine {
  private allowedTransitions: Record<SupportSurveysConfigState, SupportSurveysConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSurveysConfigState, to: SupportSurveysConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSurveysConfigState, to: SupportSurveysConfigState): SupportSurveysConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSurveysConfig: " + from + " -> " + to);
    }
    return to;
  }
}
