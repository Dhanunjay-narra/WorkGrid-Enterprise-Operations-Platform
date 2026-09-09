export type HrPayrollReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPayrollReportStateMachine {
  private allowedTransitions: Record<HrPayrollReportState, HrPayrollReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPayrollReportState, to: HrPayrollReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPayrollReportState, to: HrPayrollReportState): HrPayrollReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPayrollReport: " + from + " -> " + to);
    }
    return to;
  }
}
