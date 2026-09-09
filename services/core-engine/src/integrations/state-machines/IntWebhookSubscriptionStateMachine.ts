export type IntWebhookSubscriptionState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IntWebhookSubscriptionStateMachine {
  private validTransitions: Record<IntWebhookSubscriptionState, IntWebhookSubscriptionState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IntWebhookSubscriptionState, next: IntWebhookSubscriptionState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IntWebhookSubscriptionState, next: IntWebhookSubscriptionState): IntWebhookSubscriptionState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IntWebhookSubscription: from " + current + " to " + next);
    }
    return next;
  }
}
