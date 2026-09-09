export type BiQueriesNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiQueriesNodeStateMachine {
  private allowedTransitions: Record<BiQueriesNodeState, BiQueriesNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiQueriesNodeState, to: BiQueriesNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiQueriesNodeState, to: BiQueriesNodeState): BiQueriesNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiQueriesNode: " + from + " -> " + to);
    }
    return to;
  }
}
