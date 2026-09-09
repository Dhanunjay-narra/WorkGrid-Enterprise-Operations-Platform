export type BiForecastsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiForecastsBatchStateMachine {
  private allowedTransitions: Record<BiForecastsBatchState, BiForecastsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiForecastsBatchState, to: BiForecastsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiForecastsBatchState, to: BiForecastsBatchState): BiForecastsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiForecastsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
