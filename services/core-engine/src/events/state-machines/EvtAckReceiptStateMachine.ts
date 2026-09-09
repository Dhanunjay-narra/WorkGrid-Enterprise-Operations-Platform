export type EvtAckReceiptState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class EvtAckReceiptStateMachine {
  private validTransitions: Record<EvtAckReceiptState, EvtAckReceiptState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: EvtAckReceiptState, next: EvtAckReceiptState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: EvtAckReceiptState, next: EvtAckReceiptState): EvtAckReceiptState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for EvtAckReceipt: from " + current + " to " + next);
    }
    return next;
  }
}
