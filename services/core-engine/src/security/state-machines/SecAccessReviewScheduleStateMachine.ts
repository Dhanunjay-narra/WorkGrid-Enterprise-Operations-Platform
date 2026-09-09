export type SecAccessReviewScheduleState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class SecAccessReviewScheduleStateMachine {
  private validTransitions: Record<SecAccessReviewScheduleState, SecAccessReviewScheduleState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: SecAccessReviewScheduleState, next: SecAccessReviewScheduleState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: SecAccessReviewScheduleState, next: SecAccessReviewScheduleState): SecAccessReviewScheduleState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for SecAccessReviewSchedule: from " + current + " to " + next);
    }
    return next;
  }
}
