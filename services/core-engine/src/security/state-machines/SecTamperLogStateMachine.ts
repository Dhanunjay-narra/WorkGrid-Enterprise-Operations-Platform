export type SecTamperLogState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class SecTamperLogStateMachine {
  private validTransitions: Record<SecTamperLogState, SecTamperLogState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: SecTamperLogState, next: SecTamperLogState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: SecTamperLogState, next: SecTamperLogState): SecTamperLogState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for SecTamperLog: from " + current + " to " + next);
    }
    return next;
  }
}
