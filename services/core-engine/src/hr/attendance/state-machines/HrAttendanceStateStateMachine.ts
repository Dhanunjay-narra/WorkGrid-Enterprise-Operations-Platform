export type HrAttendanceStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrAttendanceStateStateMachine {
  private allowedTransitions: Record<HrAttendanceStateState, HrAttendanceStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrAttendanceStateState, to: HrAttendanceStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrAttendanceStateState, to: HrAttendanceStateState): HrAttendanceStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrAttendanceState: " + from + " -> " + to);
    }
    return to;
  }
}
