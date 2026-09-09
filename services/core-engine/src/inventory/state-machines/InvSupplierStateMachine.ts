export type InvSupplierState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class InvSupplierStateMachine {
  private validTransitions: Record<InvSupplierState, InvSupplierState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: InvSupplierState, next: InvSupplierState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: InvSupplierState, next: InvSupplierState): InvSupplierState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for InvSupplier: from " + current + " to " + next);
    }
    return next;
  }
}
