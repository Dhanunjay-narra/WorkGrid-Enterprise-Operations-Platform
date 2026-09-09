export type EventsPartitionsAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsPartitionsAuditLogStateMachine {
  private allowedTransitions: Record<EventsPartitionsAuditLogState, EventsPartitionsAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsPartitionsAuditLogState, to: EventsPartitionsAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsPartitionsAuditLogState, to: EventsPartitionsAuditLogState): EventsPartitionsAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsPartitionsAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
