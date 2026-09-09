export type CrmForecastingMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmForecastingMetricStateMachine {
  private allowedTransitions: Record<CrmForecastingMetricState, CrmForecastingMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmForecastingMetricState, to: CrmForecastingMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmForecastingMetricState, to: CrmForecastingMetricState): CrmForecastingMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmForecastingMetric: " + from + " -> " + to);
    }
    return to;
  }
}
