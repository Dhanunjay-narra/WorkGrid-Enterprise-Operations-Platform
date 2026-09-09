export type HrPayrollSlipState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class HrPayrollSlipStateMachine {
  private validTransitions: Record<HrPayrollSlipState, HrPayrollSlipState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: HrPayrollSlipState, next: HrPayrollSlipState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: HrPayrollSlipState, next: HrPayrollSlipState): HrPayrollSlipState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for HrPayrollSlip: from " + current + " to " + next);
    }
    return next;
  }
}
