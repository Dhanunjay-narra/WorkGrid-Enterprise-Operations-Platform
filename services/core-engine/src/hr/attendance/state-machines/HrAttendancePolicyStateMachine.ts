export type HrAttendancePolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrAttendancePolicyStateMachine {
  private allowedTransitions: Record<HrAttendancePolicyState, HrAttendancePolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrAttendancePolicyState, to: HrAttendancePolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrAttendancePolicyState, to: HrAttendancePolicyState): HrAttendancePolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrAttendancePolicy: " + from + " -> " + to);
    }
    return to;
  }
}
