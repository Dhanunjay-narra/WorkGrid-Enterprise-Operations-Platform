export type EventsConsumersEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsConsumersEntryStateMachine {
  private allowedTransitions: Record<EventsConsumersEntryState, EventsConsumersEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsConsumersEntryState, to: EventsConsumersEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsConsumersEntryState, to: EventsConsumersEntryState): EventsConsumersEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsConsumersEntry: " + from + " -> " + to);
    }
    return to;
  }
}
