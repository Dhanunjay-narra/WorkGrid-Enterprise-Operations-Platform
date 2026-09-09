export type CrmCompetitorIntelState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CrmCompetitorIntelStateMachine {
  private validTransitions: Record<CrmCompetitorIntelState, CrmCompetitorIntelState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CrmCompetitorIntelState, next: CrmCompetitorIntelState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CrmCompetitorIntelState, next: CrmCompetitorIntelState): CrmCompetitorIntelState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CrmCompetitorIntel: from " + current + " to " + next);
    }
    return next;
  }
}
