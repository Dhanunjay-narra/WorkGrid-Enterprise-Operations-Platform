export type IntSlackAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSlackAssignmentStateMachine {
  private allowedTransitions: Record<IntSlackAssignmentState, IntSlackAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSlackAssignmentState, to: IntSlackAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSlackAssignmentState, to: IntSlackAssignmentState): IntSlackAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSlackAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
