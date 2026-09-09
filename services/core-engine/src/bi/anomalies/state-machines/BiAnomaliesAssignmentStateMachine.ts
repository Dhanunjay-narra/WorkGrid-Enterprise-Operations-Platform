export type BiAnomaliesAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiAnomaliesAssignmentStateMachine {
  private allowedTransitions: Record<BiAnomaliesAssignmentState, BiAnomaliesAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiAnomaliesAssignmentState, to: BiAnomaliesAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiAnomaliesAssignmentState, to: BiAnomaliesAssignmentState): BiAnomaliesAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiAnomaliesAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
