export type HrEmployeeState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class HrEmployeeStateMachine {
  private validTransitions: Record<HrEmployeeState, HrEmployeeState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: HrEmployeeState, next: HrEmployeeState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: HrEmployeeState, next: HrEmployeeState): HrEmployeeState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for HrEmployee: from " + current + " to " + next);
    }
    return next;
  }
}
