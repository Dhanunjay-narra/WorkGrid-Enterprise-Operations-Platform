export type IntOauthSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntOauthSnapshotStateMachine {
  private allowedTransitions: Record<IntOauthSnapshotState, IntOauthSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntOauthSnapshotState, to: IntOauthSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntOauthSnapshotState, to: IntOauthSnapshotState): IntOauthSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntOauthSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
