export type FinRecurringPlanState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class FinRecurringPlanStateMachine {
  private validTransitions: Record<FinRecurringPlanState, FinRecurringPlanState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: FinRecurringPlanState, next: FinRecurringPlanState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: FinRecurringPlanState, next: FinRecurringPlanState): FinRecurringPlanState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for FinRecurringPlan: from " + current + " to " + next);
    }
    return next;
  }
}
