export type EventsDeadletterAuditLogState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsDeadletterAuditLogStateMachine {
  private allowedTransitions: Record<EventsDeadletterAuditLogState, EventsDeadletterAuditLogState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsDeadletterAuditLogState, to: EventsDeadletterAuditLogState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsDeadletterAuditLogState, to: EventsDeadletterAuditLogState): EventsDeadletterAuditLogState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsDeadletterAuditLog: " + from + " -> " + to);
    }
    return to;
  }
}
