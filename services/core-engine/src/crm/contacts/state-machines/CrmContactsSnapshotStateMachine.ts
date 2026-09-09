export type CrmContactsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmContactsSnapshotStateMachine {
  private allowedTransitions: Record<CrmContactsSnapshotState, CrmContactsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmContactsSnapshotState, to: CrmContactsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmContactsSnapshotState, to: CrmContactsSnapshotState): CrmContactsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmContactsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
