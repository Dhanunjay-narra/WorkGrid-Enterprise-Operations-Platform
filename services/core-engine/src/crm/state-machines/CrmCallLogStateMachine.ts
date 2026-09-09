export type CrmCallLogState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CrmCallLogStateMachine {
  private validTransitions: Record<CrmCallLogState, CrmCallLogState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CrmCallLogState, next: CrmCallLogState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CrmCallLogState, next: CrmCallLogState): CrmCallLogState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CrmCallLog: from " + current + " to " + next);
    }
    return next;
  }
}
