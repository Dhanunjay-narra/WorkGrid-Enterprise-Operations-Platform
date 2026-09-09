export type CommChatMessageState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CommChatMessageStateMachine {
  private validTransitions: Record<CommChatMessageState, CommChatMessageState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CommChatMessageState, next: CommChatMessageState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CommChatMessageState, next: CommChatMessageState): CommChatMessageState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CommChatMessage: from " + current + " to " + next);
    }
    return next;
  }
}
