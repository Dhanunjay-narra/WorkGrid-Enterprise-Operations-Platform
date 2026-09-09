export type ObsMetricsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsMetricsSnapshotStateMachine {
  private allowedTransitions: Record<ObsMetricsSnapshotState, ObsMetricsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsMetricsSnapshotState, to: ObsMetricsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsMetricsSnapshotState, to: ObsMetricsSnapshotState): ObsMetricsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsMetricsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
