export type HrAttendanceConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrAttendanceConfigStateMachine {
  private allowedTransitions: Record<HrAttendanceConfigState, HrAttendanceConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrAttendanceConfigState, to: HrAttendanceConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrAttendanceConfigState, to: HrAttendanceConfigState): HrAttendanceConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrAttendanceConfig: " + from + " -> " + to);
    }
    return to;
  }
}
