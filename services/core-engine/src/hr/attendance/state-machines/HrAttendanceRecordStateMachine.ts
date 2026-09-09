export type HrAttendanceRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrAttendanceRecordStateMachine {
  private allowedTransitions: Record<HrAttendanceRecordState, HrAttendanceRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrAttendanceRecordState, to: HrAttendanceRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrAttendanceRecordState, to: HrAttendanceRecordState): HrAttendanceRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrAttendanceRecord: " + from + " -> " + to);
    }
    return to;
  }
}
