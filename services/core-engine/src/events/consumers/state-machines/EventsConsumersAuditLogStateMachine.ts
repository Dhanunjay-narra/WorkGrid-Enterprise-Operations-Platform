export type EventsConsumersAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsConsumersAuditLogStateMachine {
  private allowedTransitions: Record<EventsConsumersAuditLogState, EventsConsumersAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsConsumersAuditLogState, to: EventsConsumersAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsConsumersAuditLogState, to: EventsConsumersAuditLogState): EventsConsumersAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsConsumersAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
