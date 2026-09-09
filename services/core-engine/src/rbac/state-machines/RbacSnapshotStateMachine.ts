export type RbacSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class RbacSnapshotStateMachine {
  private allowedTransitions: Record<RbacSnapshotState, RbacSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: RbacSnapshotState, to: RbacSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: RbacSnapshotState, to: RbacSnapshotState): RbacSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for RbacSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
