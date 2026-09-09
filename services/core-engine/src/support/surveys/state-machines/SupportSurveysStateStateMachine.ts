export type SupportSurveysStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSurveysStateStateMachine {
  private allowedTransitions: Record<SupportSurveysStateState, SupportSurveysStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSurveysStateState, to: SupportSurveysStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSurveysStateState, to: SupportSurveysStateState): SupportSurveysStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSurveysState: " + from + " -> " + to);
    }
    return to;
  }
}
