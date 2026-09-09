export type HrAttendanceTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrAttendanceTaskStateMachine {
  private allowedTransitions: Record<HrAttendanceTaskState, HrAttendanceTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrAttendanceTaskState, to: HrAttendanceTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrAttendanceTaskState, to: HrAttendanceTaskState): HrAttendanceTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrAttendanceTask: " + from + " -> " + to);
    }
    return to;
  }
}
