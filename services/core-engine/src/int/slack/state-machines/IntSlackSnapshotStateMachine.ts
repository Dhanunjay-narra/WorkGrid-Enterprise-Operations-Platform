export type IntSlackSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSlackSnapshotStateMachine {
  private allowedTransitions: Record<IntSlackSnapshotState, IntSlackSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSlackSnapshotState, to: IntSlackSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSlackSnapshotState, to: IntSlackSnapshotState): IntSlackSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSlackSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
