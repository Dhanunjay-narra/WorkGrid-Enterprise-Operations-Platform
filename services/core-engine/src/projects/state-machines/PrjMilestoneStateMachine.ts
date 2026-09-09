export type PrjMilestoneState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class PrjMilestoneStateMachine {
  private validTransitions: Record<PrjMilestoneState, PrjMilestoneState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: PrjMilestoneState, next: PrjMilestoneState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: PrjMilestoneState, next: PrjMilestoneState): PrjMilestoneState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for PrjMilestone: from " + current + " to " + next);
    }
    return next;
  }
}
