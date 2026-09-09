export type HrSalaryComponentState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class HrSalaryComponentStateMachine {
  private validTransitions: Record<HrSalaryComponentState, HrSalaryComponentState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: HrSalaryComponentState, next: HrSalaryComponentState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: HrSalaryComponentState, next: HrSalaryComponentState): HrSalaryComponentState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for HrSalaryComponent: from " + current + " to " + next);
    }
    return next;
  }
}
