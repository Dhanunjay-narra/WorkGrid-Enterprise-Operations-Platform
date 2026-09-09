export type SupportSurveysQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSurveysQueueStateMachine {
  private allowedTransitions: Record<SupportSurveysQueueState, SupportSurveysQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSurveysQueueState, to: SupportSurveysQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSurveysQueueState, to: SupportSurveysQueueState): SupportSurveysQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSurveysQueue: " + from + " -> " + to);
    }
    return to;
  }
}
