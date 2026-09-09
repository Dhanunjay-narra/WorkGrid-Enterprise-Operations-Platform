export type IdGroupMembershipState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IdGroupMembershipStateMachine {
  private validTransitions: Record<IdGroupMembershipState, IdGroupMembershipState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IdGroupMembershipState, next: IdGroupMembershipState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IdGroupMembershipState, next: IdGroupMembershipState): IdGroupMembershipState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IdGroupMembership: from " + current + " to " + next);
    }
    return next;
  }
}
