export type HrOkrGoalState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class HrOkrGoalStateMachine {
  private validTransitions: Record<HrOkrGoalState, HrOkrGoalState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: HrOkrGoalState, next: HrOkrGoalState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: HrOkrGoalState, next: HrOkrGoalState): HrOkrGoalState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for HrOkrGoal: from " + current + " to " + next);
    }
    return next;
  }
}
