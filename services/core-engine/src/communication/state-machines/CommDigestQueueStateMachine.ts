export type CommDigestQueueState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CommDigestQueueStateMachine {
  private validTransitions: Record<CommDigestQueueState, CommDigestQueueState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CommDigestQueueState, next: CommDigestQueueState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CommDigestQueueState, next: CommDigestQueueState): CommDigestQueueState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CommDigestQueue: from " + current + " to " + next);
    }
    return next;
  }
}
