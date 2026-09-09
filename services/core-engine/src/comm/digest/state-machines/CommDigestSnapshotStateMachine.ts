export type CommDigestSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommDigestSnapshotStateMachine {
  private allowedTransitions: Record<CommDigestSnapshotState, CommDigestSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommDigestSnapshotState, to: CommDigestSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommDigestSnapshotState, to: CommDigestSnapshotState): CommDigestSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommDigestSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
