export type IntProviderRateLimitState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IntProviderRateLimitStateMachine {
  private validTransitions: Record<IntProviderRateLimitState, IntProviderRateLimitState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IntProviderRateLimitState, next: IntProviderRateLimitState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IntProviderRateLimitState, next: IntProviderRateLimitState): IntProviderRateLimitState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IntProviderRateLimit: from " + current + " to " + next);
    }
    return next;
  }
}
