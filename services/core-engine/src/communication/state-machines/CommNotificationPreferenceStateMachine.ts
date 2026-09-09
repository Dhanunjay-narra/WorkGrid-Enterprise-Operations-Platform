export type CommNotificationPreferenceState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CommNotificationPreferenceStateMachine {
  private validTransitions: Record<CommNotificationPreferenceState, CommNotificationPreferenceState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CommNotificationPreferenceState, next: CommNotificationPreferenceState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CommNotificationPreferenceState, next: CommNotificationPreferenceState): CommNotificationPreferenceState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CommNotificationPreference: from " + current + " to " + next);
    }
    return next;
  }
}
