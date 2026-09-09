export type EventsSchemaAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsSchemaAuditLogStateMachine {
  private allowedTransitions: Record<EventsSchemaAuditLogState, EventsSchemaAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsSchemaAuditLogState, to: EventsSchemaAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsSchemaAuditLogState, to: EventsSchemaAuditLogState): EventsSchemaAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsSchemaAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
