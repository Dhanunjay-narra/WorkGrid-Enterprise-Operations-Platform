export type BiQueriesQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiQueriesQueueStateMachine {
  private allowedTransitions: Record<BiQueriesQueueState, BiQueriesQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiQueriesQueueState, to: BiQueriesQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiQueriesQueueState, to: BiQueriesQueueState): BiQueriesQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiQueriesQueue: " + from + " -> " + to);
    }
    return to;
  }
}
