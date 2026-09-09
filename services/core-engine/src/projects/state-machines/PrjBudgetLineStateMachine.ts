export type PrjBudgetLineState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class PrjBudgetLineStateMachine {
  private validTransitions: Record<PrjBudgetLineState, PrjBudgetLineState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: PrjBudgetLineState, next: PrjBudgetLineState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: PrjBudgetLineState, next: PrjBudgetLineState): PrjBudgetLineState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for PrjBudgetLine: from " + current + " to " + next);
    }
    return next;
  }
}
