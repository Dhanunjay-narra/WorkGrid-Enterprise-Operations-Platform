export type ObsLoggingAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsLoggingAssignmentStateMachine {
  private allowedTransitions: Record<ObsLoggingAssignmentState, ObsLoggingAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsLoggingAssignmentState, to: ObsLoggingAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsLoggingAssignmentState, to: ObsLoggingAssignmentState): ObsLoggingAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsLoggingAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
