export type HrAttendanceRecordState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class HrAttendanceRecordStateMachine {
  private validTransitions: Record<HrAttendanceRecordState, HrAttendanceRecordState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: HrAttendanceRecordState, next: HrAttendanceRecordState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: HrAttendanceRecordState, next: HrAttendanceRecordState): HrAttendanceRecordState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for HrAttendanceRecord: from " + current + " to " + next);
    }
    return next;
  }
}
