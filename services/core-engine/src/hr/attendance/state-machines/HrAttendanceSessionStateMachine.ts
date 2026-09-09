export type HrAttendanceSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrAttendanceSessionStateMachine {
  private allowedTransitions: Record<HrAttendanceSessionState, HrAttendanceSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrAttendanceSessionState, to: HrAttendanceSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrAttendanceSessionState, to: HrAttendanceSessionState): HrAttendanceSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrAttendanceSession: " + from + " -> " + to);
    }
    return to;
  }
}
