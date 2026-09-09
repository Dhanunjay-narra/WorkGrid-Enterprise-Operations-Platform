export type SupSlaPolicyState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class SupSlaPolicyStateMachine {
  private validTransitions: Record<SupSlaPolicyState, SupSlaPolicyState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: SupSlaPolicyState, next: SupSlaPolicyState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: SupSlaPolicyState, next: SupSlaPolicyState): SupSlaPolicyState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for SupSlaPolicy: from " + current + " to " + next);
    }
    return next;
  }
}
