export type FinanceInvoicesSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceInvoicesSnapshotStateMachine {
  private allowedTransitions: Record<FinanceInvoicesSnapshotState, FinanceInvoicesSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceInvoicesSnapshotState, to: FinanceInvoicesSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceInvoicesSnapshotState, to: FinanceInvoicesSnapshotState): FinanceInvoicesSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceInvoicesSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
