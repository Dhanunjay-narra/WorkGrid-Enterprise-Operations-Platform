export type ObsAlertsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsAlertsMetricStateMachine {
  private allowedTransitions: Record<ObsAlertsMetricState, ObsAlertsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsAlertsMetricState, to: ObsAlertsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsAlertsMetricState, to: ObsAlertsMetricState): ObsAlertsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsAlertsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
