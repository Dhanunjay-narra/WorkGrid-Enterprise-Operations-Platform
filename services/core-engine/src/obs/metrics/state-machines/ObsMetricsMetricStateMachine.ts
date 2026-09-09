export type ObsMetricsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsMetricsMetricStateMachine {
  private allowedTransitions: Record<ObsMetricsMetricState, ObsMetricsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsMetricsMetricState, to: ObsMetricsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsMetricsMetricState, to: ObsMetricsMetricState): ObsMetricsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsMetricsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
