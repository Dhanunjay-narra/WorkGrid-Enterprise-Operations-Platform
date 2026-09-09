export type BiDashboardsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiDashboardsAssignmentStateMachine {
  private allowedTransitions: Record<BiDashboardsAssignmentState, BiDashboardsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiDashboardsAssignmentState, to: BiDashboardsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiDashboardsAssignmentState, to: BiDashboardsAssignmentState): BiDashboardsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiDashboardsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
