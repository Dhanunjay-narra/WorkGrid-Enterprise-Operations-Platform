export type ObsProfilingAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProfilingAssignmentStateMachine {
  private allowedTransitions: Record<ObsProfilingAssignmentState, ObsProfilingAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProfilingAssignmentState, to: ObsProfilingAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProfilingAssignmentState, to: ObsProfilingAssignmentState): ObsProfilingAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProfilingAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
