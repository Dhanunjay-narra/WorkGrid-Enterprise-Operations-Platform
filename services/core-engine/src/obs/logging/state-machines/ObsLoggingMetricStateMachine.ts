export type ObsLoggingMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsLoggingMetricStateMachine {
  private allowedTransitions: Record<ObsLoggingMetricState, ObsLoggingMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsLoggingMetricState, to: ObsLoggingMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsLoggingMetricState, to: ObsLoggingMetricState): ObsLoggingMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsLoggingMetric: " + from + " -> " + to);
    }
    return to;
  }
}
