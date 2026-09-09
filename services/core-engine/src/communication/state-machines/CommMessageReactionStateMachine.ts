export type CommMessageReactionState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CommMessageReactionStateMachine {
  private validTransitions: Record<CommMessageReactionState, CommMessageReactionState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CommMessageReactionState, next: CommMessageReactionState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CommMessageReactionState, next: CommMessageReactionState): CommMessageReactionState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CommMessageReaction: from " + current + " to " + next);
    }
    return next;
  }
}
