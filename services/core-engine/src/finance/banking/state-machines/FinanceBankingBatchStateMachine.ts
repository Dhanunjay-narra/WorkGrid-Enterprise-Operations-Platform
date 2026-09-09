export type FinanceBankingBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBankingBatchStateMachine {
  private allowedTransitions: Record<FinanceBankingBatchState, FinanceBankingBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBankingBatchState, to: FinanceBankingBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBankingBatchState, to: FinanceBankingBatchState): FinanceBankingBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBankingBatch: " + from + " -> " + to);
    }
    return to;
  }
}
