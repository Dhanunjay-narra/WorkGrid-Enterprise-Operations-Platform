export type IdTenantState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IdTenantStateMachine {
  private validTransitions: Record<IdTenantState, IdTenantState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IdTenantState, next: IdTenantState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IdTenantState, next: IdTenantState): IdTenantState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IdTenant: from " + current + " to " + next);
    }
    return next;
  }
}
