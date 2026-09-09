export type IntSalesforcePolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSalesforcePolicyStateMachine {
  private allowedTransitions: Record<IntSalesforcePolicyState, IntSalesforcePolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSalesforcePolicyState, to: IntSalesforcePolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSalesforcePolicyState, to: IntSalesforcePolicyState): IntSalesforcePolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSalesforcePolicy: " + from + " -> " + to);
    }
    return to;
  }
}
