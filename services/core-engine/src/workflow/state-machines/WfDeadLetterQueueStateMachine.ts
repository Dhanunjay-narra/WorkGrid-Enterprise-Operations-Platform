export type WfDeadLetterQueueState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class WfDeadLetterQueueStateMachine {
  private validTransitions: Record<WfDeadLetterQueueState, WfDeadLetterQueueState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: WfDeadLetterQueueState, next: WfDeadLetterQueueState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: WfDeadLetterQueueState, next: WfDeadLetterQueueState): WfDeadLetterQueueState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for WfDeadLetterQueue: from " + current + " to " + next);
    }
    return next;
  }
}
