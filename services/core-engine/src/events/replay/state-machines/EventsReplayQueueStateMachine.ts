export type EventsReplayQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsReplayQueueStateMachine {
  private allowedTransitions: Record<EventsReplayQueueState, EventsReplayQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsReplayQueueState, to: EventsReplayQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsReplayQueueState, to: EventsReplayQueueState): EventsReplayQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsReplayQueue: " + from + " -> " + to);
    }
    return to;
  }
}
