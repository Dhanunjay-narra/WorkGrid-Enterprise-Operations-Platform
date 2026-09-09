export type PrjReleasePlanState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class PrjReleasePlanStateMachine {
  private validTransitions: Record<PrjReleasePlanState, PrjReleasePlanState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: PrjReleasePlanState, next: PrjReleasePlanState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: PrjReleasePlanState, next: PrjReleasePlanState): PrjReleasePlanState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for PrjReleasePlan: from " + current + " to " + next);
    }
    return next;
  }
}
