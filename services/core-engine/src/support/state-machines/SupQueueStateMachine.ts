export type SupQueueState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class SupQueueStateMachine {
  private validTransitions: Record<SupQueueState, SupQueueState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: SupQueueState, next: SupQueueState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: SupQueueState, next: SupQueueState): SupQueueState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for SupQueue: from " + current + " to " + next);
    }
    return next;
  }
}
