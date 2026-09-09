export type PrjTaskState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class PrjTaskStateMachine {
  private validTransitions: Record<PrjTaskState, PrjTaskState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: PrjTaskState, next: PrjTaskState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: PrjTaskState, next: PrjTaskState): PrjTaskState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for PrjTask: from " + current + " to " + next);
    }
    return next;
  }
}
