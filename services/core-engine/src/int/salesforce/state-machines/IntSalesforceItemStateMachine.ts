export type IntSalesforceItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSalesforceItemStateMachine {
  private allowedTransitions: Record<IntSalesforceItemState, IntSalesforceItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSalesforceItemState, to: IntSalesforceItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSalesforceItemState, to: IntSalesforceItemState): IntSalesforceItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSalesforceItem: " + from + " -> " + to);
    }
    return to;
  }
}
