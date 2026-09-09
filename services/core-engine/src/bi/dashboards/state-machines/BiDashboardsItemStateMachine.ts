export type BiDashboardsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiDashboardsItemStateMachine {
  private allowedTransitions: Record<BiDashboardsItemState, BiDashboardsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiDashboardsItemState, to: BiDashboardsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiDashboardsItemState, to: BiDashboardsItemState): BiDashboardsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiDashboardsItem: " + from + " -> " + to);
    }
    return to;
  }
}
