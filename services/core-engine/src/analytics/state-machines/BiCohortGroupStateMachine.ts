export type BiCohortGroupState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class BiCohortGroupStateMachine {
  private validTransitions: Record<BiCohortGroupState, BiCohortGroupState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: BiCohortGroupState, next: BiCohortGroupState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: BiCohortGroupState, next: BiCohortGroupState): BiCohortGroupState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for BiCohortGroup: from " + current + " to " + next);
    }
    return next;
  }
}
