export type CrmEmailSequenceState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CrmEmailSequenceStateMachine {
  private validTransitions: Record<CrmEmailSequenceState, CrmEmailSequenceState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CrmEmailSequenceState, next: CrmEmailSequenceState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CrmEmailSequenceState, next: CrmEmailSequenceState): CrmEmailSequenceState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CrmEmailSequence: from " + current + " to " + next);
    }
    return next;
  }
}
