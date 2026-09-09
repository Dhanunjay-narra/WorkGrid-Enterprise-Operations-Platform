export type ObsDashboardsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsDashboardsStateStateMachine {
  private allowedTransitions: Record<ObsDashboardsStateState, ObsDashboardsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsDashboardsStateState, to: ObsDashboardsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsDashboardsStateState, to: ObsDashboardsStateState): ObsDashboardsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsDashboardsState: " + from + " -> " + to);
    }
    return to;
  }
}
