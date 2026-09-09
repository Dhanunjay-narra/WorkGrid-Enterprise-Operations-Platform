export type CommThreadReplyState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CommThreadReplyStateMachine {
  private validTransitions: Record<CommThreadReplyState, CommThreadReplyState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CommThreadReplyState, next: CommThreadReplyState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CommThreadReplyState, next: CommThreadReplyState): CommThreadReplyState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CommThreadReply: from " + current + " to " + next);
    }
    return next;
  }
}
