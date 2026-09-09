export type ObsDashboardsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsDashboardsEventStateMachine {
  private allowedTransitions: Record<ObsDashboardsEventState, ObsDashboardsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsDashboardsEventState, to: ObsDashboardsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsDashboardsEventState, to: ObsDashboardsEventState): ObsDashboardsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsDashboardsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
