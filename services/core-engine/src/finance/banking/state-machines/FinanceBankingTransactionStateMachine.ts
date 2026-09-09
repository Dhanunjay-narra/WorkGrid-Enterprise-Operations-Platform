export type FinanceBankingTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBankingTransactionStateMachine {
  private allowedTransitions: Record<FinanceBankingTransactionState, FinanceBankingTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBankingTransactionState, to: FinanceBankingTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBankingTransactionState, to: FinanceBankingTransactionState): FinanceBankingTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBankingTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
