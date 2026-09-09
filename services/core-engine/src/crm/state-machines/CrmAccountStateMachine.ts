export type CrmAccountState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CrmAccountStateMachine {
  private validTransitions: Record<CrmAccountState, CrmAccountState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CrmAccountState, next: CrmAccountState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CrmAccountState, next: CrmAccountState): CrmAccountState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CrmAccount: from " + current + " to " + next);
    }
    return next;
  }
}
