export type HrAttendanceProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrAttendanceProfileStateMachine {
  private allowedTransitions: Record<HrAttendanceProfileState, HrAttendanceProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrAttendanceProfileState, to: HrAttendanceProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrAttendanceProfileState, to: HrAttendanceProfileState): HrAttendanceProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrAttendanceProfile: " + from + " -> " + to);
    }
    return to;
  }
}
