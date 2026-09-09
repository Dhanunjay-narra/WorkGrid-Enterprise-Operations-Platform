export type ObsDashboardsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsDashboardsEntryStateMachine {
  private allowedTransitions: Record<ObsDashboardsEntryState, ObsDashboardsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsDashboardsEntryState, to: ObsDashboardsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsDashboardsEntryState, to: ObsDashboardsEntryState): ObsDashboardsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsDashboardsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
