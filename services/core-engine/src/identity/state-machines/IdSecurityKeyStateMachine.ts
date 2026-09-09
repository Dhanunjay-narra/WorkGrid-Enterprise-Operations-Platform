export type IdSecurityKeyState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IdSecurityKeyStateMachine {
  private validTransitions: Record<IdSecurityKeyState, IdSecurityKeyState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IdSecurityKeyState, next: IdSecurityKeyState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IdSecurityKeyState, next: IdSecurityKeyState): IdSecurityKeyState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IdSecurityKey: from " + current + " to " + next);
    }
    return next;
  }
}
