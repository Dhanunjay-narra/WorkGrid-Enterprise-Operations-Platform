export type FinanceForecastSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceForecastSnapshotStateMachine {
  private allowedTransitions: Record<FinanceForecastSnapshotState, FinanceForecastSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceForecastSnapshotState, to: FinanceForecastSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceForecastSnapshotState, to: FinanceForecastSnapshotState): FinanceForecastSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceForecastSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
