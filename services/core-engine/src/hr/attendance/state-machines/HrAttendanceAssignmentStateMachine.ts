export type HrAttendanceAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrAttendanceAssignmentStateMachine {
  private allowedTransitions: Record<HrAttendanceAssignmentState, HrAttendanceAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrAttendanceAssignmentState, to: HrAttendanceAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrAttendanceAssignmentState, to: HrAttendanceAssignmentState): HrAttendanceAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrAttendanceAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
