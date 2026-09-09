export type CommNotificationsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommNotificationsPayloadStateMachine {
  private allowedTransitions: Record<CommNotificationsPayloadState, CommNotificationsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommNotificationsPayloadState, to: CommNotificationsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommNotificationsPayloadState, to: CommNotificationsPayloadState): CommNotificationsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommNotificationsPayload: " + from + " -> " + to);
    }
    return to;
  }
}
