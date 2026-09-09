export type FinanceLedgerTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceLedgerTaskStateMachine {
  private allowedTransitions: Record<FinanceLedgerTaskState, FinanceLedgerTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceLedgerTaskState, to: FinanceLedgerTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceLedgerTaskState, to: FinanceLedgerTaskState): FinanceLedgerTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceLedgerTask: " + from + " -> " + to);
    }
    return to;
  }
}
