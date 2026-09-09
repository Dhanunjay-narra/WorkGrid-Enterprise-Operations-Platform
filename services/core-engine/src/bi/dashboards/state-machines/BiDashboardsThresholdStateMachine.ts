export type BiDashboardsThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiDashboardsThresholdStateMachine {
  private allowedTransitions: Record<BiDashboardsThresholdState, BiDashboardsThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiDashboardsThresholdState, to: BiDashboardsThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiDashboardsThresholdState, to: BiDashboardsThresholdState): BiDashboardsThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiDashboardsThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
