export type EventsConsumersItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsConsumersItemStateMachine {
  private allowedTransitions: Record<EventsConsumersItemState, EventsConsumersItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsConsumersItemState, to: EventsConsumersItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsConsumersItemState, to: EventsConsumersItemState): EventsConsumersItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsConsumersItem: " + from + " -> " + to);
    }
    return to;
  }
}
