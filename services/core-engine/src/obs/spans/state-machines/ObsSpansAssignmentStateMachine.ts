export type ObsSpansAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsSpansAssignmentStateMachine {
  private allowedTransitions: Record<ObsSpansAssignmentState, ObsSpansAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsSpansAssignmentState, to: ObsSpansAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsSpansAssignmentState, to: ObsSpansAssignmentState): ObsSpansAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsSpansAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
