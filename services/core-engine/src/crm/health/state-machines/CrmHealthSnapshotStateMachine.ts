export type CrmHealthSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmHealthSnapshotStateMachine {
  private allowedTransitions: Record<CrmHealthSnapshotState, CrmHealthSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmHealthSnapshotState, to: CrmHealthSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmHealthSnapshotState, to: CrmHealthSnapshotState): CrmHealthSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmHealthSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
