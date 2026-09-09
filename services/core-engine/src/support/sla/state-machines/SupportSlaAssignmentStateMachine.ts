export type SupportSlaAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSlaAssignmentStateMachine {
  private allowedTransitions: Record<SupportSlaAssignmentState, SupportSlaAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSlaAssignmentState, to: SupportSlaAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSlaAssignmentState, to: SupportSlaAssignmentState): SupportSlaAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSlaAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
