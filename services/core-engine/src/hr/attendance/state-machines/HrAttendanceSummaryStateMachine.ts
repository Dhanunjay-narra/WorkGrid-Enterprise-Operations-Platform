export type HrAttendanceSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrAttendanceSummaryStateMachine {
  private allowedTransitions: Record<HrAttendanceSummaryState, HrAttendanceSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrAttendanceSummaryState, to: HrAttendanceSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrAttendanceSummaryState, to: HrAttendanceSummaryState): HrAttendanceSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrAttendanceSummary: " + from + " -> " + to);
    }
    return to;
  }
}
