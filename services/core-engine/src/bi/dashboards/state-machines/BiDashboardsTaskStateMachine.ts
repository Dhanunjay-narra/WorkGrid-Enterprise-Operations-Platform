export type BiDashboardsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiDashboardsTaskStateMachine {
  private allowedTransitions: Record<BiDashboardsTaskState, BiDashboardsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiDashboardsTaskState, to: BiDashboardsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiDashboardsTaskState, to: BiDashboardsTaskState): BiDashboardsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiDashboardsTask: " + from + " -> " + to);
    }
    return to;
  }
}
