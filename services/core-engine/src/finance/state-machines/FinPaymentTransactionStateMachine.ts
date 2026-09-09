export type FinPaymentTransactionState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class FinPaymentTransactionStateMachine {
  private validTransitions: Record<FinPaymentTransactionState, FinPaymentTransactionState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: FinPaymentTransactionState, next: FinPaymentTransactionState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: FinPaymentTransactionState, next: FinPaymentTransactionState): FinPaymentTransactionState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for FinPaymentTransaction: from " + current + " to " + next);
    }
    return next;
  }
}
