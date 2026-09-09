export type PrjSprintState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class PrjSprintStateMachine {
  private validTransitions: Record<PrjSprintState, PrjSprintState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: PrjSprintState, next: PrjSprintState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: PrjSprintState, next: PrjSprintState): PrjSprintState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for PrjSprint: from " + current + " to " + next);
    }
    return next;
  }
}
