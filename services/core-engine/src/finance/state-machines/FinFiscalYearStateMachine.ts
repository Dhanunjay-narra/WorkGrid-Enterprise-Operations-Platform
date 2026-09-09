export type FinFiscalYearState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class FinFiscalYearStateMachine {
  private validTransitions: Record<FinFiscalYearState, FinFiscalYearState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: FinFiscalYearState, next: FinFiscalYearState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: FinFiscalYearState, next: FinFiscalYearState): FinFiscalYearState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for FinFiscalYear: from " + current + " to " + next);
    }
    return next;
  }
}
