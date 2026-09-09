export type FinanceLedgerBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceLedgerBatchStateMachine {
  private allowedTransitions: Record<FinanceLedgerBatchState, FinanceLedgerBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceLedgerBatchState, to: FinanceLedgerBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceLedgerBatchState, to: FinanceLedgerBatchState): FinanceLedgerBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceLedgerBatch: " + from + " -> " + to);
    }
    return to;
  }
}
