export type DmsRetentionSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsRetentionSnapshotStateMachine {
  private allowedTransitions: Record<DmsRetentionSnapshotState, DmsRetentionSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsRetentionSnapshotState, to: DmsRetentionSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsRetentionSnapshotState, to: DmsRetentionSnapshotState): DmsRetentionSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsRetentionSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
