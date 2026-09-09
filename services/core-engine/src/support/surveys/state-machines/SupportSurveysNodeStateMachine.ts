export type SupportSurveysNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSurveysNodeStateMachine {
  private allowedTransitions: Record<SupportSurveysNodeState, SupportSurveysNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSurveysNodeState, to: SupportSurveysNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSurveysNodeState, to: SupportSurveysNodeState): SupportSurveysNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSurveysNode: " + from + " -> " + to);
    }
    return to;
  }
}
