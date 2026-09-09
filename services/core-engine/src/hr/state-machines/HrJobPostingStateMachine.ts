export type HrJobPostingState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class HrJobPostingStateMachine {
  private validTransitions: Record<HrJobPostingState, HrJobPostingState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: HrJobPostingState, next: HrJobPostingState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: HrJobPostingState, next: HrJobPostingState): HrJobPostingState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for HrJobPosting: from " + current + " to " + next);
    }
    return next;
  }
}
