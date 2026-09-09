export type CrmLeadState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CrmLeadStateMachine {
  private validTransitions: Record<CrmLeadState, CrmLeadState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CrmLeadState, next: CrmLeadState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CrmLeadState, next: CrmLeadState): CrmLeadState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CrmLead: from " + current + " to " + next);
    }
    return next;
  }
}
