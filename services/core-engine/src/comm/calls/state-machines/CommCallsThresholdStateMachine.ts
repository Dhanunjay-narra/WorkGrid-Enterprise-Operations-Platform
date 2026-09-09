export type CommCallsThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommCallsThresholdStateMachine {
  private allowedTransitions: Record<CommCallsThresholdState, CommCallsThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommCallsThresholdState, to: CommCallsThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommCallsThresholdState, to: CommCallsThresholdState): CommCallsThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommCallsThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
