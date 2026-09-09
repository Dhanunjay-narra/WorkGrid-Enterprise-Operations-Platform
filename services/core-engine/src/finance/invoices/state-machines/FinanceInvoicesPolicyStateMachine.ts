export type FinanceInvoicesPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceInvoicesPolicyStateMachine {
  private allowedTransitions: Record<FinanceInvoicesPolicyState, FinanceInvoicesPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceInvoicesPolicyState, to: FinanceInvoicesPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceInvoicesPolicyState, to: FinanceInvoicesPolicyState): FinanceInvoicesPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceInvoicesPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
