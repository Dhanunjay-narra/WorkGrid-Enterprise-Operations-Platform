export type InvStockLevelState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class InvStockLevelStateMachine {
  private validTransitions: Record<InvStockLevelState, InvStockLevelState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: InvStockLevelState, next: InvStockLevelState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: InvStockLevelState, next: InvStockLevelState): InvStockLevelState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for InvStockLevel: from " + current + " to " + next);
    }
    return next;
  }
}
