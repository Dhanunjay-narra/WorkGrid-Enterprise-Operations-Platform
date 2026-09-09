export type CommTypingStateState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CommTypingStateStateMachine {
  private validTransitions: Record<CommTypingStateState, CommTypingStateState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CommTypingStateState, next: CommTypingStateState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CommTypingStateState, next: CommTypingStateState): CommTypingStateState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CommTypingState: from " + current + " to " + next);
    }
    return next;
  }
}
