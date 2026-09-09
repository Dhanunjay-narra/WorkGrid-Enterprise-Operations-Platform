export type EventsSchemaQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsSchemaQueueStateMachine {
  private allowedTransitions: Record<EventsSchemaQueueState, EventsSchemaQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsSchemaQueueState, to: EventsSchemaQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsSchemaQueueState, to: EventsSchemaQueueState): EventsSchemaQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsSchemaQueue: " + from + " -> " + to);
    }
    return to;
  }
}
