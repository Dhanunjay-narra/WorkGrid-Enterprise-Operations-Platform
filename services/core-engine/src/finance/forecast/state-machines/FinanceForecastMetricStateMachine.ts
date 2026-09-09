export type FinanceForecastMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceForecastMetricStateMachine {
  private allowedTransitions: Record<FinanceForecastMetricState, FinanceForecastMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceForecastMetricState, to: FinanceForecastMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceForecastMetricState, to: FinanceForecastMetricState): FinanceForecastMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceForecastMetric: " + from + " -> " + to);
    }
    return to;
  }
}
