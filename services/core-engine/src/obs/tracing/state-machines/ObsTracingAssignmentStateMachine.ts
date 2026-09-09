export type ObsTracingAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsTracingAssignmentStateMachine {
  private allowedTransitions: Record<ObsTracingAssignmentState, ObsTracingAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsTracingAssignmentState, to: ObsTracingAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsTracingAssignmentState, to: ObsTracingAssignmentState): ObsTracingAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsTracingAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
