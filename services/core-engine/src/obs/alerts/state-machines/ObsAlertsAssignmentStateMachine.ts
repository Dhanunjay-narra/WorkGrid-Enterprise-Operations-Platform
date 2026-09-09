export type ObsAlertsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsAlertsAssignmentStateMachine {
  private allowedTransitions: Record<ObsAlertsAssignmentState, ObsAlertsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsAlertsAssignmentState, to: ObsAlertsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsAlertsAssignmentState, to: ObsAlertsAssignmentState): ObsAlertsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsAlertsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
