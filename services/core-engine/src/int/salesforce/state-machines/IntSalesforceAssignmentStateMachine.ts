export type IntSalesforceAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSalesforceAssignmentStateMachine {
  private allowedTransitions: Record<IntSalesforceAssignmentState, IntSalesforceAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSalesforceAssignmentState, to: IntSalesforceAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSalesforceAssignmentState, to: IntSalesforceAssignmentState): IntSalesforceAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSalesforceAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
