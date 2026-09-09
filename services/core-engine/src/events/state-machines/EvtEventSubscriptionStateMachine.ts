export type EvtEventSubscriptionState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class EvtEventSubscriptionStateMachine {
  private validTransitions: Record<EvtEventSubscriptionState, EvtEventSubscriptionState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: EvtEventSubscriptionState, next: EvtEventSubscriptionState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: EvtEventSubscriptionState, next: EvtEventSubscriptionState): EvtEventSubscriptionState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for EvtEventSubscription: from " + current + " to " + next);
    }
    return next;
  }
}
