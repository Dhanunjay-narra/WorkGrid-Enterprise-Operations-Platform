export type InvStockMovementState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class InvStockMovementStateMachine {
  private validTransitions: Record<InvStockMovementState, InvStockMovementState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: InvStockMovementState, next: InvStockMovementState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: InvStockMovementState, next: InvStockMovementState): InvStockMovementState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for InvStockMovement: from " + current + " to " + next);
    }
    return next;
  }
}
