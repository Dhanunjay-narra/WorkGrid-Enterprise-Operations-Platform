export type EventsSchemaEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsSchemaEventStateMachine {
  private allowedTransitions: Record<EventsSchemaEventState, EventsSchemaEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsSchemaEventState, to: EventsSchemaEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsSchemaEventState, to: EventsSchemaEventState): EventsSchemaEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsSchemaEvent: " + from + " -> " + to);
    }
    return to;
  }
}
