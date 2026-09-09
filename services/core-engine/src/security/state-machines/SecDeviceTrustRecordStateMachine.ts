export type SecDeviceTrustRecordState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class SecDeviceTrustRecordStateMachine {
  private validTransitions: Record<SecDeviceTrustRecordState, SecDeviceTrustRecordState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: SecDeviceTrustRecordState, next: SecDeviceTrustRecordState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: SecDeviceTrustRecordState, next: SecDeviceTrustRecordState): SecDeviceTrustRecordState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for SecDeviceTrustRecord: from " + current + " to " + next);
    }
    return next;
  }
}
