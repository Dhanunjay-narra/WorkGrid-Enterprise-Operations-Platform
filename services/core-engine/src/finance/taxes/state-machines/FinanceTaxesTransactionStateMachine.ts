export type FinanceTaxesTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceTaxesTransactionStateMachine {
  private allowedTransitions: Record<FinanceTaxesTransactionState, FinanceTaxesTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceTaxesTransactionState, to: FinanceTaxesTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceTaxesTransactionState, to: FinanceTaxesTransactionState): FinanceTaxesTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceTaxesTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
