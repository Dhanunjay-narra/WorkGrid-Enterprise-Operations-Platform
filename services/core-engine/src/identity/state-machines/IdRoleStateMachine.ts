export type IdRoleState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IdRoleStateMachine {
  private validTransitions: Record<IdRoleState, IdRoleState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IdRoleState, next: IdRoleState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IdRoleState, next: IdRoleState): IdRoleState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IdRole: from " + current + " to " + next);
    }
    return next;
  }
}
