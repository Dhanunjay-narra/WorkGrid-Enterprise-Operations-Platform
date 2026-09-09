export type IdUserState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IdUserStateMachine {
  private validTransitions: Record<IdUserState, IdUserState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IdUserState, next: IdUserState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IdUserState, next: IdUserState): IdUserState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IdUser: from " + current + " to " + next);
    }
    return next;
  }
}
