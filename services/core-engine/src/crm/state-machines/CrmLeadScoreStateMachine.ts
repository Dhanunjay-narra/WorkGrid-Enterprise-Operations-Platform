export type CrmLeadScoreState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CrmLeadScoreStateMachine {
  private validTransitions: Record<CrmLeadScoreState, CrmLeadScoreState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CrmLeadScoreState, next: CrmLeadScoreState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CrmLeadScoreState, next: CrmLeadScoreState): CrmLeadScoreState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CrmLeadScore: from " + current + " to " + next);
    }
    return next;
  }
}
