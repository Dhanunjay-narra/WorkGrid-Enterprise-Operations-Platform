export type FinBankReconciliationState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class FinBankReconciliationStateMachine {
  private validTransitions: Record<FinBankReconciliationState, FinBankReconciliationState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: FinBankReconciliationState, next: FinBankReconciliationState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: FinBankReconciliationState, next: FinBankReconciliationState): FinBankReconciliationState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for FinBankReconciliation: from " + current + " to " + next);
    }
    return next;
  }
}
