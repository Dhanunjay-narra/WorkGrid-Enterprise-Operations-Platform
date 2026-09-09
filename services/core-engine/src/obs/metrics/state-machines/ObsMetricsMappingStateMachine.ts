export type ObsMetricsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsMetricsMappingStateMachine {
  private allowedTransitions: Record<ObsMetricsMappingState, ObsMetricsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsMetricsMappingState, to: ObsMetricsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsMetricsMappingState, to: ObsMetricsMappingState): ObsMetricsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsMetricsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
