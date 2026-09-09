export type CommBroadcastAnnouncementState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CommBroadcastAnnouncementStateMachine {
  private validTransitions: Record<CommBroadcastAnnouncementState, CommBroadcastAnnouncementState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CommBroadcastAnnouncementState, next: CommBroadcastAnnouncementState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CommBroadcastAnnouncementState, next: CommBroadcastAnnouncementState): CommBroadcastAnnouncementState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CommBroadcastAnnouncement: from " + current + " to " + next);
    }
    return next;
  }
}
