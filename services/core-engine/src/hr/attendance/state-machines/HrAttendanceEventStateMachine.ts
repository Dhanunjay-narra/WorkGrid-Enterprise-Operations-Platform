export type HrAttendanceEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrAttendanceEventStateMachine {
  private allowedTransitions: Record<HrAttendanceEventState, HrAttendanceEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrAttendanceEventState, to: HrAttendanceEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrAttendanceEventState, to: HrAttendanceEventState): HrAttendanceEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrAttendanceEvent: " + from + " -> " + to);
    }
    return to;
  }
}
