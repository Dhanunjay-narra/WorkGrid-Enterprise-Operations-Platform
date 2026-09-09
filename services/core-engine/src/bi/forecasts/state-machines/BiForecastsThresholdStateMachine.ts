export type BiForecastsThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiForecastsThresholdStateMachine {
  private allowedTransitions: Record<BiForecastsThresholdState, BiForecastsThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiForecastsThresholdState, to: BiForecastsThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiForecastsThresholdState, to: BiForecastsThresholdState): BiForecastsThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiForecastsThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
