export type HrAttendanceThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrAttendanceThresholdStateMachine {
  private allowedTransitions: Record<HrAttendanceThresholdState, HrAttendanceThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrAttendanceThresholdState, to: HrAttendanceThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrAttendanceThresholdState, to: HrAttendanceThresholdState): HrAttendanceThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrAttendanceThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
