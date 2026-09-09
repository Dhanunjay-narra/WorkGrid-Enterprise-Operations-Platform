export type EventsOutboxItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsOutboxItemStateMachine {
  private allowedTransitions: Record<EventsOutboxItemState, EventsOutboxItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsOutboxItemState, to: EventsOutboxItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsOutboxItemState, to: EventsOutboxItemState): EventsOutboxItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsOutboxItem: " + from + " -> " + to);
    }
    return to;
  }
}
