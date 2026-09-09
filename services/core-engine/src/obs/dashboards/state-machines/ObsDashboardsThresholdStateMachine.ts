export type ObsDashboardsThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsDashboardsThresholdStateMachine {
  private allowedTransitions: Record<ObsDashboardsThresholdState, ObsDashboardsThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsDashboardsThresholdState, to: ObsDashboardsThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsDashboardsThresholdState, to: ObsDashboardsThresholdState): ObsDashboardsThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsDashboardsThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
