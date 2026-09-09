export type FinanceLedgerRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceLedgerRecordStateMachine {
  private allowedTransitions: Record<FinanceLedgerRecordState, FinanceLedgerRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceLedgerRecordState, to: FinanceLedgerRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceLedgerRecordState, to: FinanceLedgerRecordState): FinanceLedgerRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceLedgerRecord: " + from + " -> " + to);
    }
    return to;
  }
}
