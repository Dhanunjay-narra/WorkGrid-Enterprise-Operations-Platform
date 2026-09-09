export type BiDashboardsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiDashboardsStateStateMachine {
  private allowedTransitions: Record<BiDashboardsStateState, BiDashboardsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiDashboardsStateState, to: BiDashboardsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiDashboardsStateState, to: BiDashboardsStateState): BiDashboardsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiDashboardsState: " + from + " -> " + to);
    }
    return to;
  }
}
