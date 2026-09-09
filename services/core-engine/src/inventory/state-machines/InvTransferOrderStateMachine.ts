export type InvTransferOrderState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class InvTransferOrderStateMachine {
  private validTransitions: Record<InvTransferOrderState, InvTransferOrderState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: InvTransferOrderState, next: InvTransferOrderState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: InvTransferOrderState, next: InvTransferOrderState): InvTransferOrderState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for InvTransferOrder: from " + current + " to " + next);
    }
    return next;
  }
}
