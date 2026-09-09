export type FinanceTaxesSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceTaxesSnapshotStateMachine {
  private allowedTransitions: Record<FinanceTaxesSnapshotState, FinanceTaxesSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceTaxesSnapshotState, to: FinanceTaxesSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceTaxesSnapshotState, to: FinanceTaxesSnapshotState): FinanceTaxesSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceTaxesSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
