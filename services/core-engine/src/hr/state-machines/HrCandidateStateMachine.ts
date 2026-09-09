export type HrCandidateState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class HrCandidateStateMachine {
  private validTransitions: Record<HrCandidateState, HrCandidateState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: HrCandidateState, next: HrCandidateState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: HrCandidateState, next: HrCandidateState): HrCandidateState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for HrCandidate: from " + current + " to " + next);
    }
    return next;
  }
}
