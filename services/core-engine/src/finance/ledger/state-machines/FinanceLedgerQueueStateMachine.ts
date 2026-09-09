export type FinanceLedgerQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceLedgerQueueStateMachine {
  private allowedTransitions: Record<FinanceLedgerQueueState, FinanceLedgerQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceLedgerQueueState, to: FinanceLedgerQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceLedgerQueueState, to: FinanceLedgerQueueState): FinanceLedgerQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceLedgerQueue: " + from + " -> " + to);
    }
    return to;
  }
}
