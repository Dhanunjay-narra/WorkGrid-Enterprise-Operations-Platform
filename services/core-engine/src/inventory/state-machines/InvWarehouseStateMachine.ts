export type InvWarehouseState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class InvWarehouseStateMachine {
  private validTransitions: Record<InvWarehouseState, InvWarehouseState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: InvWarehouseState, next: InvWarehouseState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: InvWarehouseState, next: InvWarehouseState): InvWarehouseState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for InvWarehouse: from " + current + " to " + next);
    }
    return next;
  }
}
