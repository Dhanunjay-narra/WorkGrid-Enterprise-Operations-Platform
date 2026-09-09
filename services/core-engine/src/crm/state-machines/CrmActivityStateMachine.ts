export type CrmActivityState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CrmActivityStateMachine {
  private validTransitions: Record<CrmActivityState, CrmActivityState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CrmActivityState, next: CrmActivityState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CrmActivityState, next: CrmActivityState): CrmActivityState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CrmActivity: from " + current + " to " + next);
    }
    return next;
  }
}
