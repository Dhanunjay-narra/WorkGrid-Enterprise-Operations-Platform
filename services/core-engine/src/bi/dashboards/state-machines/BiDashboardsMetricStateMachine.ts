export type BiDashboardsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiDashboardsMetricStateMachine {
  private allowedTransitions: Record<BiDashboardsMetricState, BiDashboardsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiDashboardsMetricState, to: BiDashboardsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiDashboardsMetricState, to: BiDashboardsMetricState): BiDashboardsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiDashboardsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
