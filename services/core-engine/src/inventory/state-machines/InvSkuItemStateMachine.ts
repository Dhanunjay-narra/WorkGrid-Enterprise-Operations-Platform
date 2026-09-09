export type InvSkuItemState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class InvSkuItemStateMachine {
  private validTransitions: Record<InvSkuItemState, InvSkuItemState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: InvSkuItemState, next: InvSkuItemState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: InvSkuItemState, next: InvSkuItemState): InvSkuItemState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for InvSkuItem: from " + current + " to " + next);
    }
    return next;
  }
}
