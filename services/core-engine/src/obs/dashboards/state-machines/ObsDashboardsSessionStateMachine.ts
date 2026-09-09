export type ObsDashboardsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsDashboardsSessionStateMachine {
  private allowedTransitions: Record<ObsDashboardsSessionState, ObsDashboardsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsDashboardsSessionState, to: ObsDashboardsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsDashboardsSessionState, to: ObsDashboardsSessionState): ObsDashboardsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsDashboardsSession: " + from + " -> " + to);
    }
    return to;
  }
}
