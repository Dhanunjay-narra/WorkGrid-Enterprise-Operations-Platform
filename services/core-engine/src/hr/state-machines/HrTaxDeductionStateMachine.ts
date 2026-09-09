export type HrTaxDeductionState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class HrTaxDeductionStateMachine {
  private validTransitions: Record<HrTaxDeductionState, HrTaxDeductionState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: HrTaxDeductionState, next: HrTaxDeductionState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: HrTaxDeductionState, next: HrTaxDeductionState): HrTaxDeductionState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for HrTaxDeduction: from " + current + " to " + next);
    }
    return next;
  }
}
