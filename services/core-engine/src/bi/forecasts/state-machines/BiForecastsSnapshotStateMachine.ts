export type BiForecastsSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiForecastsSnapshotStateMachine {
  private allowedTransitions: Record<BiForecastsSnapshotState, BiForecastsSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiForecastsSnapshotState, to: BiForecastsSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiForecastsSnapshotState, to: BiForecastsSnapshotState): BiForecastsSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiForecastsSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
