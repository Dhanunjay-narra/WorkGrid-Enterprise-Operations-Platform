export type EventsReplayAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsReplayAuditLogStateMachine {
  private allowedTransitions: Record<EventsReplayAuditLogState, EventsReplayAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsReplayAuditLogState, to: EventsReplayAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsReplayAuditLogState, to: EventsReplayAuditLogState): EventsReplayAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsReplayAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
