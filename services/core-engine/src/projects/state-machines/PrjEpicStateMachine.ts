export type PrjEpicState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class PrjEpicStateMachine {
  private validTransitions: Record<PrjEpicState, PrjEpicState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: PrjEpicState, next: PrjEpicState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: PrjEpicState, next: PrjEpicState): PrjEpicState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for PrjEpic: from " + current + " to " + next);
    }
    return next;
  }
}
