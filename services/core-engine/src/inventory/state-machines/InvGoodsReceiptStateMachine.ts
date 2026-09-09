export type InvGoodsReceiptState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class InvGoodsReceiptStateMachine {
  private validTransitions: Record<InvGoodsReceiptState, InvGoodsReceiptState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: InvGoodsReceiptState, next: InvGoodsReceiptState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: InvGoodsReceiptState, next: InvGoodsReceiptState): InvGoodsReceiptState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for InvGoodsReceipt: from " + current + " to " + next);
    }
    return next;
  }
}
