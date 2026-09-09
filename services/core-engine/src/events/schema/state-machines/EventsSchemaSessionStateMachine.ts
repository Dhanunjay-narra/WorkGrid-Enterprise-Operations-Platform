export type EventsSchemaSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsSchemaSessionStateMachine {
  private allowedTransitions: Record<EventsSchemaSessionState, EventsSchemaSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsSchemaSessionState, to: EventsSchemaSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsSchemaSessionState, to: EventsSchemaSessionState): EventsSchemaSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsSchemaSession: " + from + " -> " + to);
    }
    return to;
  }
}
