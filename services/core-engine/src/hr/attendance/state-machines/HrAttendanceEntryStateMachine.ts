export type HrAttendanceEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrAttendanceEntryStateMachine {
  private allowedTransitions: Record<HrAttendanceEntryState, HrAttendanceEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrAttendanceEntryState, to: HrAttendanceEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrAttendanceEntryState, to: HrAttendanceEntryState): HrAttendanceEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrAttendanceEntry: " + from + " -> " + to);
    }
    return to;
  }
}
