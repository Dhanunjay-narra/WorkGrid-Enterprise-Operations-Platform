export type EventsSchemaThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsSchemaThresholdStateMachine {
  private allowedTransitions: Record<EventsSchemaThresholdState, EventsSchemaThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsSchemaThresholdState, to: EventsSchemaThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsSchemaThresholdState, to: EventsSchemaThresholdState): EventsSchemaThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsSchemaThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
