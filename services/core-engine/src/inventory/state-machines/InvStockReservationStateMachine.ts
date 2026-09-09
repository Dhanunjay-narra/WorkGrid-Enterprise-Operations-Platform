export type InvStockReservationState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class InvStockReservationStateMachine {
  private validTransitions: Record<InvStockReservationState, InvStockReservationState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: InvStockReservationState, next: InvStockReservationState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: InvStockReservationState, next: InvStockReservationState): InvStockReservationState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for InvStockReservation: from " + current + " to " + next);
    }
    return next;
  }
}
