export type IntSalesforceNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSalesforceNodeStateMachine {
  private allowedTransitions: Record<IntSalesforceNodeState, IntSalesforceNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSalesforceNodeState, to: IntSalesforceNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSalesforceNodeState, to: IntSalesforceNodeState): IntSalesforceNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSalesforceNode: " + from + " -> " + to);
    }
    return to;
  }
}
