export type HrPerformanceReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPerformanceReportStateMachine {
  private allowedTransitions: Record<HrPerformanceReportState, HrPerformanceReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPerformanceReportState, to: HrPerformanceReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPerformanceReportState, to: HrPerformanceReportState): HrPerformanceReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPerformanceReport: " + from + " -> " + to);
    }
    return to;
  }
}
