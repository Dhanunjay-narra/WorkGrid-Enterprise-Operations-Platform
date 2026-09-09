export type FinanceLedgerSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceLedgerSnapshotStateMachine {
  private allowedTransitions: Record<FinanceLedgerSnapshotState, FinanceLedgerSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceLedgerSnapshotState, to: FinanceLedgerSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceLedgerSnapshotState, to: FinanceLedgerSnapshotState): FinanceLedgerSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceLedgerSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
