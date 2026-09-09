export type HrAttendanceScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrAttendanceScheduleStateMachine {
  private allowedTransitions: Record<HrAttendanceScheduleState, HrAttendanceScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrAttendanceScheduleState, to: HrAttendanceScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrAttendanceScheduleState, to: HrAttendanceScheduleState): HrAttendanceScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrAttendanceSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
