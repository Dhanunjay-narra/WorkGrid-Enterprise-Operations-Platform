export type EventsOutboxQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsOutboxQueueStateMachine {
  private allowedTransitions: Record<EventsOutboxQueueState, EventsOutboxQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsOutboxQueueState, to: EventsOutboxQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsOutboxQueueState, to: EventsOutboxQueueState): EventsOutboxQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsOutboxQueue: " + from + " -> " + to);
    }
    return to;
  }
}
