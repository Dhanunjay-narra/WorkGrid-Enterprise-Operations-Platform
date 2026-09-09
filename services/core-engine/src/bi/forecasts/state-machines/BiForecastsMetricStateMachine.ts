export type BiForecastsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiForecastsMetricStateMachine {
  private allowedTransitions: Record<BiForecastsMetricState, BiForecastsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiForecastsMetricState, to: BiForecastsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiForecastsMetricState, to: BiForecastsMetricState): BiForecastsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiForecastsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
