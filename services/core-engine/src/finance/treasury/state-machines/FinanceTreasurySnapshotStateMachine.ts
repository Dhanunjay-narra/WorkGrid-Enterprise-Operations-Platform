export type FinanceTreasurySnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceTreasurySnapshotStateMachine {
  private allowedTransitions: Record<FinanceTreasurySnapshotState, FinanceTreasurySnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceTreasurySnapshotState, to: FinanceTreasurySnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceTreasurySnapshotState, to: FinanceTreasurySnapshotState): FinanceTreasurySnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceTreasurySnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
