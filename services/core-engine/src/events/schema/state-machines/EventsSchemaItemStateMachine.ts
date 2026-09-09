export type EventsSchemaItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsSchemaItemStateMachine {
  private allowedTransitions: Record<EventsSchemaItemState, EventsSchemaItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsSchemaItemState, to: EventsSchemaItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsSchemaItemState, to: EventsSchemaItemState): EventsSchemaItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsSchemaItem: " + from + " -> " + to);
    }
    return to;
  }
}
