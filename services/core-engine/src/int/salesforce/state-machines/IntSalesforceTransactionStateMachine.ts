export type IntSalesforceTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSalesforceTransactionStateMachine {
  private allowedTransitions: Record<IntSalesforceTransactionState, IntSalesforceTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSalesforceTransactionState, to: IntSalesforceTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSalesforceTransactionState, to: IntSalesforceTransactionState): IntSalesforceTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSalesforceTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
