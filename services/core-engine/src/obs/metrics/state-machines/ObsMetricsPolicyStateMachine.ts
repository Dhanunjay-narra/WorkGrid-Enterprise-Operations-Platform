export type ObsMetricsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsMetricsPolicyStateMachine {
  private allowedTransitions: Record<ObsMetricsPolicyState, ObsMetricsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsMetricsPolicyState, to: ObsMetricsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsMetricsPolicyState, to: ObsMetricsPolicyState): ObsMetricsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsMetricsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
