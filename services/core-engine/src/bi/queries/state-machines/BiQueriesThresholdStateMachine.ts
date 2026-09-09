export type BiQueriesThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiQueriesThresholdStateMachine {
  private allowedTransitions: Record<BiQueriesThresholdState, BiQueriesThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiQueriesThresholdState, to: BiQueriesThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiQueriesThresholdState, to: BiQueriesThresholdState): BiQueriesThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiQueriesThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
