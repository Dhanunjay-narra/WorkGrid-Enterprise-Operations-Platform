export type FinInvoiceState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class FinInvoiceStateMachine {
  private validTransitions: Record<FinInvoiceState, FinInvoiceState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: FinInvoiceState, next: FinInvoiceState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: FinInvoiceState, next: FinInvoiceState): FinInvoiceState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for FinInvoice: from " + current + " to " + next);
    }
    return next;
  }
}
