export type CrmForecastingSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmForecastingSnapshotStateMachine {
  private allowedTransitions: Record<CrmForecastingSnapshotState, CrmForecastingSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmForecastingSnapshotState, to: CrmForecastingSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmForecastingSnapshotState, to: CrmForecastingSnapshotState): CrmForecastingSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmForecastingSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
