export type CommWebhookDispatchLogState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CommWebhookDispatchLogStateMachine {
  private validTransitions: Record<CommWebhookDispatchLogState, CommWebhookDispatchLogState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CommWebhookDispatchLogState, next: CommWebhookDispatchLogState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CommWebhookDispatchLogState, next: CommWebhookDispatchLogState): CommWebhookDispatchLogState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CommWebhookDispatchLog: from " + current + " to " + next);
    }
    return next;
  }
}
