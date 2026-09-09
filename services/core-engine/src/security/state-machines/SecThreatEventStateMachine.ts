export type SecThreatEventState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class SecThreatEventStateMachine {
  private validTransitions: Record<SecThreatEventState, SecThreatEventState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: SecThreatEventState, next: SecThreatEventState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: SecThreatEventState, next: SecThreatEventState): SecThreatEventState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for SecThreatEvent: from " + current + " to " + next);
    }
    return next;
  }
}
