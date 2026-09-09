export type EventsConsumersConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsConsumersConfigStateMachine {
  private allowedTransitions: Record<EventsConsumersConfigState, EventsConsumersConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsConsumersConfigState, to: EventsConsumersConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsConsumersConfigState, to: EventsConsumersConfigState): EventsConsumersConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsConsumersConfig: " + from + " -> " + to);
    }
    return to;
  }
}
