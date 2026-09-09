export type ObsMetricsThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsMetricsThresholdStateMachine {
  private allowedTransitions: Record<ObsMetricsThresholdState, ObsMetricsThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsMetricsThresholdState, to: ObsMetricsThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsMetricsThresholdState, to: ObsMetricsThresholdState): ObsMetricsThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsMetricsThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
