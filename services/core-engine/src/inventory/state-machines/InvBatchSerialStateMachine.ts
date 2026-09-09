export type InvBatchSerialState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class InvBatchSerialStateMachine {
  private validTransitions: Record<InvBatchSerialState, InvBatchSerialState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: InvBatchSerialState, next: InvBatchSerialState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: InvBatchSerialState, next: InvBatchSerialState): InvBatchSerialState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for InvBatchSerial: from " + current + " to " + next);
    }
    return next;
  }
}
