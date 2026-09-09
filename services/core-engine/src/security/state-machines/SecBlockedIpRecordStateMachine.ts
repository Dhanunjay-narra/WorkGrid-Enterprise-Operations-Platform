export type SecBlockedIpRecordState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class SecBlockedIpRecordStateMachine {
  private validTransitions: Record<SecBlockedIpRecordState, SecBlockedIpRecordState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: SecBlockedIpRecordState, next: SecBlockedIpRecordState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: SecBlockedIpRecordState, next: SecBlockedIpRecordState): SecBlockedIpRecordState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for SecBlockedIpRecord: from " + current + " to " + next);
    }
    return next;
  }
}
