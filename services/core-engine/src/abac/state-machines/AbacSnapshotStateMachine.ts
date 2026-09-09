export type AbacSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AbacSnapshotStateMachine {
  private allowedTransitions: Record<AbacSnapshotState, AbacSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AbacSnapshotState, to: AbacSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AbacSnapshotState, to: AbacSnapshotState): AbacSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AbacSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
