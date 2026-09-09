export type BiDashboardsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiDashboardsNodeStateMachine {
  private allowedTransitions: Record<BiDashboardsNodeState, BiDashboardsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiDashboardsNodeState, to: BiDashboardsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiDashboardsNodeState, to: BiDashboardsNodeState): BiDashboardsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiDashboardsNode: " + from + " -> " + to);
    }
    return to;
  }
}
