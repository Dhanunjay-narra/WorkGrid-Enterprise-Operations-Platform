export type EventsSchemaTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsSchemaTaskStateMachine {
  private allowedTransitions: Record<EventsSchemaTaskState, EventsSchemaTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsSchemaTaskState, to: EventsSchemaTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsSchemaTaskState, to: EventsSchemaTaskState): EventsSchemaTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsSchemaTask: " + from + " -> " + to);
    }
    return to;
  }
}
