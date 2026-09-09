export type EvtOutboxMessageState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class EvtOutboxMessageStateMachine {
  private validTransitions: Record<EvtOutboxMessageState, EvtOutboxMessageState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: EvtOutboxMessageState, next: EvtOutboxMessageState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: EvtOutboxMessageState, next: EvtOutboxMessageState): EvtOutboxMessageState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for EvtOutboxMessage: from " + current + " to " + next);
    }
    return next;
  }
}
