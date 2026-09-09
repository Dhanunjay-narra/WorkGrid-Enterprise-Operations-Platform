export type HrShiftState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class HrShiftStateMachine {
  private validTransitions: Record<HrShiftState, HrShiftState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: HrShiftState, next: HrShiftState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: HrShiftState, next: HrShiftState): HrShiftState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for HrShift: from " + current + " to " + next);
    }
    return next;
  }
}
