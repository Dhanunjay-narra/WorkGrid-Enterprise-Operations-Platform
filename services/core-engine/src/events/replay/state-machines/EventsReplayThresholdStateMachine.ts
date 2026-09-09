export type EventsReplayThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class EventsReplayThresholdStateMachine {
  private allowedTransitions: Record<EventsReplayThresholdState, EventsReplayThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: EventsReplayThresholdState, to: EventsReplayThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: EventsReplayThresholdState, to: EventsReplayThresholdState): EventsReplayThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for EventsReplayThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
