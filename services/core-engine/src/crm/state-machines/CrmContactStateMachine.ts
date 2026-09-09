export type CrmContactState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CrmContactStateMachine {
  private validTransitions: Record<CrmContactState, CrmContactState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CrmContactState, next: CrmContactState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CrmContactState, next: CrmContactState): CrmContactState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CrmContact: from " + current + " to " + next);
    }
    return next;
  }
}
