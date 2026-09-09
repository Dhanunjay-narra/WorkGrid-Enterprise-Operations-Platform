export type IdSessionState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IdSessionStateMachine {
  private validTransitions: Record<IdSessionState, IdSessionState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IdSessionState, next: IdSessionState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IdSessionState, next: IdSessionState): IdSessionState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IdSession: from " + current + " to " + next);
    }
    return next;
  }
}
