export type ObsDashboardsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsDashboardsAssignmentStateMachine {
  private allowedTransitions: Record<ObsDashboardsAssignmentState, ObsDashboardsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsDashboardsAssignmentState, to: ObsDashboardsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsDashboardsAssignmentState, to: ObsDashboardsAssignmentState): ObsDashboardsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsDashboardsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
