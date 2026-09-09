export type HrPerformanceReviewState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class HrPerformanceReviewStateMachine {
  private validTransitions: Record<HrPerformanceReviewState, HrPerformanceReviewState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: HrPerformanceReviewState, next: HrPerformanceReviewState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: HrPerformanceReviewState, next: HrPerformanceReviewState): HrPerformanceReviewState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for HrPerformanceReview: from " + current + " to " + next);
    }
    return next;
  }
}
