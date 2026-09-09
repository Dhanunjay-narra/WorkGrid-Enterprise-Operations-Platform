export type CommDirectMessageState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CommDirectMessageStateMachine {
  private validTransitions: Record<CommDirectMessageState, CommDirectMessageState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CommDirectMessageState, next: CommDirectMessageState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CommDirectMessageState, next: CommDirectMessageState): CommDirectMessageState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CommDirectMessage: from " + current + " to " + next);
    }
    return next;
  }
}
