export type InvWarehouseZoneState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class InvWarehouseZoneStateMachine {
  private validTransitions: Record<InvWarehouseZoneState, InvWarehouseZoneState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: InvWarehouseZoneState, next: InvWarehouseZoneState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: InvWarehouseZoneState, next: InvWarehouseZoneState): InvWarehouseZoneState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for InvWarehouseZone: from " + current + " to " + next);
    }
    return next;
  }
}
