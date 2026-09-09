export type HrPayrollPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPayrollPolicyStateMachine {
  private allowedTransitions: Record<HrPayrollPolicyState, HrPayrollPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPayrollPolicyState, to: HrPayrollPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPayrollPolicyState, to: HrPayrollPolicyState): HrPayrollPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPayrollPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
