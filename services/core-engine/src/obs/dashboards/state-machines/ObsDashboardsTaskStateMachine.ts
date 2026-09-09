export type ObsDashboardsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsDashboardsTaskStateMachine {
  private allowedTransitions: Record<ObsDashboardsTaskState, ObsDashboardsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsDashboardsTaskState, to: ObsDashboardsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsDashboardsTaskState, to: ObsDashboardsTaskState): ObsDashboardsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsDashboardsTask: " + from + " -> " + to);
    }
    return to;
  }
}
