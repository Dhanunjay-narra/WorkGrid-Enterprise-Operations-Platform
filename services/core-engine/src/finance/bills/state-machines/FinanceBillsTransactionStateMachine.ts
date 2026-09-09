export type FinanceBillsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBillsTransactionStateMachine {
  private allowedTransitions: Record<FinanceBillsTransactionState, FinanceBillsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBillsTransactionState, to: FinanceBillsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBillsTransactionState, to: FinanceBillsTransactionState): FinanceBillsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBillsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
