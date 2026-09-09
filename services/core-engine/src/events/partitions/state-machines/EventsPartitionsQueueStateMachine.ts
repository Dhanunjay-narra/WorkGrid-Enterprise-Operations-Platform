export type EventsPartitionsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsPartitionsQueueStateMachine {
  private allowedTransitions: Record<EventsPartitionsQueueState, EventsPartitionsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsPartitionsQueueState, to: EventsPartitionsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsPartitionsQueueState, to: EventsPartitionsQueueState): EventsPartitionsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsPartitionsQueue: " + from + " -> " + to);
    }
    return to;
  }
}
