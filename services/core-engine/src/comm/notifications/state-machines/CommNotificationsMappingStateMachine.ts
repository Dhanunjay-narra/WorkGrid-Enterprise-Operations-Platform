export type CommNotificationsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommNotificationsMappingStateMachine {
  private allowedTransitions: Record<CommNotificationsMappingState, CommNotificationsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommNotificationsMappingState, to: CommNotificationsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommNotificationsMappingState, to: CommNotificationsMappingState): CommNotificationsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommNotificationsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
