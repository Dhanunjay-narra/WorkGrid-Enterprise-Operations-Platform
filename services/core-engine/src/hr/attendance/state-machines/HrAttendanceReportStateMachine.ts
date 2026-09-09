export type HrAttendanceReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrAttendanceReportStateMachine {
  private allowedTransitions: Record<HrAttendanceReportState, HrAttendanceReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrAttendanceReportState, to: HrAttendanceReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrAttendanceReportState, to: HrAttendanceReportState): HrAttendanceReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrAttendanceReport: " + from + " -> " + to);
    }
    return to;
  }
}
