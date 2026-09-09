export type DmsRetentionAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsRetentionAssignmentStateMachine {
  private allowedTransitions: Record<DmsRetentionAssignmentState, DmsRetentionAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsRetentionAssignmentState, to: DmsRetentionAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsRetentionAssignmentState, to: DmsRetentionAssignmentState): DmsRetentionAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsRetentionAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
