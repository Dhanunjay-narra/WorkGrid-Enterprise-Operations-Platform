export type HrLeaveAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrLeaveAssignmentStateMachine {
  private allowedTransitions: Record<HrLeaveAssignmentState, HrLeaveAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrLeaveAssignmentState, to: HrLeaveAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrLeaveAssignmentState, to: HrLeaveAssignmentState): HrLeaveAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrLeaveAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
