export type HrPayrollRuleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPayrollRuleStateMachine {
  private allowedTransitions: Record<HrPayrollRuleState, HrPayrollRuleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPayrollRuleState, to: HrPayrollRuleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPayrollRuleState, to: HrPayrollRuleState): HrPayrollRuleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPayrollRule: " + from + " -> " + to);
    }
    return to;
  }
}
