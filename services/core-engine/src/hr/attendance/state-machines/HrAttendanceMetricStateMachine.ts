export type HrAttendanceMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrAttendanceMetricStateMachine {
  private allowedTransitions: Record<HrAttendanceMetricState, HrAttendanceMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrAttendanceMetricState, to: HrAttendanceMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrAttendanceMetricState, to: HrAttendanceMetricState): HrAttendanceMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrAttendanceMetric: " + from + " -> " + to);
    }
    return to;
  }
}
