export type FinExpenseReceiptState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class FinExpenseReceiptStateMachine {
  private validTransitions: Record<FinExpenseReceiptState, FinExpenseReceiptState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: FinExpenseReceiptState, next: FinExpenseReceiptState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: FinExpenseReceiptState, next: FinExpenseReceiptState): FinExpenseReceiptState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for FinExpenseReceipt: from " + current + " to " + next);
    }
    return next;
  }
}
