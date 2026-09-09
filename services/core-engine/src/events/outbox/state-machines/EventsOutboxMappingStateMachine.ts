export type EventsOutboxMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsOutboxMappingStateMachine {
  private allowedTransitions: Record<EventsOutboxMappingState, EventsOutboxMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsOutboxMappingState, to: EventsOutboxMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsOutboxMappingState, to: EventsOutboxMappingState): EventsOutboxMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsOutboxMapping: " + from + " -> " + to);
    }
    return to;
  }
}
