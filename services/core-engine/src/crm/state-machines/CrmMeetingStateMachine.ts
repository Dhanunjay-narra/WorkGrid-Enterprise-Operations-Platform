export type CrmMeetingState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CrmMeetingStateMachine {
  private validTransitions: Record<CrmMeetingState, CrmMeetingState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CrmMeetingState, next: CrmMeetingState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CrmMeetingState, next: CrmMeetingState): CrmMeetingState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CrmMeeting: from " + current + " to " + next);
    }
    return next;
  }
}
