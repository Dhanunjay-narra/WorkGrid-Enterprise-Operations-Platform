export type BiQueriesAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiQueriesAssignmentStateMachine {
  private allowedTransitions: Record<BiQueriesAssignmentState, BiQueriesAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiQueriesAssignmentState, to: BiQueriesAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiQueriesAssignmentState, to: BiQueriesAssignmentState): BiQueriesAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiQueriesAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
