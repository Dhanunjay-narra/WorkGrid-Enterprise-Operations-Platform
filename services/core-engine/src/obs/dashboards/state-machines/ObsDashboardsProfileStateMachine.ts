export type ObsDashboardsProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsDashboardsProfileStateMachine {
  private allowedTransitions: Record<ObsDashboardsProfileState, ObsDashboardsProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsDashboardsProfileState, to: ObsDashboardsProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsDashboardsProfileState, to: ObsDashboardsProfileState): ObsDashboardsProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsDashboardsProfile: " + from + " -> " + to);
    }
    return to;
  }
}
