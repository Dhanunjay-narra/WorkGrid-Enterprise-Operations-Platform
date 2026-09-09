export type BiDashboardsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiDashboardsEventStateMachine {
  private allowedTransitions: Record<BiDashboardsEventState, BiDashboardsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiDashboardsEventState, to: BiDashboardsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiDashboardsEventState, to: BiDashboardsEventState): BiDashboardsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiDashboardsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
