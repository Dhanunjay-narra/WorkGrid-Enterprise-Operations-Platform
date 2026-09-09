export type CommNotificationsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommNotificationsRecordStateMachine {
  private allowedTransitions: Record<CommNotificationsRecordState, CommNotificationsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommNotificationsRecordState, to: CommNotificationsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommNotificationsRecordState, to: CommNotificationsRecordState): CommNotificationsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommNotificationsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
