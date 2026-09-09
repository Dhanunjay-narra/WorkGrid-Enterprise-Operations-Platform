export type HrDepartmentState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class HrDepartmentStateMachine {
  private validTransitions: Record<HrDepartmentState, HrDepartmentState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: HrDepartmentState, next: HrDepartmentState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: HrDepartmentState, next: HrDepartmentState): HrDepartmentState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for HrDepartment: from " + current + " to " + next);
    }
    return next;
  }
}
