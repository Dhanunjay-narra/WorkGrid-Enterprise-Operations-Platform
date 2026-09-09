export type ObsDashboardsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsDashboardsBatchStateMachine {
  private allowedTransitions: Record<ObsDashboardsBatchState, ObsDashboardsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsDashboardsBatchState, to: ObsDashboardsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsDashboardsBatchState, to: ObsDashboardsBatchState): ObsDashboardsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsDashboardsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
