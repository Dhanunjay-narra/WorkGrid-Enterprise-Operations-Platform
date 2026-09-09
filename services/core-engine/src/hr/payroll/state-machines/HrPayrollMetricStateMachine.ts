export type HrPayrollMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPayrollMetricStateMachine {
  private allowedTransitions: Record<HrPayrollMetricState, HrPayrollMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPayrollMetricState, to: HrPayrollMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPayrollMetricState, to: HrPayrollMetricState): HrPayrollMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPayrollMetric: " + from + " -> " + to);
    }
    return to;
  }
}
