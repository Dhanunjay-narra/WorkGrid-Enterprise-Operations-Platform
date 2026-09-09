export type PrjSprintRetrospectiveState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class PrjSprintRetrospectiveStateMachine {
  private validTransitions: Record<PrjSprintRetrospectiveState, PrjSprintRetrospectiveState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: PrjSprintRetrospectiveState, next: PrjSprintRetrospectiveState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: PrjSprintRetrospectiveState, next: PrjSprintRetrospectiveState): PrjSprintRetrospectiveState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for PrjSprintRetrospective: from " + current + " to " + next);
    }
    return next;
  }
}
