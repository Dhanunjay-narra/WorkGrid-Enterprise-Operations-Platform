export type CommCallsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommCallsSnapshotStateMachine {
  private allowedTransitions: Record<CommCallsSnapshotState, CommCallsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommCallsSnapshotState, to: CommCallsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommCallsSnapshotState, to: CommCallsSnapshotState): CommCallsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommCallsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
