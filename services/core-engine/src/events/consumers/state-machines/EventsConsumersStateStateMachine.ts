export type EventsConsumersStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsConsumersStateStateMachine {
  private allowedTransitions: Record<EventsConsumersStateState, EventsConsumersStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsConsumersStateState, to: EventsConsumersStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsConsumersStateState, to: EventsConsumersStateState): EventsConsumersStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsConsumersState: " + from + " -> " + to);
    }
    return to;
  }
}
