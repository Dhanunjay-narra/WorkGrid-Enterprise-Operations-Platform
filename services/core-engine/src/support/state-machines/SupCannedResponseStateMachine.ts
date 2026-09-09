export type SupCannedResponseState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class SupCannedResponseStateMachine {
  private validTransitions: Record<SupCannedResponseState, SupCannedResponseState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: SupCannedResponseState, next: SupCannedResponseState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: SupCannedResponseState, next: SupCannedResponseState): SupCannedResponseState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for SupCannedResponse: from " + current + " to " + next);
    }
    return next;
  }
}
