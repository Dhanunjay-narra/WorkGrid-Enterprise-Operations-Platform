export type IdSsoConfigState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IdSsoConfigStateMachine {
  private validTransitions: Record<IdSsoConfigState, IdSsoConfigState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IdSsoConfigState, next: IdSsoConfigState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IdSsoConfigState, next: IdSsoConfigState): IdSsoConfigState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IdSsoConfig: from " + current + " to " + next);
    }
    return next;
  }
}
