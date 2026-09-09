export type SecSecurityPolicyState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class SecSecurityPolicyStateMachine {
  private validTransitions: Record<SecSecurityPolicyState, SecSecurityPolicyState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: SecSecurityPolicyState, next: SecSecurityPolicyState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: SecSecurityPolicyState, next: SecSecurityPolicyState): SecSecurityPolicyState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for SecSecurityPolicy: from " + current + " to " + next);
    }
    return next;
  }
}
