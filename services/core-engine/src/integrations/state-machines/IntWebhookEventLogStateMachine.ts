export type IntWebhookEventLogState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IntWebhookEventLogStateMachine {
  private validTransitions: Record<IntWebhookEventLogState, IntWebhookEventLogState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IntWebhookEventLogState, next: IntWebhookEventLogState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IntWebhookEventLogState, next: IntWebhookEventLogState): IntWebhookEventLogState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IntWebhookEventLog: from " + current + " to " + next);
    }
    return next;
  }
}
