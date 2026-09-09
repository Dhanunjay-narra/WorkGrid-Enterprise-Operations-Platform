export type BiDashboardsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiDashboardsSnapshotStateMachine {
  private allowedTransitions: Record<BiDashboardsSnapshotState, BiDashboardsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiDashboardsSnapshotState, to: BiDashboardsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiDashboardsSnapshotState, to: BiDashboardsSnapshotState): BiDashboardsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiDashboardsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
