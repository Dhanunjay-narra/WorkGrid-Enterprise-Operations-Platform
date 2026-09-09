export type BiDashboardsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiDashboardsEntryStateMachine {
  private allowedTransitions: Record<BiDashboardsEntryState, BiDashboardsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiDashboardsEntryState, to: BiDashboardsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiDashboardsEntryState, to: BiDashboardsEntryState): BiDashboardsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiDashboardsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
