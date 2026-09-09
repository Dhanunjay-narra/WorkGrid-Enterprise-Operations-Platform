export type FinInvoiceItemState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class FinInvoiceItemStateMachine {
  private validTransitions: Record<FinInvoiceItemState, FinInvoiceItemState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: FinInvoiceItemState, next: FinInvoiceItemState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: FinInvoiceItemState, next: FinInvoiceItemState): FinInvoiceItemState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for FinInvoiceItem: from " + current + " to " + next);
    }
    return next;
  }
}
