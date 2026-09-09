export type EventsConsumersEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsConsumersEventStateMachine {
  private allowedTransitions: Record<EventsConsumersEventState, EventsConsumersEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsConsumersEventState, to: EventsConsumersEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsConsumersEventState, to: EventsConsumersEventState): EventsConsumersEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsConsumersEvent: " + from + " -> " + to);
    }
    return to;
  }
}
