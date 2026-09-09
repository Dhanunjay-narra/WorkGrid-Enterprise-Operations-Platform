export type PrjProjectState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class PrjProjectStateMachine {
  private validTransitions: Record<PrjProjectState, PrjProjectState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: PrjProjectState, next: PrjProjectState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: PrjProjectState, next: PrjProjectState): PrjProjectState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for PrjProject: from " + current + " to " + next);
    }
    return next;
  }
}
