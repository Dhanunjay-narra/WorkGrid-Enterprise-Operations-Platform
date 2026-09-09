export type BiQueriesPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiQueriesPolicyStateMachine {
  private allowedTransitions: Record<BiQueriesPolicyState, BiQueriesPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiQueriesPolicyState, to: BiQueriesPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiQueriesPolicyState, to: BiQueriesPolicyState): BiQueriesPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiQueriesPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
