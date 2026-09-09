export type IntRateLimitsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntRateLimitsSnapshotStateMachine {
  private allowedTransitions: Record<IntRateLimitsSnapshotState, IntRateLimitsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntRateLimitsSnapshotState, to: IntRateLimitsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntRateLimitsSnapshotState, to: IntRateLimitsSnapshotState): IntRateLimitsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntRateLimitsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
