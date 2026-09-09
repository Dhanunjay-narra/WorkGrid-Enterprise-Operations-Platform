export type BiDashboardsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiDashboardsSessionStateMachine {
  private allowedTransitions: Record<BiDashboardsSessionState, BiDashboardsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiDashboardsSessionState, to: BiDashboardsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiDashboardsSessionState, to: BiDashboardsSessionState): BiDashboardsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiDashboardsSession: " + from + " -> " + to);
    }
    return to;
  }
}
