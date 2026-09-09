export type HrPayrollSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPayrollSummaryStateMachine {
  private allowedTransitions: Record<HrPayrollSummaryState, HrPayrollSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPayrollSummaryState, to: HrPayrollSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPayrollSummaryState, to: HrPayrollSummaryState): HrPayrollSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPayrollSummary: " + from + " -> " + to);
    }
    return to;
  }
}
