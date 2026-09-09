export type ObsDashboardsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsDashboardsMetricStateMachine {
  private allowedTransitions: Record<ObsDashboardsMetricState, ObsDashboardsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsDashboardsMetricState, to: ObsDashboardsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsDashboardsMetricState, to: ObsDashboardsMetricState): ObsDashboardsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsDashboardsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
