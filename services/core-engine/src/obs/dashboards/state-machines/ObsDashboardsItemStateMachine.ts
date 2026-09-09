export type ObsDashboardsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsDashboardsItemStateMachine {
  private allowedTransitions: Record<ObsDashboardsItemState, ObsDashboardsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsDashboardsItemState, to: ObsDashboardsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsDashboardsItemState, to: ObsDashboardsItemState): ObsDashboardsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsDashboardsItem: " + from + " -> " + to);
    }
    return to;
  }
}
