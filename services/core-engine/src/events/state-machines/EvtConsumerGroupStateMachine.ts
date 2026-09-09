export type EvtConsumerGroupState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class EvtConsumerGroupStateMachine {
  private validTransitions: Record<EvtConsumerGroupState, EvtConsumerGroupState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: EvtConsumerGroupState, next: EvtConsumerGroupState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: EvtConsumerGroupState, next: EvtConsumerGroupState): EvtConsumerGroupState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for EvtConsumerGroup: from " + current + " to " + next);
    }
    return next;
  }
}
