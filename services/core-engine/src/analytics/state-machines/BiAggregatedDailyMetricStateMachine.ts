export type BiAggregatedDailyMetricState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class BiAggregatedDailyMetricStateMachine {
  private validTransitions: Record<BiAggregatedDailyMetricState, BiAggregatedDailyMetricState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: BiAggregatedDailyMetricState, next: BiAggregatedDailyMetricState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: BiAggregatedDailyMetricState, next: BiAggregatedDailyMetricState): BiAggregatedDailyMetricState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for BiAggregatedDailyMetric: from " + current + " to " + next);
    }
    return next;
  }
}
