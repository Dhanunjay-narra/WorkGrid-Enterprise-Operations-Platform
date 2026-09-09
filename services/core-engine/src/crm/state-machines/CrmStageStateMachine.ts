export type CrmStageState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CrmStageStateMachine {
  private validTransitions: Record<CrmStageState, CrmStageState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CrmStageState, next: CrmStageState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CrmStageState, next: CrmStageState): CrmStageState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CrmStage: from " + current + " to " + next);
    }
    return next;
  }
}
