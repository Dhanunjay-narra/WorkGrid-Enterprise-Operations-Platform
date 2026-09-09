export type BiDashboardsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiDashboardsQueueStateMachine {
  private allowedTransitions: Record<BiDashboardsQueueState, BiDashboardsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiDashboardsQueueState, to: BiDashboardsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiDashboardsQueueState, to: BiDashboardsQueueState): BiDashboardsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiDashboardsQueue: " + from + " -> " + to);
    }
    return to;
  }
}
