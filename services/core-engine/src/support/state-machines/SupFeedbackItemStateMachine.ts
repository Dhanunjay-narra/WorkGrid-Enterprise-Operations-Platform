export type SupFeedbackItemState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class SupFeedbackItemStateMachine {
  private validTransitions: Record<SupFeedbackItemState, SupFeedbackItemState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: SupFeedbackItemState, next: SupFeedbackItemState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: SupFeedbackItemState, next: SupFeedbackItemState): SupFeedbackItemState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for SupFeedbackItem: from " + current + " to " + next);
    }
    return next;
  }
}
