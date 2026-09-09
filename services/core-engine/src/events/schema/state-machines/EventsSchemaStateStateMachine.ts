export type EventsSchemaStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsSchemaStateStateMachine {
  private allowedTransitions: Record<EventsSchemaStateState, EventsSchemaStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsSchemaStateState, to: EventsSchemaStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsSchemaStateState, to: EventsSchemaStateState): EventsSchemaStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsSchemaState: " + from + " -> " + to);
    }
    return to;
  }
}
