export type IdPolicyState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IdPolicyStateMachine {
  private validTransitions: Record<IdPolicyState, IdPolicyState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IdPolicyState, next: IdPolicyState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IdPolicyState, next: IdPolicyState): IdPolicyState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IdPolicy: from " + current + " to " + next);
    }
    return next;
  }
}
