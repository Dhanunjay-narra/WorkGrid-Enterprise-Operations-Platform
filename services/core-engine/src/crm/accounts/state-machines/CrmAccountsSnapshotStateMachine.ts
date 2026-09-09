export type CrmAccountsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmAccountsSnapshotStateMachine {
  private allowedTransitions: Record<CrmAccountsSnapshotState, CrmAccountsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmAccountsSnapshotState, to: CrmAccountsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmAccountsSnapshotState, to: CrmAccountsSnapshotState): CrmAccountsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmAccountsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
