export type FinTaxRateState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class FinTaxRateStateMachine {
  private validTransitions: Record<FinTaxRateState, FinTaxRateState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: FinTaxRateState, next: FinTaxRateState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: FinTaxRateState, next: FinTaxRateState): FinTaxRateState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for FinTaxRate: from " + current + " to " + next);
    }
    return next;
  }
}
