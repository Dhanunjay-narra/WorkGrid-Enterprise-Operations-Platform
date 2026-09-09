export type InvPurchaseOrderState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class InvPurchaseOrderStateMachine {
  private validTransitions: Record<InvPurchaseOrderState, InvPurchaseOrderState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: InvPurchaseOrderState, next: InvPurchaseOrderState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: InvPurchaseOrderState, next: InvPurchaseOrderState): InvPurchaseOrderState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for InvPurchaseOrder: from " + current + " to " + next);
    }
    return next;
  }
}
