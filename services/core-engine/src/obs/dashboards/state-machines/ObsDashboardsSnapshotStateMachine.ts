export type ObsDashboardsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsDashboardsSnapshotStateMachine {
  private allowedTransitions: Record<ObsDashboardsSnapshotState, ObsDashboardsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsDashboardsSnapshotState, to: ObsDashboardsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsDashboardsSnapshotState, to: ObsDashboardsSnapshotState): ObsDashboardsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsDashboardsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
