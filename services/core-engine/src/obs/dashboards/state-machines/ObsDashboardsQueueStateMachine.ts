export type ObsDashboardsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsDashboardsQueueStateMachine {
  private allowedTransitions: Record<ObsDashboardsQueueState, ObsDashboardsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsDashboardsQueueState, to: ObsDashboardsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsDashboardsQueueState, to: ObsDashboardsQueueState): ObsDashboardsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsDashboardsQueue: " + from + " -> " + to);
    }
    return to;
  }
}
