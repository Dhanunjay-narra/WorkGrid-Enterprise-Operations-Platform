export type HrPerformanceSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPerformanceSnapshotStateMachine {
  private allowedTransitions: Record<HrPerformanceSnapshotState, HrPerformanceSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPerformanceSnapshotState, to: HrPerformanceSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPerformanceSnapshotState, to: HrPerformanceSnapshotState): HrPerformanceSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPerformanceSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
