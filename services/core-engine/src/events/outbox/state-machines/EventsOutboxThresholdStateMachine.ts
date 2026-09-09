export type EventsOutboxThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsOutboxThresholdStateMachine {
  private allowedTransitions: Record<EventsOutboxThresholdState, EventsOutboxThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsOutboxThresholdState, to: EventsOutboxThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsOutboxThresholdState, to: EventsOutboxThresholdState): EventsOutboxThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsOutboxThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
