export type IdAccessReviewState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IdAccessReviewStateMachine {
  private validTransitions: Record<IdAccessReviewState, IdAccessReviewState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IdAccessReviewState, next: IdAccessReviewState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IdAccessReviewState, next: IdAccessReviewState): IdAccessReviewState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IdAccessReview: from " + current + " to " + next);
    }
    return next;
  }
}
