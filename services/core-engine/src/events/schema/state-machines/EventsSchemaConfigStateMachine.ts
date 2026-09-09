export type EventsSchemaConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsSchemaConfigStateMachine {
  private allowedTransitions: Record<EventsSchemaConfigState, EventsSchemaConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsSchemaConfigState, to: EventsSchemaConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsSchemaConfigState, to: EventsSchemaConfigState): EventsSchemaConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsSchemaConfig: " + from + " -> " + to);
    }
    return to;
  }
}
