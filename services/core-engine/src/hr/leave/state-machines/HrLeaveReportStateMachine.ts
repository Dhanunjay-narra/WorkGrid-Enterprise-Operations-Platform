export type HrLeaveReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrLeaveReportStateMachine {
  private allowedTransitions: Record<HrLeaveReportState, HrLeaveReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrLeaveReportState, to: HrLeaveReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrLeaveReportState, to: HrLeaveReportState): HrLeaveReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrLeaveReport: " + from + " -> " + to);
    }
    return to;
  }
}
