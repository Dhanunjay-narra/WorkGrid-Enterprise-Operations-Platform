export type HrAttendanceNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrAttendanceNodeStateMachine {
  private allowedTransitions: Record<HrAttendanceNodeState, HrAttendanceNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrAttendanceNodeState, to: HrAttendanceNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrAttendanceNodeState, to: HrAttendanceNodeState): HrAttendanceNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrAttendanceNode: " + from + " -> " + to);
    }
    return to;
  }
}
