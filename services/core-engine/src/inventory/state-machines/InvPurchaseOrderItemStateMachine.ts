export type InvPurchaseOrderItemState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class InvPurchaseOrderItemStateMachine {
  private validTransitions: Record<InvPurchaseOrderItemState, InvPurchaseOrderItemState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: InvPurchaseOrderItemState, next: InvPurchaseOrderItemState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: InvPurchaseOrderItemState, next: InvPurchaseOrderItemState): InvPurchaseOrderItemState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for InvPurchaseOrderItem: from " + current + " to " + next);
    }
    return next;
  }
}
