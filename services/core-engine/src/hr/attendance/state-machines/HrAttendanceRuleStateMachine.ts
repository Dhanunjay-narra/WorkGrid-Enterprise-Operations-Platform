export type HrAttendanceRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrAttendanceRuleStateMachine {
  private allowedTransitions: Record<HrAttendanceRuleState, HrAttendanceRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrAttendanceRuleState, to: HrAttendanceRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrAttendanceRuleState, to: HrAttendanceRuleState): HrAttendanceRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrAttendanceRule: " + from + " -> " + to);
    }
    return to;
  }
}
